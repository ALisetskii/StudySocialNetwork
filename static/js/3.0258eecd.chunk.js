(this["webpackJsonpreact-way-of-samurai"]=this["webpackJsonpreact-way-of-samurai"]||[]).push([[3],{292:function(t,e,a){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__34CTv"}},293:function(t,e,a){t.exports={postsBlock:"MyPosts_postsBlock__3OJU-",posts:"MyPosts_posts__214Vl"}},294:function(t,e,a){t.exports={item:"Post_item__28ehv"}},295:function(t,e,a){"use strict";a.r(e);var s=a(34),n=a(35),o=a(38),r=a(37),u=a(0),l=a.n(u),c=a(292),i=a.n(c),p=a(40),m=(l.a.Component,a(128)),d=function(t){var e=Object(u.useState)(!1),a=Object(m.a)(e,2),s=a[0],n=a[1],o=Object(u.useState)(t.status),r=Object(m.a)(o,2),c=r[0],i=r[1];Object(u.useEffect)((function(){i(t.status)}),[t.status]);return l.a.createElement("div",null,!s&&l.a.createElement("div",null,l.a.createElement("span",{onDoubleClick:function(){n(!0)}},t.status||"-------")),s&&l.a.createElement("div",null,l.a.createElement("input",{value:c,autoFocus:!0,onBlur:function(){n(!1),t.updateStatus(c)},onChange:function(t){i(t.currentTarget.value)}})))},f=function(t){var e=t.profile,a=t.status,s=t.updateStatus;return e?l.a.createElement("div",null,l.a.createElement("div",{className:i.a.descriptionBlock},l.a.createElement("img",{src:e.photos.large,alt:""}),l.a.createElement(d,{status:a,updateStatus:s}))):l.a.createElement(p.a,null)},h=a(95),E=a(293),b=a.n(E),v=a(294),g=a.n(v),P=function(t){return l.a.createElement("div",{className:g.a.item},l.a.createElement("img",{src:"https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg",alt:""}),t.message,l.a.createElement("div",null,l.a.createElement("span",null,"like")," ",t.likesCount))},j=a(88),O=a(127),k=a(56),y=a(32),S=Object(k.a)(10),_=Object(O.a)({form:"MyPostsAddNewPostForm"})((function(t){return l.a.createElement("form",{onSubmit:t.handleSubmit},l.a.createElement("div",null,l.a.createElement(j.a,{component:y.b,name:"newPostBody",placeholder:"Enter your post",validate:[k.b,S]})),l.a.createElement("div",null,l.a.createElement("button",null,"Add post")))})),w=function(t){console.log("reder my posts");var e=t.posts.map((function(t){return l.a.createElement(P,{message:t.message,likesCount:t.likesCount})}));return l.a.createElement("div",{className:b.a.postsBlock},l.a.createElement("h3",null,"My posts"),l.a.createElement(_,{onSubmit:function(e){t.addPost(e.newPostBody)}}),l.a.createElement("div",{className:b.a.posts},e))},B=a(13),C=Object(B.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(h.a)(e))}}}))(w),x=function(t){return l.a.createElement("div",null,l.a.createElement(f,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),l.a.createElement(C,null))},I=a(10),M=a(8),N=function(t){Object(o.a)(a,t);var e=Object(r.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return l.a.createElement(x,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),a}(l.a.Component);e.default=Object(M.d)(Object(B.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:h.d,getStatus:h.c,updateStatus:h.e}),I.f)(N)}}]);
//# sourceMappingURL=3.0258eecd.chunk.js.map