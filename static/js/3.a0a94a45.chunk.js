(this["webpackJsonpreact-way-of-samurai"]=this["webpackJsonpreact-way-of-samurai"]||[]).push([[3],{292:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__34CTv",mainPhoto:"ProfileInfo_mainPhoto__91-0S",contact:"ProfileInfo_contact__pMYzc",formSummaryError:"ProfileInfo_formSummaryError__sqkc9"}},293:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__3OJU-",posts:"MyPosts_posts__214Vl"}},294:function(e,t,a){e.exports={item:"Post_item__28ehv"}},295:function(e,t,a){"use strict";a.r(t);var n=a(34),o=a(35),l=a(38),r=a(37),s=a(0),c=a.n(s),i=a(96),u=a(292),m=a.n(u),p=a(40),f=(c.a.Component,function(e){var t=Object(s.useState)(!1),a=Object(i.a)(t,2),n=a[0],o=a[1],l=Object(s.useState)(e.status),r=Object(i.a)(l,2),u=r[0],m=r[1];Object(s.useEffect)((function(){m(e.status)}),[e.status]);return c.a.createElement("div",null,!n&&c.a.createElement("div",null,c.a.createElement("b",null,"Status:",c.a.createElement("b",null)),c.a.createElement("span",{onDoubleClick:function(){o(!0)}},e.status||"-------")),n&&c.a.createElement("div",null,c.a.createElement("input",{value:u,autoFocus:!0,onBlur:function(){o(!1),e.updateStatus(u)},onChange:function(e){m(e.currentTarget.value)}})))}),d=a(107),b=a.n(d),E=a(25),v=a(129),h=Object(v.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return c.a.createElement("form",{onSubmit:t},c.a.createElement("div",null,c.a.createElement("button",null,"save")),n&&c.a.createElement("div",{className:m.a.formSummaryError},n),c.a.createElement("div",null,c.a.createElement("b",null," Full name:"),Object(E.c)("Full name","fullName",E.a,[])),c.a.createElement("div",null,c.a.createElement("b",null," Looking for a job:"),Object(E.c)("LookingForaAJob","lookingForaAJob",E.a,[],{type:"checkbox"})),c.a.createElement("div",null,c.a.createElement("b",null," My professional skills:"),Object(E.c)("My professional skills","lookingForAJobDescription",E.b,[])),c.a.createElement("div",null,c.a.createElement("b",null," About me:"),Object(E.c)("About me","aboutMe",E.b,[])),c.a.createElement("div",null,c.a.createElement("b",null," Contacts:"),Object.keys(a.contacts).map((function(e){return c.a.createElement("div",{className:m.a.contact,key:e},c.a.createElement("b",null,e,":",Object(E.c)(e,"contacts."+e,E.a,[])))}))))})),k=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return c.a.createElement("div",null,a&&c.a.createElement("div",null,c.a.createElement("button",{onClick:n},"Edit")),c.a.createElement("div",null,c.a.createElement("b",null," Full name:"),t.fullName),c.a.createElement("div",null,c.a.createElement("b",null," Looking for a job:"),t.lookingForAJob?"yes":"no"),t.lookingForAJob&&c.a.createElement("div",null,c.a.createElement("b",null," My professional skills:"),t.lookingForAJobDescription),c.a.createElement("div",null,c.a.createElement("b",null," About me:"),t.aboutMe),c.a.createElement("div",null,c.a.createElement("b",null," Contacts:"),Object.keys(t.contacts).map((function(e){return c.a.createElement(P,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))))},P=function(e){var t=e.contactTitle,a=e.contactValue;return c.a.createElement("div",{className:m.a.contact},c.a.createElement("b",null,t,":"),a||"none")},g=function(e){var t=e.profile,a=e.status,n=e.updateStatus,o=e.isOwner,l=e.savePhoto,r=e.saveProfile,u=Object(s.useState)(!1),d=Object(i.a)(u,2),E=d[0],v=d[1];if(!t)return c.a.createElement(p.a,null);return c.a.createElement("div",null,c.a.createElement("div",{className:m.a.descriptionBlock},c.a.createElement("img",{src:t.photos.large||b.a,alt:"",className:m.a.mainPhoto}),o&&c.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&l(e.target.files[0])}}),E?c.a.createElement(h,{profile:t,initialValues:t,onSubmit:function(e){r(e).then((function(){v(!1)}))}}):c.a.createElement(k,{profile:t,isOwner:o,goToEditMode:function(){v(!0)}}),c.a.createElement(f,{status:a,updateStatus:n})))},O=a(95),y=a(293),j=a.n(y),S=a(294),_=a.n(S),w=function(e){return c.a.createElement("div",{className:_.a.item},c.a.createElement("img",{src:"https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg",alt:""}),e.message,c.a.createElement("div",null,c.a.createElement("span",null,"like")," ",e.likesCount))},A=a(88),M=a(48),C=Object(M.a)(10),F=Object(v.a)({form:"MyPostsAddNewPostForm"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",null,c.a.createElement(A.a,{component:E.b,name:"newPostBody",placeholder:"Enter your post",validate:[M.b,C]})),c.a.createElement("div",null,c.a.createElement("button",null,"Add post")))})),I=function(e){console.log("reder my posts");var t=e.posts.map((function(e){return c.a.createElement(w,{key:e.id,message:e.message,likesCount:e.likesCount})}));return c.a.createElement("div",{className:j.a.postsBlock},c.a.createElement("h3",null,"My posts"),c.a.createElement(F,{onSubmit:function(t){e.addPost(t.newPostBody)}}),c.a.createElement("div",{className:j.a.posts},t))},N=a(14),B=Object(N.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(O.a)(t))}}}))(I),J=function(e){return c.a.createElement("div",null,c.a.createElement(g,{profile:e.profile,status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),c.a.createElement(B,null))},T=a(10),x=a(9),U=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return c.a.createElement(J,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,isOwner:!this.props.match.params.userId,savePhoto:this.props.savePhoto}))}}]),a}(c.a.Component);t.default=Object(x.d)(Object(N.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:O.d,getStatus:O.c,updateStatus:O.g,savePhoto:O.e,saveProfile:O.f}),T.g)(U)}}]);
//# sourceMappingURL=3.a0a94a45.chunk.js.map