import{n as te,q as K,u as oe,_ as A,o as r,c as p,a as e,s as ie,v as J,r as h,b as w,w as f,d as b,x as n,y as se,p as M,e as P,t as C,F as ae,z as le,A as F,B as O,C as D,D as H,E as ce,G as U,H as re}from"./entry.mSSWXTj-.js";import{_ as W,a as de}from"./Link.Cu2cJHzs.js";import{_ as Y}from"./TextField.C6hHO5bP.js";import{_ as Z}from"./Primary.C0-N5Ykq.js";import"./nuxt-link.Bo-roLB1.js";const ue="$s";function N(...t){const m=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(m);const[o,l]=t;if(!o||typeof o!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+o);if(l!==void 0&&typeof l!="function")throw new Error("[nuxt] [useState] init must be a function: "+l);const i=ue+o,c=oe(),_=te(c.payload.state,i);if(_.value===void 0&&l){const u=l();if(K(u))return c.payload.state[i]=u,u;_.value=u}return _}const me=["src"],_e={class:"mobile-text"},pe={__name:"Tab",props:{imgSrc:String,active:Boolean},emits:"clicked",setup(t,{emit:m}){const o=t,l=m;return(i,c)=>(r(),p("button",{class:J(["tag",o.active?"active":""]),onClick:c[0]||(c[0]=_=>l("clicked"))},[e("img",{src:o.imgSrc},null,8,me),e("p",_e,[ie(i.$slots,"default",{},void 0,!0)])],2))}},ve=A(pe,[["__scopeId","data-v-121da0fe"]]),he=""+globalThis.__publicAssetsURL("images/logo-devlinks-small.svg"),ge=""+globalThis.__publicAssetsURL("images/icon-preview-header.svg"),Q=t=>(M("data-v-2bad59a8"),t=t(),P(),t),fe={id:"navbar"},ke=Q(()=>e("div",{class:"logo-holder"},[e("img",{src:he}),e("h1",{class:"mobile-name"},"devlinks")],-1)),xe={class:"tabs-holder"},be=Q(()=>e("img",{src:ge},null,-1)),$e={__name:"NavBar",props:{isLinkEditor:Boolean},emits:["setLinkEditor","setProfileEditor"],setup(t,{emit:m}){const o=h(!0),l=m;function i(){l("setLinkEditor"),o.value=!0}function c(){l("setProfileEditor"),o.value=!1}function _(){se("/preview")}return(u,s)=>{const a=ve,d=W;return r(),p("div",fe,[ke,e("div",xe,[w(a,{"img-src":"/JSFMLinkSharing/images/icon-links-header.svg",active:n(o),onClicked:i},{default:f(()=>[b("Links")]),_:1},8,["active"]),w(a,{"img-src":"/JSFMLinkSharing/images/icon-profile-details-header.svg",active:!n(o),onClicked:c},{default:f(()=>[b("Profile Details")]),_:1},8,["active"])]),w(d,{onOnClick:_,"icon-only":!0},{text:f(()=>[b(" Preview ")]),icon:f(()=>[be]),_:1})])}}},Se=A($e,[["__scopeId","data-v-2bad59a8"]]),we=""+globalThis.__publicAssetsURL("images/icon-link.svg"),q=""+globalThis.__publicAssetsURL("images/icon-chevron-down.svg"),X=t=>(M("data-v-2e1b59ef"),t=t(),P(),t),ye={id:"dropdown-holder"},Le={key:0,class:"field-content"},Ee=X(()=>e("img",{src:we},null,-1)),Ce=X(()=>e("p",null,"Dropdown Field",-1)),Ie={key:1,class:"field-content"},Te=["src"],Ue={key:0,class:"options-container"},Fe=["onClick"],Ae=["src"],Ne={key:0},De={__name:"Dropdown",props:{options:Array,name:String,icon:String},emits:["setActiveElement"],setup(t,{emit:m}){const o=t,l=m;let i=h(!1);h(null);let c=h({name:o.name,icon:o.icon});function _(){i.value=!i.value}function u(s){c.value={name:s.name,icon:s.icon,link:s.link},i.value=!i.value,l("setActiveElement",c.value)}return(s,a)=>(r(),p("div",ye,[e("div",{onClick:_,class:J(["dropdown-field",n(i)?"active":""])},[n(c).name==null?(r(),p("div",Le,[Ee,Ce,e("img",{src:q,class:J(n(i)?"arrowUp":"")},null,2)])):(r(),p("div",Ie,[e("img",{src:n(c).icon},null,8,Te),e("p",null,C(n(c).name),1),e("img",{src:q,class:J(n(i)?"arrowUp":"")},null,2)]))],2),n(i)?(r(),p("div",Ue,[(r(!0),p(ae,null,le(t.options,d=>(r(),p("div",{key:d.name,class:J(["dropdown-item",d.name==n(c).name?"activeEl":""]),onClick:g=>u(d)},[e("div",null,[e("img",{src:d.icon},null,8,Ae),e("p",null,C(d.name==n(c).name?d.name+" (Selected)":d.name),1)]),d.name!==t.options[t.options.length-1].name?(r(),p("hr",Ne)):F("",!0)],10,Fe))),128))])):F("",!0)]))}},Me=A(De,[["__scopeId","data-v-2e1b59ef"]]),Pe=""+globalThis.__publicAssetsURL("images/icon-drag-and-drop.svg"),ze=[{name:"GitHub",icon:"/JSFMLinkSharing/images/icon-github.svg",link:"https://github.com/"},{name:"Frontend Mentor",icon:"/JSFMLinkSharing/images/icon-frontend-mentor.svg",link:"https://www.frontendmentor.io/profile/"},{name:"Twitter",icon:"/JSFMLinkSharing/images/icon-twitter.svg",link:"https://twitter.com/"},{name:"LinkedIn",icon:"/JSFMLinkSharing/images/icon-linkedin.svg",link:"https://linkedin.com/in/"},{name:"YouTube",icon:"/JSFMLinkSharing/images/icon-youtube.svg",link:"https://www.youtube.com/channel/"},{name:"Facebook",icon:"/JSFMLinkSharing/images/icon-facebook.svg",link:"https://www.facebook.com/"},{name:"Twitch",icon:"/JSFMLinkSharing/images/icon-twitch.svg",link:"https://www.twitch.tv/"},{name:"Dev.to",icon:"/JSFMLinkSharing/images/icon-devto.svg",link:"https://dev.to/"},{name:"Codewars",icon:"/JSFMLinkSharing/images/icon-codewars.svg",link:"https://www.codewars.com/users/"},{name:"Codepen",icon:"/JSFMLinkSharing/images/icon-codepen.svg",link:"https://codepen.io/"},{name:"freeCodeCamp",icon:"/JSFMLinkSharing/images/icon-freecodecamp.svg",link:"https://www.freecodecamp.org/"},{name:"GitLab",icon:"/JSFMLinkSharing/images/icon-gitlab.svg",link:"https://gitlab.com/"},{name:"Hashnode",icon:"/JSFMLinkSharing/images/icon-hashnode.svg",link:"https://hashnode.com/"},{name:"Stack Overflow",icon:"/JSFMLinkSharing/images/icon-stack-overflow.svg",link:"https://stackoverflow.com/users/"}],Je=new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,"i"),j=t=>(M("data-v-53ee755d"),t=t(),P(),t),Re={id:"link-edit"},Ve={class:"header"},Be={class:"header-link-number"},Oe=j(()=>e("img",{src:Pe,class:"handle"},null,-1)),Ge=j(()=>e("p",null,"Platform",-1)),He=j(()=>e("p",null,"Link",-1)),je=["src"],qe={__name:"LinkEditComponent",props:{link:Object},emits:["linkadded","removeEl"],setup(t,{emit:m}){const o=t,l=O(),{add:i,remove:c,getIndex:_}=l,u=m,s=h({id:o.link.id?o.link.id:null,name:o.link.name??null,icon:o.link.icon??"/JSFMLinkSharing/images/icon-links-header.svg",link:o.link.link??null,placeholder:o.link.placeholder??null}),a=h(!1),d=h("");o.link.id;const g=h(!1),$=D(()=>_(o.link.id)+1);function k(v){s.value={...s.value,name:v.name,icon:v.icon,link:s.value.link,placeholder:v.link},I(s.value.link)&&s.value.id!=null&&(i(s.value),u("linkadded"))}function I(v){return new RegExp("^([a-zA-Z]+:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(v)}let L=null;function x(v){L!=null&&clearTimeout(L),L=setTimeout(()=>{v.length<1&&(d.value="Can't be empty",a.value=!0,s.value={...s.value,link:v}),I(v)?(d.value="",a.value=!1,s.value={...s.value,link:v},g.value=!0,i(s.value),u("linkadded")):(d.value="Please check the URL",a.value=!0,s.value={...s.value,link:v})},1e3)}function S(){c(s.value.id),u("linkadded")}return(v,R)=>{const V=Me,B=Y;return r(),p("div",Re,[e("div",Ve,[e("div",Be,[Oe,e("h2",null,"Link # "+C(n($)),1)]),e("button",{onClick:S},"Remove")]),Ge,w(V,{options:n(ze),onSetActiveElement:k,name:n(s).name,icon:n(s).icon},null,8,["options","name","icon"]),He,w(B,{type:"string",value:n(s).link,"placeholder-text":n(s).placeholder,onOnValueChange:x,error:n(a)},{error:f(()=>[b(C(n(d)),1)]),default:f(()=>[e("img",{src:n(s).icon},null,8,je)]),_:1},8,["value","placeholder-text","error"])])}}},Ke=A(qe,[["__scopeId","data-v-53ee755d"]]),We=""+globalThis.__publicAssetsURL("images/illustration-empty.svg"),Ye=""+globalThis.__publicAssetsURL("images/icon-upload-image.svg"),Ze=t=>(M("data-v-9b5249f7"),t=t(),P(),t),Qe=["src"],Xe=Ze(()=>e("img",{src:Ye},null,-1)),en={key:0},nn={key:1},tn={__name:"ImageUpload",setup(t){const m=O(),{addImage:o}=m,l=D(()=>m.profile.image),i=N("imageConvert",()=>m.profile.image);async function c(a){const d=a.target.files[0],g=new FileReader;g.readAsDataURL(d),g.onload=$=>{i.value=$.target.result},setTimeout(()=>{o(i.value)},500)}function _(a){a.preventDefault(),a.dataTransfer.dropEffect="copy"}function u(a){a.preventDefault()}function s(a){a.preventDefault();const d=a.dataTransfer.files[0],g=new FileReader;g.readAsDataURL(d),g.onload=$=>{i.value=$.target.result},setTimeout(()=>{o(i.value)},500)}return(a,d)=>(r(),p("div",{class:"image-uploader",onDragover:H(_,["prevent"]),onDragleave:H(u,["prevent"]),onDrop:H(s,["prevent"])},[n(i)?(r(),p("img",{key:0,src:n(i),class:"user-img"},null,8,Qe)):F("",!0),e("div",{class:J(n(l)?"haseImage":"noImage")},[Xe,n(l)?(r(),p("p",en,"Change Image")):(r(),p("p",nn,"+ Upload Image"))],2),e("label",null,[e("input",{type:"file",accept:"image/jpeg, image/png image/jpg image/PNG",onChange:c},null,32)])],32))}},on=A(tn,[["__scopeId","data-v-9b5249f7"]]),z=t=>(M("data-v-e148a84e"),t=t(),P(),t),sn={id:"linkEditor"},an=z(()=>e("h1",null,"Customize your links",-1)),ln=z(()=>e("p",null," Add/edit/remove links below and then share all your profiles with the world ",-1)),cn={key:0,class:"emptyHolder"},rn=z(()=>e("img",{src:We},null,-1)),dn=z(()=>e("h2",null,"Let's get you started",-1)),un=z(()=>e("p",null,` Use the "Add new link" button to get started Once you have more then one link, you can reorder and edit them. We're here to help you share your profiles with everyone `,-1)),mn=[rn,dn,un],_n={key:1,class:"link-edit-items"},pn=z(()=>e("hr",null,null,-1)),vn={class:"btn-holder"},hn=z(()=>e("div",{class:"btn-spacer"},null,-1)),gn={__name:"editor",props:{},emits:["save","linkadded"],setup(t,{emit:m}){const o=m,l=O(),{addEmpty:i,add:c,reoderLinks:_,saveData:u,checkLinkSave:s}=l,a=D({get(){return l.links},set(x){_(x),o("linkadded")}});let d=D(()=>(console.log(l.linkSave),!l.linkSave));const g=N("dragging",()=>!1);function $(){o("linkadded")}function k(){u()}function I(){i()}function L(x){}return(x,S)=>{const v=W,R=Ke,V=ce("draggable"),B=Z;return r(),p("div",sn,[an,ln,w(v,{onClick:I},{text:f(()=>[b(" + Add new Link ")]),_:1}),n(a).length==0?(r(),p("div",cn,mn)):(r(),p("div",_n,[w(V,{modelValue:n(a),"onUpdate:modelValue":S[0]||(S[0]=T=>K(a)?a.value=T:null),disabled:!1,"item-key":"name",class:"list-group","ghost-class":"ghost",move:L,onStart:S[1]||(S[1]=T=>g.value=!0),onEnd:S[2]||(S[2]=T=>g.value=!1),handle:".handle"},{item:f(({element:T})=>[(r(),U(R,{key:T.id,link:T,onLinkadded:$},null,8,["link"]))]),_:1},8,["modelValue"])])),pn,e("div",vn,[hn,w(B,{class:"save-btn",disabled:n(d),onOnClick:k},{default:f(()=>[b("Save")]),_:1},8,["disabled"])])])}}},fn=A(gn,[["__scopeId","data-v-e148a84e"]]),y=t=>(M("data-v-d09c7829"),t=t(),P(),t),kn={id:"profile-editor"},xn=y(()=>e("div",null,[e("h1",null,"Profile Details"),e("p",null,"Add your details to create a personal touch to your profile.")],-1)),bn={class:"image-upload-holder"},$n=y(()=>e("p",null,"Profile Picture",-1)),Sn=y(()=>e("p",null,[b(" Images must be below 1024x1024px. "),e("br"),b(" Use PNG or JPG format. ")],-1)),wn={class:"form-holder"},yn={action:""},Ln={for:"firstName"},En=y(()=>e("div",{class:"form-spacer"},null,-1)),Cn=y(()=>e("img",null,null,-1)),In={for:"lastName"},Tn=y(()=>e("div",{class:"form-spacer"},null,-1)),Un=y(()=>e("img",null,null,-1)),Fn={for:"email"},An=y(()=>e("div",{class:"form-spacer"},null,-1)),Nn=y(()=>e("img",null,null,-1)),Dn=y(()=>e("div",{class:"mobile-spacer"},null,-1)),Mn=y(()=>e("hr",null,null,-1)),Pn={class:"btn-holder"},zn=y(()=>e("div",{class:"btn-spacer"},null,-1)),Jn={__name:"editor",setup(t){const m=O(),{addFristName:o,addLastName:l,addEmail:i,saveData:c}=m,_=h(m.profile.firstName),u=h(!1),s=h(""),a=h(m.profile.lastName),d=h(!1),g=h(""),$=h(m.profile.email),k=h(!1),I=h("");let L=null,x=null,S=null;const v=D(()=>!m.profileSave);function R(E){L!=null&&clearTimeout(L),L=setTimeout(()=>{E.length<2?(u.value=!0,s.value="Can't be empty"):(o(E),u.value=!1,s.value="")},1e3)}function V(E){x!=null&&clearTimeout(x),x=setTimeout(()=>{E.length<2?(d.value=!0,g.value="Can't be empty"):(l(E),d.value=!1,g.value="")},1e3)}function B(E){S!=null&&clearTimeout(S),S=setTimeout(()=>{Je.test(E)?(I.value="",k.value=!1,i(E)):(I.value="Invalid email adress",k.value=!0)},1e3),$.value=E}function T(){c()}return(E,nt)=>{const ee=on,G=Y,ne=Z;return r(),p("div",kn,[xn,e("div",bn,[$n,w(ee,{"img-src":"https://images.unsplash.com/photo-1708162664567-49732d4b39c7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}),Sn]),e("div",wn,[e("form",yn,[e("label",Ln,[b(" First name* "),En,w(G,{type:"text","placeholder-text":n(_)??"e.g. John","field-id":"firstName",onOnValueChange:R,error:n(u)},{error:f(()=>[b(C(n(s)),1)]),default:f(()=>[Cn]),_:1},8,["placeholder-text","error"])]),e("label",In,[b(" Last name* "),Tn,w(G,{type:"text","placeholder-text":n(a)??"e.g. Appleseed","field-id":"lastName",onOnValueChange:V,error:n(d)},{error:f(()=>[b(C(n(g)),1)]),default:f(()=>[Un]),_:1},8,["placeholder-text","error"])]),e("label",Fn,[b(" Email "),An,w(G,{type:"email","placeholder-text":n($)??"e.g. email@example.com","field-id":"email",onOnValueChange:B,error:n(k)},{error:f(()=>[b(C(n(I)),1)]),default:f(()=>[Nn]),_:1},8,["placeholder-text","error"])])])]),Dn,Mn,e("div",Pn,[zn,w(ne,{class:"save-btn",disabled:n(v),onOnClick:T},{default:f(()=>[b("Save")]),_:1},8,["disabled"])])])}}},Rn=A(Jn,[["__scopeId","data-v-d09c7829"]]),Vn=""+globalThis.__publicAssetsURL("images/illustration-phone-mockup.svg"),Bn=t=>(M("data-v-65b904dc"),t=t(),P(),t),On={id:"editor-view"},Gn={class:"mainView"},Hn={class:"phonePreview"},jn={class:"image-holder"},qn=Bn(()=>e("img",{src:Vn,class:"phone-image"},null,-1)),Kn={key:0,class:"profile-image-holder"},Wn=["src"],Yn={class:"name-prev"},Zn={class:"link-prev"},Qn={key:2},Xn={class:"editor"},et={__name:"index",setup(t){const m=O();re("access_token");const o=h(!0),l=N("link1",()=>null),i=N("link2",()=>null),c=N("link3",()=>null),_=N("link4",()=>null),u=N("link5",()=>null),s=D(()=>m.links),a=D(()=>m.profile);function d(){o.value=!0}function g(){o.value=!1}function $(){l.value=null,i.value=null,c.value=null,_.value=null,u.value=null;for(let k of s.value)if(k.name!=null){if(l.value==null){l.value=k;continue}if(i.value==null){i.value=k;continue}if(c.value==null){c.value=k;continue}if(_.value==null){_.value=k;continue}if(u.value==null){u.value=k;continue}}}return $(),(k,I)=>{const L=Se,x=de,S=fn,v=Rn;return r(),p("div",On,[w(L,{isLinkEditor:n(o),onSetLinkEditor:d,onSetProfileEditor:g},null,8,["isLinkEditor"]),e("div",Gn,[e("div",Hn,[e("div",jn,[qn,n(a).image?(r(),p("div",Kn,[e("img",{src:n(a).image,class:"profile-image"},null,8,Wn)])):F("",!0),e("h2",Yn,C(n(a).firstName)+" "+C(n(a).lastName),1),e("p",Zn,C(n(a).email),1),n(l)!==null?(r(),U(x,{key:1,id:"link1",iconSrc:n(l).icon,name:n(l).name},null,8,["iconSrc","name"])):(r(),p("div",Qn)),n(i)!=null?(r(),U(x,{key:3,id:"link2",iconSrc:n(i).icon,name:n(i).name},null,8,["iconSrc","name"])):F("",!0),n(c)!=null?(r(),U(x,{key:4,id:"link3",iconSrc:n(c).icon,name:n(c).name},null,8,["iconSrc","name"])):F("",!0),n(_)!=null?(r(),U(x,{key:5,id:"link4",iconSrc:n(_).icon,name:n(_).name},null,8,["iconSrc","name"])):F("",!0),n(u)!=null?(r(),U(x,{key:6,id:"link5",iconSrc:n(u).icon,name:n(u).name},null,8,["iconSrc","name"])):F("",!0)])]),e("div",Xn,[n(o)?(r(),U(S,{key:0,onSave:$,onLinkadded:$})):(r(),U(v,{key:1}))])])])}}},lt=A(et,[["__scopeId","data-v-65b904dc"]]);export{lt as default};
