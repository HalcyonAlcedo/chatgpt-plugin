import plugin from '../../../lib/plugins/plugin.js'
import { ChatGPTAPI } from 'chatgpt'
import _ from 'lodash'
import { Config } from '../config/index.js'
import showdown from 'showdown'
// import mjAPI from 'mathjax-node'
import chatGPTPuppeteer, { handleCookie } from '../utils/autoLogin.js'
// import showdownKatex from 'showdown-katex'
// const SESSION_TOKEN = Config.token
// const CF_CLEARANCE = Config.cfClearance
const blockWords = '屏蔽词1,屏蔽词2,屏蔽词3'
const converter = new showdown.Converter({
  extensions: [
    // showdownKatex({
    //   delimiters: [
    //     { left: '$$', right: '$$', display: false },
    //     { left: '$', right: '$', display: false, inline: true },
    //     { left: '\\(', right: '\\)', display: false },
    //     { left: '\\[', right: '\\]', display: true }
    //   ]
    // })
  ]
})

// mjAPI.config({
//   MathJax: {
//     // traditional MathJax configuration
//   }
// })
// mjAPI.start()

export class chatgpt extends plugin {
  constructor () {
    super({
      /** 功能名称 */
      name: 'chatgpt',
      /** 功能描述 */
      dsc: 'chatgpt from openai',
      /** https://oicqjs.github.io/oicq/#events */
      event: 'message',
      /** 优先级，数字越小等级越高 */
      priority: 8000,
      rule: [
        {
          /** 命令正则匹配 */
          reg: '^[^#][sS]*',
          /** 执行方法 */
          fnc: 'chatgpt'
        },
        {
          reg: '#chatgpt对话列表',
          fnc: 'getConversations',
          permission: 'master'
        },
        {
          reg: '^#结束对话([sS]*)',
          fnc: 'destroyConversations'
        },
        // {
        //   reg: '#chatgpt帮助',
        //   fnc: 'help'
        // },
        {
          reg: '#chatgpt图片模式',
          fnc: 'switch2Picture'
        },
        {
          reg: '#chatgpt文本模式',
          fnc: 'switch2Text'
        }
      ]
    })
    this.task = {
      name: 'chatgpt自动登录OpenAI',
      fnc: () => this.autoLogin(),
      cron: '0 */15 * * * ?'
    }
    logger.info('chatgpt插件已加载')
  }

  async autoLogin () {
    logger.info('每15分钟检查登录状态')
    try {
      await this.chatGPTApi.ensureAuth()
    } catch (e) {
      let retry = 5
      while (retry > 0) {
        retry--
        try {
          await chatGPTPuppeteer.login()
          logger.info('重新登录成功')
          break
        } catch (e) {
          logger.error('每15分钟重新登录一次失败，重试次数剩余' + retry, e)
          if (retry === 0) {
            logger.error('5次尝试均失败，15分钟后再试')
          }
        }
      }
    }
  }

  /**
     * 获取chatgpt当前对话列表
     * @param e
     * @returns {Promise<void>}
     */
  async getConversations (e) {
    let keys = await redis.keys('CHATGPT:CONVERSATIONS:*')
    if (!keys || keys.length === 0) {
      await this.reply('当前没有人正在与机器人对话', true)
    } else {
      let response = '当前对话列表：(格式为【开始时间 ｜ qq昵称 ｜ 对话长度 ｜ 最后活跃时间】)\n'
      await Promise.all(keys.map(async (key) => {
        let conversation = await redis.get(key)
        if (conversation) {
          conversation = JSON.parse(conversation)
          response += `${conversation.ctime} ｜ ${conversation.sender.nickname} ｜ ${conversation.num} ｜ ${conversation.utime} \n`
        }
      }))
      await this.reply(`${response}`, true)
    }
  }

  createAPI (sessionToken, clearanceToken) {
    this.chatGPTApi = new ChatGPTAPI({
      sessionToken,
      clearanceToken,
      markdown: true,
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36'
    })
  }

