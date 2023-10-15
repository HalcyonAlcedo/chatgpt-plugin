import{c as re,p as ie,I as de,m as ce,a as me,b as ve,e as fe,f as pe,g as ge,i as be,j as _e,k as ye,l as Ve,n as ke,u as xe,o as U,q as we,s as Ce,t as Pe,v as he,w as Ae,x as $e,y as Se,z as De,A as Te,B as Be,C as Ie,D as e,E as qe,F as q,G as H,H as N,J as z,K as L,L as F,M as X,N as Ue,O as f,P as I,Q as b,R as x,S as a,T as k,U as A,W as w,X as Re,Y,Z,_ as $,$ as S,a0 as c,a1 as D,a2 as E,a3 as K,a4 as P,a5 as C,a6 as B,a7 as ee,a8 as Ne,a9 as ze,aa as R,ab as Le}from"./index.550d1358.js";import{V as Fe}from"./VTable.b425e519.js";import{V as Ee}from"./VCheckbox.81ecef33.js";import{m as J}from"./md5.0c013eb9.js";import{b as Q}from"./route-block.7577f022.js";import"./VCheckboxBtn.20ca7725.js";const te=re("v-alert-title"),Ke=["success","info","warning","error"],Oe=ie({border:{type:[Boolean,String],validator:t=>typeof t=="boolean"||["top","end","bottom","start"].includes(t)},borderColor:String,closable:Boolean,closeIcon:{type:de,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:t=>Ke.includes(t)},...ce(),...me(),...ve(),...fe(),...pe(),...ge(),...be(),..._e(),...ye(),...Ve({variant:"flat"})},"VAlert"),We=ke()({name:"VAlert",props:Oe(),emits:{"click:close":t=>!0,"update:modelValue":t=>!0},setup(t,o){let{emit:p,slots:l}=o;const n=xe(t,"modelValue"),r=U(()=>{var V;if(t.icon!==!1)return t.type?(V=t.icon)!=null?V:`$${t.type}`:t.icon}),d=U(()=>{var V;return{color:(V=t.color)!=null?V:t.type,variant:t.variant}}),{themeClasses:_}=we(t),{colorClasses:y,colorStyles:g,variantClasses:m}=Ce(d),{densityClasses:u}=Pe(t),{dimensionStyles:v}=he(t),{elevationClasses:s}=Ae(t),{locationStyles:i}=$e(t),{positionClasses:T}=Se(t),{roundedClasses:ae}=De(t),{textColorClasses:le,textColorStyles:se}=Te(Be(t,"borderColor")),{t:oe}=Ie(),O=U(()=>({"aria-label":oe(t.closeLabel),onClick(V){n.value=!1,p("click:close",V)}}));return()=>{const V=!!(l.prepend||r.value),ne=!!(l.title||t.title),ue=!!(l.close||t.closable);return n.value&&e(t.tag,{class:["v-alert",t.border&&{"v-alert--border":!!t.border,[`v-alert--border-${t.border===!0?"start":t.border}`]:!0},{"v-alert--prominent":t.prominent},_.value,y.value,u.value,s.value,T.value,ae.value,m.value,t.class],style:[g.value,v.value,i.value,t.style],role:"alert"},{default:()=>{var W,j,M;return[qe(!1,"v-alert"),t.border&&e("div",{key:"border",class:["v-alert__border",le.value],style:se.value},null),V&&e("div",{key:"prepend",class:"v-alert__prepend"},[l.prepend?e(H,{key:"prepend-defaults",disabled:!r.value,defaults:{VIcon:{density:t.density,icon:r.value,size:t.prominent?44:28}}},l.prepend):e(q,{key:"prepend-icon",density:t.density,icon:r.value,size:t.prominent?44:28},null)]),e("div",{class:"v-alert__content"},[ne&&e(te,{key:"title"},{default:()=>{var h,G;return[(G=(h=l.title)==null?void 0:h.call(l))!=null?G:t.title]}}),(j=(W=l.text)==null?void 0:W.call(l))!=null?j:t.text,(M=l.default)==null?void 0:M.call(l)]),l.append&&e("div",{key:"append",class:"v-alert__append"},[l.append()]),ue&&e("div",{key:"close",class:"v-alert__close"},[l.close?e(H,{key:"close-defaults",defaults:{VBtn:{icon:t.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var h;return[(h=l.close)==null?void 0:h.call(l,{props:O.value})]}}):e(N,z({key:"close-btn",icon:t.closeIcon,size:"x-small",variant:"text"},O.value),null)])]}})}}}),je=c("thead",null,[c("tr",null,[c("th",{scope:"col"}," \u7F13\u5B58\u5730\u5740 "),c("th",{scope:"col"}," \u7528\u6237 "),c("th",{scope:"col"}," \u7FA4 "),c("th",{scope:"col"}," \u65F6\u95F4 ")])],-1),Me=c("p",{class:"mb-0"}," \u8D26\u6237\u5220\u9664\u540E\u5C06\u4E22\u5931\u6240\u6709\u8D26\u6237\u76F8\u5173\u914D\u7F6E\uFF0C\u8BF7\u786E\u8BA4 ",-1),Ge={__name:"AccountSettingsAccount",setup(t){const o=L();F();const p=X(),l={avatarImg:o.getters.user?`https://q1.qlogo.cn/g?b=qq&s=0&nk=${o.getters.user}`:Ue,qq:o.getters.user,permissions:o.getters.permissions},n=f(structuredClone(l)),r=f(!1),d=[u=>!!u||"\u8BF7\u5148\u786E\u8BA4\u5220\u9664\u8D26\u6237"],_=f([]),y=u=>{switch(u){case"bing":return{icon:"bxl:bing",color:"primary"};case"api":return{icon:"ri:openai-fill",color:"success"};case"api3":return{icon:"ri:openai-fill",color:"success"};case"xh":return{icon:"solar:fire-bold",color:"error"};default:return{icon:"fluent:chat-12-filled",color:""}}},g=f({title:"",color:"warning",icon:"mdi-alert-circle-outline",text:""});I.post(`${o.getters.serverApi}userData`,{token:o.getters.userToken}).then(u=>{u.data&&(_.value=u.data.chat)}).catch(u=>{console.log(u)});const m=()=>{g.value.title="",g.value.text="",I.post(`${o.getters.serverApi}deleteUser`,{token:o.getters.userToken}).then(u=>{var v;(v=u.data)!=null&&v.state?(o.dispatch("user/logout"),p.push({path:"/login"})):(g.value.title="\u5220\u9664\u5931\u8D25",g.value.text=u.data.error)}).catch(u=>{g.value.title="\u5220\u9664\u5931\u8D25",g.value.text=u.message,console.log(u)})};return(u,v)=>(b(),x($,null,{default:a(()=>[e(k,{cols:"12"},{default:a(()=>[e(A,{title:"\u7528\u6237\u8D44\u6599"},{default:a(()=>[e(w,{class:"d-flex"},{default:a(()=>[e(Re,{rounded:"lg",size:"100",class:"me-6",image:n.value.avatarImg},null,8,["image"])]),_:1}),e(Y),e(w,null,{default:a(()=>[e(Z,{class:"mt-6"},{default:a(()=>[e($,null,{default:a(()=>[e(k,{md:"6",cols:"12"},{default:a(()=>[e(S,{readonly:"",modelValue:n.value.qq,"onUpdate:modelValue":v[0]||(v[0]=s=>n.value.qq=s),label:"\u8D26\u53F7"},null,8,["modelValue"])]),_:1}),e(k,{md:"6",cols:"12"},{default:a(()=>[e(S,{readonly:"",modelValue:n.value.permissions,"onUpdate:modelValue":v[1]||(v[1]=s=>n.value.permissions=s),label:"\u6743\u9650"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),u.$store.getters.permissions!="admin"?(b(),x(k,{key:0,cols:"12"},{default:a(()=>[e(A,{title:"\u7F13\u5B58\u9875\u9762\u4FE1\u606F"},{default:a(()=>[e(Fe,{class:"text-no-wrap",height:"250","fixed-header":""},{default:a(()=>[je,c("tbody",null,[(b(!0),D(E,null,K(_.value,s=>(b(),D("tr",{key:s.herf},[c("td",null,[e(q,{start:"",icon:y(s.model).icon,color:y(s.model).color},null,8,["icon","color"]),P(" "+C(s.herf),1)]),c("td",null,C(s.user),1),c("td",null,C(s.group),1),c("td",null,C(s.time),1)]))),128))])]),_:1})]),_:1})]),_:1})):B("",!0),u.$store.getters.permissions!="admin"?(b(),x(k,{key:1,cols:"12"},{default:a(()=>[g.value.title?(b(),x(ee,z({key:0,class:"auth-card mb-2 app-bar-noregion"},g.value),null,16)):B("",!0),e(A,{title:"\u7528\u6237\u5220\u9664"},{default:a(()=>[e(w,null,{default:a(()=>[e(We,{color:"warning",variant:"tonal",class:"mb-4"},{default:a(()=>[e(te,{class:"mb-1"},{default:a(()=>[P(" \u4F60\u786E\u5B9A\u8981\u5220\u9664\u4F60\u7684\u5E10\u6237\u5417\uFF1F ")]),_:1}),Me]),_:1}),c("div",null,[e(Ee,{modelValue:r.value,"onUpdate:modelValue":v[2]||(v[2]=s=>r.value=s),rules:d,label:"\u6211\u786E\u8BA4\u5220\u9664\u8D26\u6237"},null,8,["modelValue"])]),e(N,{disabled:!r.value||u.$store.getters.permissions==="admin",onClick:m,color:"error",class:"mt-3"},{default:a(()=>[P(" \u5220\u9664\u8D26\u6237 ")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})):B("",!0)]),_:1}))}},He={__name:"AccountSettingsNotification",setup(t){const o=L(),p=f({userSetting:{}}),l=()=>{I.post(`${o.getters.serverApi}sysconfig`,{token:o.getters.userToken}).then(n=>{n.data&&(n.data.error?o.commit("app/ADD_SNACKBAR",{message:n.data.error,color:"error"}):p.value=n.data)}).catch(n=>{o.commit("app/ADD_SNACKBAR",{message:n.message,color:"error"}),console.log(n)})};return o.getters.permissions!=="admin"&&l(),(n,r)=>(b(),x(A,{title:"\u7528\u6237\u8BBE\u7F6E"},{default:a(()=>[e(w,null,{default:a(()=>[P(" \u7528\u6237\u914D\u7F6E\u5C06\u8986\u76D6\u5168\u5C40\u914D\u7F6E\uFF0C\u4EC5\u5728\u7528\u6237\u4E0E\u673A\u5668\u4EBA\u5BF9\u8BDD\u65F6\u751F\u6548\u3002 ")]),_:1})]),_:1}))}},Je=c("p",{class:"text-base font-weight-medium mt-2"}," \u5BC6\u7801\u8981\u6C42\uFF1A ",-1),Qe={class:"d-flex flex-column gap-y-3"},Xe={class:"font-weight-medium"},Ye={__name:"AccountSettingsSecurity",setup(t){const o=L();F();const p=X(),l=f(!1),n=f(!1),r=f(!1),d=f(""),_=f(""),y=f(""),g=["\u6700\u5C118\u4E2A\u5B57\u7B26\u957F-\u8D8A\u591A\u8D8A\u597D","\u81F3\u5C11\u6709\u4E00\u4E2A\u5C0F\u5199\u5B57\u6BCD","\u81F3\u5C11\u6709\u4E00\u4E2A\u6570\u5B57\u3001\u7B26\u53F7\u6216\u7A7A\u767D\u5B57\u7B26"],m=f({title:"",color:"warning",icon:"mdi-alert-circle-outline",text:""}),u=()=>{if(m.value.title="",m.value.text="",!d.value||!_.value||!y.value){m.value.title="\u4FEE\u6539\u5931\u8D25",m.value.text="\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A";return}if(_.value!=y.value){m.value.title="\u4FEE\u6539\u5931\u8D25",m.value.text="\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4";return}const v=J(d.value),s=J(_.value);I.post(`${o.getters.serverApi}changePassword`,{passwd:v,newPasswd:s,token:o.getters.userToken}).then(i=>{var T;(T=i.data)!=null&&T.state?(o.dispatch("user/logout"),p.push({path:"/login"})):(m.value.title="\u4FEE\u6539\u5931\u8D25",m.value.text=i.data.error)}).catch(i=>{m.value.title="\u4FEE\u6539\u5931\u8D25",m.value.text=i.message,console.log(i)})};return(v,s)=>(b(),x($,null,{default:a(()=>[e(k,{cols:"12"},{default:a(()=>[m.value.title?(b(),x(ee,z({key:0,class:"auth-card mb-2 app-bar-noregion"},m.value),null,16)):B("",!0),e(A,{title:"\u4FEE\u6539\u5BC6\u7801"},{default:a(()=>[e(Z,null,{default:a(()=>[e(w,null,{default:a(()=>[e($,{class:"mb-3"},{default:a(()=>[e(k,{cols:"12",md:"6"},{default:a(()=>[e(S,{modelValue:d.value,"onUpdate:modelValue":s[0]||(s[0]=i=>d.value=i),type:l.value?"text":"password","append-inner-icon":l.value?"mdi-eye-off-outline":"mdi-eye-outline",label:"\u65E7\u5BC6\u7801","onClick:appendInner":s[1]||(s[1]=i=>l.value=!l.value)},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1}),e($,null,{default:a(()=>[e(k,{cols:"12",md:"6"},{default:a(()=>[e(S,{modelValue:_.value,"onUpdate:modelValue":s[2]||(s[2]=i=>_.value=i),type:n.value?"text":"password","append-inner-icon":n.value?"mdi-eye-off-outline":"mdi-eye-outline",label:"\u65B0\u5BC6\u7801","onClick:appendInner":s[3]||(s[3]=i=>n.value=!n.value)},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(k,{cols:"12",md:"6"},{default:a(()=>[e(S,{modelValue:y.value,"onUpdate:modelValue":s[4]||(s[4]=i=>y.value=i),type:r.value?"text":"password","append-inner-icon":r.value?"mdi-eye-off-outline":"mdi-eye-outline",label:"\u91CD\u590D\u65B0\u5BC6\u7801","onClick:appendInner":s[5]||(s[5]=i=>r.value=!r.value)},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),e(w,null,{default:a(()=>[Je,c("ul",Qe,[(b(),D(E,null,K(g,i=>c("li",{key:i,class:"d-flex"},[c("div",null,[e(q,{size:"7",icon:"mdi-circle",class:"me-3"})]),c("span",Xe,C(i),1)])),64))])]),_:1}),e(w,{class:"d-flex flex-wrap gap-4"},{default:a(()=>[e(N,{onClick:u},{default:a(()=>[P("\u4FEE\u6539")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},Ze={__name:"account-settings",setup(t){const o=F(),p=f(o.params.tab),l=[{title:"\u8D26\u53F7\u4FE1\u606F",icon:"mdi-account-outline",tab:"account"},{title:"\u5B89\u5168",icon:"mdi-lock-open-outline",tab:"security"},{title:"\u4E2A\u4EBA\u8BBE\u7F6E",icon:"mdi-bell-outline",tab:"notification",disabled:!0}];return(n,r)=>(b(),D("div",null,[e(ze,{modelValue:p.value,"onUpdate:modelValue":r[0]||(r[0]=d=>p.value=d),"show-arrows":""},{default:a(()=>[(b(),D(E,null,K(l,d=>e(Ne,{key:d.icon,value:d.tab,disabled:d.disabled||!1},{default:a(()=>[e(q,{size:"20",start:"",icon:d.icon},null,8,["icon"]),P(" "+C(d.title),1)]),_:2},1032,["value","disabled"])),64))]),_:1},8,["modelValue"]),e(Y),e(Le,{modelValue:p.value,"onUpdate:modelValue":r[1]||(r[1]=d=>p.value=d),class:"mt-5 disable-tab-transition",touch:!1},{default:a(()=>[e(R,{value:"account"},{default:a(()=>[e(Ge)]),_:1}),e(R,{value:"security"},{default:a(()=>[e(Ye)]),_:1}),e(R,{value:"notification"},{default:a(()=>[e(He)]),_:1})]),_:1},8,["modelValue"])]))}};typeof Q=="function"&&Q(Ze);export{Ze as default};