"use strict";(self.webpackChunkproject1=self.webpackChunkproject1||[]).push([[884],{884:(s,t,e)=>{e.r(t),e.d(t,{default:()=>I,withRouter:()=>C});var o=e(2791),i=e(4420),r=e(6070);const a="MyPosts_postsBlock__lB-pf",n="MyPosts_posts__GSiZ2",l={item:"Post_item__yucwS"};var c=e(184);const u=function(s){return(0,c.jsx)("div",{className:l.posts,children:(0,c.jsxs)("div",{className:l.item,children:[(0,c.jsx)("img",{src:"https://cdn121.picsart.com/212677724003202.jpg"}),s.message,(0,c.jsxs)("div",{children:[(0,c.jsx)("span",{children:"like"}),s.likesCount]})]})})};var d=e(6139),p=e(704),h=e(5304),x=e(9086);const j=(0,h.D)(10),m=(0,p.Z)({form:"ProfileAddNewPostForm"})((s=>(0,c.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,c.jsx)(d.Z,{component:x.gx,name:"newPostText",placeholder:"Post message",validate:[h.l,j]}),(0,c.jsx)("div",{children:(0,c.jsx)("button",{children:"Add Post"})})]})));const f=function(s){console.log("RENDER YO");let t=s.postData.map((s=>(0,c.jsx)(u,{message:s.message,likesCount:s.likesCount})));return(0,c.jsxs)("div",{className:a,children:[(0,c.jsx)("h3",{children:"my posts"}),(0,c.jsx)(m,{onSubmit:t=>{s.addPost(t.newPostText)}}),(0,c.jsx)("div",{className:n,children:t})]})};const g=(0,i.$j)((s=>({postData:s.profilePage.postData,newPostText:s.profilePage.newPostText})),(s=>({addPost:t=>{s((0,r.Wl)(t))}})))(f),v={};var P=e(1760);const _={img:"ProfileInfo_img__+4bLE",descriphionBlock:"ProfileInfo_descriphionBlock__9oI37",descriphionBlock2:"ProfileInfo_descriphionBlock2__exHYx"},S=s=>{const[t,e]=(0,o.useState)(!1),[i,r]=(0,o.useState)(s.status);(0,o.useEffect)((()=>{r(s.status)}),[s.status]);return(0,c.jsx)("div",{children:t?(0,c.jsx)("div",{children:(0,c.jsx)("input",{onChange:s=>{r(s.currentTarget.value)},autoFocus:!0,onBlur:()=>{e(!1),s.updateStatus(i)},value:i})}):(0,c.jsx)("div",{children:(0,c.jsx)("span",{onDoubleClick:()=>{e(!0)},children:i||"-------"})})})};const k=function(s){let{profile:t,status:e,updateStatus:o}=s;return t?(0,c.jsx)("div",{className:_.content,children:(0,c.jsxs)("div",{className:_.descriphionBlock,children:[(0,c.jsx)("div",{children:(0,c.jsx)("img",{src:t.photos.large})}),(0,c.jsx)("div",{className:_.descriphionBlock2,children:t.fullName}),(0,c.jsx)("div",{children:t.aboutMe}),(0,c.jsx)(S,{status:e,updateStatus:o})]})}):(0,c.jsx)(P.Z,{})};const N=function(s){return(0,c.jsxs)("div",{className:v.content,children:[(0,c.jsx)(k,{profile:s.profile,status:s.status,updateStatus:s.updateStatus}),(0,c.jsx)(g,{})]})};var b=e(7689),w=e(1548),B=e(1154);function C(s){return t=>{const e={params:(0,b.UO)()};return(0,c.jsx)(s,{...t,match:e})}}class D extends o.Component{componentDidMount(){let s=this.props.match.params.userId;s||(s=this.props.authorizedUserId),this.props.getUserProfile(s),this.props.getStatus(s)}render(){return(0,c.jsx)(N,{...this.props,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus})}}const I=(0,B.qC)((0,i.$j)((s=>({profile:s.profilePage.profile,status:s.profilePage.status,authorizedUserId:s.auth.userId,isAuth:s.auth.isAuth})),{getUserProfile:r.et,getStatus:r.lR,updateStatus:r.Nf}),C,w.D)(D)},1548:(s,t,e)=>{e.d(t,{D:()=>n});e(2791);var o=e(7689),i=e(4420),r=e(184);let a=s=>({isAuth:s.auth.isAuth});const n=s=>(0,i.$j)(a)((t=>t.isAuth?(0,r.jsx)(s,{...t}):(0,r.jsx)(o.Fg,{to:"/login"})))}}]);
//# sourceMappingURL=884.55ea8db8.chunk.js.map