  /**
     * 销毁指定人的对话
     * @param e
     * @returns {Promise<void>}
     */
  async destroyConversations (e) {
    let ats = e.message.filter(m => m.type === 'at')
    if (ats.length === 0) {
      let c = await redis.get(`CHATGPT:CONVERSATIONS:${e.sender.user_id}`)
      if (!c) {
        await this.reply('当前没有开启对话', true)
      } else {
        await redis.del(`CHATGPT:CONVERSATIONS:${e.sender.user_id}`)
        await this.reply('已结束当前对话，请@我进行聊天以开启新的对话', true)
      }
    } else {
      let at = ats[0]
      let qq = at.qq
      let atUser = _.trimStart(at.text, '@')
      let c = await redis.get(`CHATGPT:CONVERSATIONS:${qq}`)
      if (!c) {
        await this.reply(`当前${atUser}没有开启对话`, true)
      } else {
        await redis.del(`CHATGPT:CONVERSATIONS:${qq}`)
        await this.reply(`已结束${atUser}的对话，他仍可以@我进行聊天以开启新的对话`, true)
      }
    }
  }

  async help (e) {
    let response = 'chatgpt-plugin使用帮助文字版\n' +
            '@我+聊天内容: 发起对话与AI进行聊天\n' +
            '#chatgpt对话列表: 查看当前发起的对话\n' +
            '#结束对话: 结束自己或@用户的对话\n' +
            '#chatgpt帮助: 查看本帮助\n' +
            '源代码：https://github.com/ikechan8370/chatgpt-plugin'
    await this.reply(response)
  }

  async switch2Picture (e) {
    let userSetting = await redis.get(`CHATGPT:USER:${e.sender.user_id}`)
    if (!userSetting) {
      userSetting = { usePicture: true }
    } else {
      userSetting = JSON.parse(userSetting)
    }
    userSetting.usePicture = true
    await redis.set(`CHATGPT:USER:${e.sender.user_id}`, JSON.stringify(userSetting))
    await this.reply('ChatGPT回复已转换为图片模式')
  }

  async switch2Text (e) {
    let userSetting = await redis.get(`CHATGPT:USER:${e.sender.user_id}`)
    if (!userSetting) {
      userSetting = { usePicture: false }
    } else {
      userSetting = JSON.parse(userSetting)
    }
    userSetting.usePicture = false
    await redis.set(`CHATGPT:USER:${e.sender.user_id}`, JSON.stringify(userSetting))
    await this.reply('ChatGPT回复已转换为文字模式')
  }

