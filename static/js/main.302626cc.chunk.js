(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(21),i=n.n(c),o=n(9),r=(n(30),n(24)),l=n(5),u=n(2),d=n(3),j=n.p+"static/media/header__logo.047d20f8.svg",b=s.a.createContext(),m=n(0);var p=function(e){var t=e.isNavOpened,n=e.onClickNav,s=Object(a.useContext)(b);return Object(m.jsxs)(m.Fragment,{children:[!s.loggedIn&&Object(m.jsx)("nav",{className:"nav",children:Object(m.jsxs)("ul",{className:"nav__list",children:[Object(m.jsx)("li",{className:"nav__item",children:Object(m.jsx)(o.c,{className:"nav__link",to:"./sign-in",activeClassName:"nav__link_active",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(m.jsx)("li",{className:"nav__item",children:Object(m.jsx)(o.c,{className:"nav__link",to:"./sign-up",activeClassName:"nav__link_active",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})]})}),s.loggedIn&&Object(m.jsxs)("nav",{className:"nav",children:[Object(m.jsx)("button",{type:"button",className:"button button_type_open-nav ".concat(t&&"button_type_close-nav"),onClick:function(){n(!t)}}),Object(m.jsxs)("ul",{className:"nav__list nav__list_authorized",children:[Object(m.jsx)("li",{className:"nav__item nav__item_margin_right",children:s.userEmail}),Object(m.jsx)("li",{className:"nav__item",children:Object(m.jsx)("button",{type:"button",className:"button button_type_logout",onClick:s.signOut,children:"\u0412\u044b\u0439\u0442\u0438"})})]})]}),s.loggedIn&&Object(m.jsx)("nav",{className:"nav nav_type_mobile ".concat(t&&"nav_opened"),children:Object(m.jsxs)("ul",{className:"nav__list nav__list_type_mobile",children:[Object(m.jsx)("li",{className:"nav__item nav__item_type_mobile",children:s.userEmail}),Object(m.jsx)("li",{className:"nav__item",children:Object(m.jsx)("button",{type:"button",className:"button button_type_logout",onClick:s.signOut,children:"\u0412\u044b\u0439\u0442\u0438"})})]})})]})};var h=function(e){var t=e.isNavOpened,n=e.onClickNav;return Object(m.jsxs)("header",{className:"header ".concat(t&&"header_margin_top"),children:[Object(m.jsx)("img",{src:j,alt:"\u041c\u0435\u0441\u0442\u043e \u0432 \u0420\u043e\u0441\u0441\u0438\u0438",className:"header__logo"}),Object(m.jsx)(p,{onClickNav:n,isNavOpened:t})]})},_=s.a.createContext();var f=function(e){var t=Object(a.useContext)(_),n=e.card.owner._id===t._id,s="button ".concat(n?"button_type_remove-card":"button_type_remove-card-hidden"),c=e.card.likes.some((function(e){return e._id===t._id})),i="button ".concat(c?"button_type_add-like-active":"button_type_add-like");return Object(m.jsxs)("li",{className:"card",children:[Object(m.jsx)("button",{type:"button",className:s,onClick:function(){e.onCardDelete(e.card)}}),Object(m.jsx)("img",{src:e.card.link,alt:e.card.name,className:"card__image",onClick:function(){e.onCardClick(e.card)}}),Object(m.jsxs)("div",{className:"card__info",children:[Object(m.jsx)("h2",{className:"card__name",children:e.card.name}),Object(m.jsxs)("div",{className:"card__like",children:[Object(m.jsx)("button",{type:"button",className:i,onClick:function(){e.onCardLike(e.card)}}),Object(m.jsx)("span",{className:"card__like-count",children:e.card.likes.length?e.card.likes.length:""})]})]})]})};var O=function(e){var t=e.cards,n=e.onEditAvatar,s=e.onEditProfile,c=e.onAddPlace,i=e.onCardClick,o=e.onCardLike,r=e.onCardDelete,l=Object(a.useContext)(_);return Object(m.jsxs)("main",{className:"content",children:[Object(m.jsxs)("section",{className:"profile",children:[Object(m.jsxs)("div",{className:"profile__about",children:[Object(m.jsx)("div",{className:"profile__avatar",onClick:n,children:Object(m.jsx)("img",{src:l.avatar,alt:l.name,className:"profile__avatar-img"})}),Object(m.jsxs)("div",{className:"profile__description",children:[Object(m.jsx)("h1",{className:"profile__name",children:l.name}),Object(m.jsx)("button",{type:"button",className:"button button_type_edit-profile",onClick:s}),Object(m.jsx)("p",{className:"profile__job",children:l.about})]})]}),Object(m.jsx)("button",{type:"button",className:"button button_type_add-card",onClick:c})]}),Object(m.jsx)("section",{className:"elements",children:Object(m.jsx)("ul",{className:"cards",children:t.map((function(e){return Object(m.jsx)(f,{card:e,onCardClick:i,onCardLike:o,onCardDelete:r},e._id)}))})})]})};var g=function(e){return Object(m.jsx)("footer",{className:"footer",children:Object(m.jsx)("p",{className:"footer__text",children:"\xa9 2020 Mesto Russia"})})};var v=function(e){return Object(m.jsx)("div",{className:"popup ".concat(e.isOpened&&"popup_opened"," popup_type_").concat(e.name),onClick:function(t){t.target.classList.contains("popup")&&e.onClose()},children:Object(m.jsxs)("div",{className:"popup__container",children:[Object(m.jsx)("button",{type:"button",className:"button button_type_close-popup",onClick:e.onClose}),Object(m.jsxs)("form",{action:"#",name:"".concat(e.name),className:"form",onSubmit:e.onSubmit,noValidate:!0,children:[e.statusImage&&Object(m.jsx)("img",{src:e.statusImage,alt:"\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043f\u0440\u043e\u0441\u0430",className:"popup__image popup__image_type_status"}),Object(m.jsx)("h2",{className:"popup__heading",children:e.title}),e.children]})]})})};var x=function(e){var t=Object(a.useContext)(_),n=Object(a.useState)(t.name),s=Object(u.a)(n,2),c=s[0],i=s[1],o=Object(a.useState)(t.about),r=Object(u.a)(o,2),l=r[0],d=r[1];return Object(a.useEffect)((function(){i(t.name),d(t.about)}),[t]),Object(m.jsxs)(v,{isOpened:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:c,about:l})},name:"edit-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",children:[Object(m.jsxs)("label",{className:"form__field",children:[Object(m.jsx)("input",{type:"text",name:"name",id:"profile-name-input",value:c,onChange:function(e){i(e.target.value)},placeholder:"\u0418\u043c\u044f",className:"form__input form__input_el_profile-name",required:!0,minLength:"2",maxLength:"40",autoComplete:"off"}),Object(m.jsx)("span",{className:"form__input-error profile-name-input-error"})]}),Object(m.jsxs)("label",{className:"form__field",children:[Object(m.jsx)("input",{type:"text",name:"description",id:"profile-job-input",value:l,onChange:function(e){d(e.target.value)},placeholder:"\u0412\u0438\u0434 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",className:"form__input form__input_el_profile-job",required:!0,minLength:"2",maxLength:"200",autoComplete:"off"}),Object(m.jsx)("span",{className:"form__input-error profile-job-input-error"})]}),Object(m.jsx)("button",{type:"submit",className:"button button_type_submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})};var N=function(e){var t=e.isOpen,n=e.onClose,s=e.onUpdateAvatar,c=Object(a.useRef)();return Object(m.jsxs)(v,{isOpened:t,onClose:n,onSubmit:function(e){e.preventDefault(),s({avatar:c.current.value}),c.current.value=""},name:"update-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",children:[Object(m.jsxs)("label",{className:"form__field",children:[Object(m.jsx)("input",{type:"url",name:"avatar-link",id:"avatar-link-input",ref:c,className:"form__input form__input_size_small form__input_el_avatar-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0,autoComplete:"off"}),Object(m.jsx)("span",{className:"form__input-error avatar-link-input-error"})]}),Object(m.jsx)("button",{type:"submit",className:"button button_type_submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})};var C=function(e){var t=e.isOpen,n=e.onClose,s=e.onAddPlace,c=Object(a.useState)(""),i=Object(u.a)(c,2),o=i[0],r=i[1],l=Object(a.useState)(""),d=Object(u.a)(l,2),j=d[0],b=d[1];return Object(m.jsxs)(v,{isOpened:t,onClose:n,onSubmit:function(e){e.preventDefault(),s({name:o,link:j}),r(""),b("")},name:"add-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",children:[Object(m.jsxs)("label",{className:"form__field",children:[Object(m.jsx)("input",{type:"text",name:"card-name",id:"card-name-input",value:o,onChange:function(e){r(e.target.value)},className:"form__input form__input_size_small form__input_el_card-name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"2",maxLength:"30",autoComplete:"off"}),Object(m.jsx)("span",{className:"form__input-error card-name-input-error"})]}),Object(m.jsxs)("label",{className:"form__field",children:[Object(m.jsx)("input",{type:"url",name:"card-link",id:"card-link-input",value:j,onChange:function(e){b(e.target.value)},className:"form__input form__input_size_small form__input_el_card-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,autoComplete:"off"}),Object(m.jsx)("span",{className:"form__input-error card-link-input-error"})]}),Object(m.jsx)("button",{type:"submit",className:"button button_type_submit",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})};var k=function(e){var t=e.card,n=e.isOpen,a=e.onClose,s=e.onCardDelete;return Object(m.jsx)(v,{isOpened:n,onClose:a,onSubmit:function(e){e.preventDefault(),s(t._id)},name:"delete-card",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",children:Object(m.jsx)("button",{type:"submit",className:"button button_type_submit",children:"\u0414\u0430"})})};var y=function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"popup popup_type_show-card ".concat(e.card&&"popup_opened"),onClick:function(t){t.target.classList.contains("popup")&&e.onClose()},children:Object(m.jsxs)("div",{className:"popup__container popup__container_size_large",children:[Object(m.jsx)("button",{type:"button",className:"button button_type_close-popup",onClick:e.onClose}),Object(m.jsxs)("figure",{className:"popup__figure",children:[Object(m.jsx)("img",{src:e.card&&e.card.link,alt:e.card&&e.card.name,className:"popup__image"}),Object(m.jsx)("figcaption",{className:"popup__caption",children:e.card&&e.card.name})]})]})})})},S=n(19),E=n(23),U=function(e){return e.ok?e.json():Promise.reject(e.status)},L=new(function(){function e(t){Object(S.a)(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}return Object(E.a)(e,[{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then(U)}},{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards/"),{headers:this.headers}).then(U)}},{key:"editProfile",value:function(e){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.about})}).then(U)}},{key:"addCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e.name,link:e.link})}).then(U)}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then(U)}},{key:"changeLikeCardStatus",value:function(e,t){return t?fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then(U):fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then(U)}},{key:"updateAvatar",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e})}).then(U)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-19",headers:{authorization:"c965dbbc-afa4-4385-8eef-dcc49737a825","Content-Type":"application/json"}}),w=new function e(t){var n=this;Object(S.a)(this,e),this.register=function(e,t){return fetch("".concat(n.baseUrl,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then(U).then((function(e){if(e)return e})).catch((function(e){return console.log(e),e}))},this.authorize=function(e,t){return fetch("".concat(n.baseUrl,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then(U).then((function(e){if(e.token)return localStorage.setItem("token",e.token),e})).catch((function(e){return console.log(e),e}))},this.getContent=function(e){return fetch("".concat(n.baseUrl,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(U).then((function(e){return e})).catch((function(e){return console.log(e),e}))},this.baseUrl=t.baseUrl}({baseUrl:"https://auth.nomoreparties.co"}),I=n.p+"static/media/profile__avatar.64512549.svg",P=n(11);var D=function(e){var t=e.handleLogin,n=e.handleError,s=Object(d.g)(),c=Object(a.useState)({password:"",email:""}),i=Object(u.a)(c,2),o=i[0],r=i[1];function j(e){var t=e.target,n=t.name,a=t.value;r(Object(l.a)(Object(l.a)({},o),{},Object(P.a)({},n,a)))}return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"sign",children:[Object(m.jsx)("p",{className:"sign__heading",children:"\u0412\u0445\u043e\u0434"}),Object(m.jsxs)("form",{name:"login-form",className:"sign__form",onSubmit:function(e){e.preventDefault();var a=o.password,c=o.email;a&&c&&w.authorize(a,c).then((function(a){a.token?(t(c),s.push("/")):n(e.target,a)})).catch((function(e){return console.log(e)}))},children:[Object(m.jsxs)("fieldset",{className:"sign__fieldset",children:[Object(m.jsx)("input",{type:"text",name:"email",value:o.email,className:"sign__input",onChange:j,placeholder:"Email"}),Object(m.jsx)("input",{type:"password",name:"password",value:o.password,className:"sign__input",onChange:j,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"})]}),Object(m.jsx)("button",{type:"submit",className:"sign__button",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})};var T=function(e){var t=e.handleRegister,n=e.handleError,s=Object(d.g)(),c=Object(a.useState)({password:"",email:""}),i=Object(u.a)(c,2),r=i[0],j=i[1];function b(e){var t=e.target,n=t.name,a=t.value;j(Object(l.a)(Object(l.a)({},r),{},Object(P.a)({},n,a)))}return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"sign",children:[Object(m.jsx)("p",{className:"sign__heading",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(m.jsxs)("form",{name:"register-form",className:"sign__form",onSubmit:function(e){e.preventDefault();var a=r.password,c=r.email;w.register(a,c).then((function(a){400!==a?(t(),s.push("./sign-in")):n(e.target,a)})).catch((function(e){return console.log(e)}))},children:[Object(m.jsx)("input",{type:"text",name:"email",value:r.email,className:"sign__input",onChange:b,placeholder:"Email",autoComplete:"off",required:!0}),Object(m.jsx)("input",{type:"password",name:"password",value:r.password,className:"sign__input",onChange:b,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",autoComplete:"off",required:!0}),Object(m.jsx)("button",{type:"submit",className:"sign__button",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(m.jsxs)("div",{className:"sign__signin",children:[Object(m.jsx)("span",{children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"}),Object(m.jsx)(o.b,{to:"./sign-in",className:"sign__link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})},A=n(25);var z=function(e){var t=e.component,n=Object(A.a)(e,["component"]),s=Object(a.useContext)(b);return Object(m.jsx)(d.b,{children:s.loggedIn?Object(m.jsx)(t,Object(l.a)({},n)):Object(m.jsx)(d.a,{to:"/sign-in"})})};var F=function(e){var t=e.isOpen,n=e.onClose,a=e.statusImage,s=e.statusMessage;return Object(m.jsx)(v,{isOpened:t,onClose:n,name:"sign-status",statusImage:a,title:s})},q=n.p+"static/media/success.a9eb6caf.svg",J=n.p+"static/media/error.d4ce2a26.svg",M="\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!",R=[{name:"login-form",errors:[{status:400,message:"\u041d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439."},{status:401,message:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d. \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 Email \u0438 \u041f\u0430\u0440\u043e\u043b\u044c."}]},{name:"register-form",errors:[{status:400,message:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437."}]}];var B=function(){var e=Object(d.g)(),t=Object(a.useState)(!1),n=Object(u.a)(t,2),s=n[0],c=n[1],i=Object(a.useState)(!1),o=Object(u.a)(i,2),j=o[0],p=o[1],f=Object(a.useState)(!1),v=Object(u.a)(f,2),S=v[0],E=v[1],U=Object(a.useState)(!1),P=Object(u.a)(U,2),A=P[0],B=P[1],H=Object(a.useState)(null),G=Object(u.a)(H,2),V=G[0],K=G[1],Q=Object(a.useState)(null),W=Object(u.a)(Q,2),X=W[0],Y=W[1],Z=Object(a.useState)({name:"",about:"",email:"",avatar:I}),$=Object(u.a)(Z,2),ee=$[0],te=$[1],ne=Object(a.useState)([]),ae=Object(u.a)(ne,2),se=ae[0],ce=ae[1],ie=Object(a.useState)(!1),oe=Object(u.a)(ie,2),re=oe[0],le=oe[1],ue=Object(a.useState)({isOpen:!1,image:q,message:M}),de=Object(u.a)(ue,2),je=de[0],be=de[1],me=Object(a.useState)(!1),pe=Object(u.a)(me,2),he=pe[0],_e=pe[1],fe=Object(a.useState)(""),Oe=Object(u.a)(fe,2),ge=Oe[0],ve=Oe[1];function xe(){be(Object(l.a)(Object(l.a)({},je),{},{isOpen:!1})),E(!1),c(!1),p(!1),B(!1),K(null)}function Ne(e){le(!0),ve(e)}function Ce(e,t){var n=R.filter((function(t){return t.name===e.name}))[0].errors.filter((function(e){return e.status===t}))[0].message;be(Object(l.a)(Object(l.a)({},je),{},{isOpen:!0,image:J,message:n}))}return Object(a.useEffect)((function(){!function(){var t=localStorage.getItem("token");t?w.getContent(t).then((function(t){t&&(ve(t.data.email),le(!0),e.push("/"))})):le(!1)}()}),[]),Object(a.useEffect)((function(){L.getInitialCards().then((function(e){ce(e)})).catch((function(e){return console.log(e)}))}),[]),Object(a.useEffect)((function(){function e(e){"Escape"===e.key&&xe()}return(s||je.isOpen||j||S||A||V)&&document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[je.isOpen,s,j,S,A,V,xe]),Object(a.useEffect)((function(){L.getUserInfo().then((function(e){te(Object(l.a)({},e))})).catch((function(e){return console.log(e)}))}),[]),Object(m.jsx)(b.Provider,{value:{loggedIn:re,userEmail:ge,handleLogin:Ne,signOut:function(){le(!1),_e(!1),localStorage.removeItem("token"),e.push("./sign-in")}},children:Object(m.jsx)(_.Provider,{value:ee,children:Object(m.jsxs)("div",{className:"page__container",children:[Object(m.jsx)(h,{isNavOpened:he,onClickNav:function(){_e(!he)}}),Object(m.jsxs)(d.d,{children:[Object(m.jsx)(d.b,{path:"/sign-up",children:Object(m.jsx)(T,{handleRegister:function(){be(Object(l.a)(Object(l.a)({},je),{},{isOpen:!0,image:q,message:M}))},handleError:Ce})}),Object(m.jsx)(d.b,{path:"/sign-in",children:Object(m.jsx)(D,{handleLogin:Ne,handleError:Ce})}),Object(m.jsx)(z,{exact:!0,path:"/",component:O,onEditAvatar:function(){E(!0)},onEditProfile:function(){c(!0)},onAddPlace:function(){p(!0)},onCardClick:function(e){K(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===ee._id}));L.changeLikeCardStatus(e._id,!t).then((function(t){var n=se.map((function(n){return n._id===e._id?t:n}));ce(n)})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){B(!0),Y(e)},cards:se}),Object(m.jsx)(d.b,{path:"/",children:Object(m.jsx)(d.a,{to:"/"})})]}),re&&Object(m.jsx)(g,{}),Object(m.jsx)(x,{isOpen:s,onClose:xe,onUpdateUser:function(e){L.editProfile(e).then((function(e){te(Object(l.a)({},e)),xe()})).catch((function(e){return console.log(e)}))}}),Object(m.jsx)(C,{isOpen:j,onClose:xe,onAddPlace:function(e){L.addCard(e).then((function(e){ce([e].concat(Object(r.a)(se))),xe()})).catch((function(e){return console.log(e)}))}}),Object(m.jsx)(y,{onClose:xe,card:V}),Object(m.jsx)(k,{isOpen:A,onClose:xe,onCardDelete:function(e){L.deleteCard(e).then((function(){var t=se.filter((function(t){return t._id!==e}));ce(t),xe()})).catch((function(e){return console.log(e)}))},card:X}),Object(m.jsx)(N,{isOpen:S,onClose:xe,onUpdateAvatar:function(e){var t=e.avatar;L.updateAvatar(t).then((function(e){te(Object(l.a)({},e)),xe()})).catch((function(e){return console.log(e)}))}}),Object(m.jsx)(F,{isOpen:je.isOpen,onClose:xe,statusImage:je.image,statusMessage:je.message})]})})})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(o.a,{children:Object(m.jsx)(B,{})})}),document.getElementById("root")),H()}},[[37,1,2]]]);
//# sourceMappingURL=main.302626cc.chunk.js.map