  /**
     * #chatgpt
     * @param e oicq传递的事件参数e
     */
  async chatgpt (e) {
    if (!e.msg || e.msg.startsWith('#')) {
      return
    }
    if (e.isGroup && !e.atme) {
      return
    }
    let cookie = await redis.get('CHATGPT:COOKIES')
    if (cookie) {
      let cookieMap = handleCookie(JSON.parse(cookie))
      this.createAPI(cookieMap['__Secure-next-auth.session-token'], cookieMap.cf_clearance)
    } else {
      if (Config.token && Config.cfClearance) {
        this.createAPI(Config.token, Config.cfClearance)
      } else if (Config.username && Config.password) {
        logger.info('首次登录chatgpt')
        await this.reply('首次使用本插件正在初始化自动登录中……', true, { recallMsg: 5 })
        try {
          let newCookie = await chatGPTPuppeteer.login()
          this.createAPI(newCookie['__Secure-next-auth.session-token'], newCookie.cf_clearance)
        } catch (e) {
          await this.reply('自动登录失败，请检查日志或稍后重试', true)
          return
        }
      } else {
        logger.error('未配置OpenAI认证信息')
        await this.reply('未配置OpenAI认证信息！', true)
        return
      }
    }
    // let question = _.trimStart(e.msg, '#chatgpt')
    let question = e.msg.trimStart()
    // await e.runtime.render('chatgpt-plugin', 'content/index', { content: "", question })
    // return
    try {
      await this.chatGPTApi.ensureAuth()
    } catch (e) {
      if (Config.username && Config.password) {
        logger.info('token过期，准备重新登录，可能会耗费较长时间')
        let newCookie = await chatGPTPuppeteer.login()
        this.createAPI(newCookie['__Secure-next-auth.session-token'], newCookie.cf_clearance)
        try {
          await this.chatGPTApi.ensureAuth()
          logger.info('重新自动登录成功')
        } catch (e) {
          logger.error('重新登录失败，可能是因为CF刷出了验证码，请多试几次', e)
          await this.reply('重新登录失败，可能是因为CF刷出了验证码', true)
          return
        }
      } else {
        logger.error(e)
        await this.reply(`OpenAI认证失败，请检查Token：${e}`, true)
        return
      }
    }
    await this.reply('我正在思考如何回复你，请稍等', true, { recallMsg: 5 })
    let c
    logger.info(`chatgpt question: ${question}`)
    let previousConversation = await redis.get(`CHATGPT:CONVERSATIONS:${e.sender.user_id}`)
    if (!previousConversation) {
      c = this.chatGPTApi.getConversation()
      let ctime = new Date()
      previousConversation = {
        sender: e.sender,
        conversation: c,
        ctime,
        utime: ctime,
        num: 0
      }
      await redis.set(`CHATGPT:CONVERSATIONS:${e.sender.user_id}`, JSON.stringify(previousConversation), { EX: Config.conversationPreserveTime })
    } else {
      previousConversation = JSON.parse(previousConversation)
      c = this.chatGPTApi.getConversation({
        conversationId: previousConversation.conversation.conversationId,
        parentMessageId: previousConversation.conversation.parentMessageId
      })
    }
    try {
      let response = await c.sendMessage(question)
      // 更新redis中的conversation对象，因为send后c已经被自动更新了
      await redis.set(`CHATGPT:CONVERSATIONS:${e.sender.user_id}`, JSON.stringify({
        sender: e.sender,
        conversation: c,
        ctime: previousConversation.ctime,
        utime: new Date(),
        num: previousConversation.num + 1
      }), { EX: Config.conversationPreserveTime })

      // 检索是否有屏蔽词
      const blockWord = blockWords.split(',').find(word => response.toLowerCase().includes(word.toLowerCase()))
      if (blockWord) {
        await this.reply('返回内容存在敏感词，我不想回答你', true)
        return
      }
      let userSetting = await redis.get(`CHATGPT:USER:${e.sender.user_id}`)
      if (userSetting) {
        userSetting = JSON.parse(userSetting)
      } else {
        userSetting = {
          usePicture: Config.defaultUsePicture
        }
      }
      if (userSetting.usePicture) {
        let endTokens = ['.', '。', '……', '!', '！', ']', ')', '）', '】', '?', '？', '~']
        while (!endTokens.find(token => response.trimEnd().endsWith(token))) {
          await this.reply('内容有点多，我正在奋笔疾书，请再等一会', true, { recallMsg: 5 })
          const responseAppend = await c.sendMessage('Continue')
          // console.log(responseAppend)
          // 检索是否有屏蔽词
          const blockWord = blockWords.split(',').find(word => responseAppend.toLowerCase().includes(word.toLowerCase()))
          if (blockWord) {
            await this.reply('返回内容存在敏感词，我不想回答你', true)
            return
          }
          if (responseAppend.indexOf('conversation') > -1 || responseAppend.startsWith("I'm sorry")) {
            logger.warn('chatgpt might forget what it had said')
            break
          }
          // 更新redis中的conversation对象，因为send后c已经被自动更新了
          await redis.set(`CHATGPT:CONVERSATIONS:${e.sender.user_id}`, JSON.stringify({
            sender: e.sender,
            conversation: c,
            ctime: previousConversation.ctime,
            utime: new Date(),
            num: previousConversation.num + 1
          }), { EX: Config.conversationPreserveTime })

          response = response + responseAppend
        }
        // logger.info(response)
        // markdown转为html
        // todo部分数学公式可能还有问题
        let converted = converter.makeHtml(response)

        /** 最后回复消息 */
        await e.runtime.render('chatgpt-plugin', 'content/index', {
          content: converted,
          question,
          senderName: e.sender.nickname
        })
      } else {
        await this.reply(`${response}`, e.isGroup)
      }
    } catch (e) {
      logger.error(e)
      await this.reply(`与OpenAI服务器通信异常，请稍后重试：${e}`, true, { recallMsg: e.isGroup ? 10 : 0 })
    }
  }
}
