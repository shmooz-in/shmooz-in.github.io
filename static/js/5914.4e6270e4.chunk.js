"use strict";(self.webpackChunkshmooz_admin=self.webpackChunkshmooz_admin||[]).push([[5914],{11146:function(e,n,r){r.d(n,{Z:function(){return h}});r(47313);var t=r(19860),i=r(94469),o=r(33604),a=r(96467),l=r(97762),c=r(61113),s=r(4117),d=r(24193),u=r(46417);function h(e){var n=e.open,r=void 0!==n&&n,h=e.setOpen,x=e.onConfirm,m=e.onCancel,p=(e.item,(0,t.Z)());return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(i.Z,{open:r,onClose:function(){h(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{p:3},children:r&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o.Z,{id:"alert-dialog-title",children:"Confirm Action"}),(0,u.jsx)(a.Z,{children:(0,u.jsx)(l.Z,{id:"alert-dialog-description",children:(0,u.jsx)(c.Z,{variant:"body2",component:"span",children:"Are you sure you want to proceed with the action"})})}),(0,u.jsxs)(s.Z,{sx:{pr:2.5},children:[(0,u.jsx)(d.Z,{sx:{color:p.palette.error.dark,borderColor:p.palette.error.dark},onClick:x,color:"secondary",children:"Delete"}),(0,u.jsx)(d.Z,{variant:"contained",size:"small",onClick:m,autoFocus:!0,children:"Cancel"})]})]})})})}},89535:function(e,n,r){var t=r(1413),i=r(45987),o=r(19860),a=r(63585),l=r(46417),c=["color","outline","size","sx"];n.Z=function(e){var n=e.color,r=e.outline,s=e.size,d=e.sx,u=(0,i.Z)(e,c),h=(0,o.Z)(),x=n&&!r&&{color:h.palette.background.paper,bgcolor:"".concat(n,".main")},m=r&&{color:n?"".concat(n,".main"):"primary.main",bgcolor:h.palette.background.paper,border:"2px solid",borderColor:n?"".concat(n,".main"):"primary.main"},p={};switch(s){case"badge":p={width:h.spacing(3.5),height:h.spacing(3.5)};break;case"xs":p={width:h.spacing(4.25),height:h.spacing(4.25)};break;case"sm":p={width:h.spacing(5),height:h.spacing(5)};break;case"lg":p={width:h.spacing(9),height:h.spacing(9)};break;case"xl":p={width:h.spacing(10.25),height:h.spacing(10.25)};break;case"md":p={width:h.spacing(7.5),height:h.spacing(7.5)};break;default:p={}}return(0,l.jsx)(a.Z,(0,t.Z)({sx:(0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)({},x),m),p),d)},u))}},81628:function(e,n,r){var t=r(1413),i=r(93433),o=r(29439),a=r(47313),l=r(17592),c=r(17551),s=r(9506),d=r(70501),u=r(47131),h=r(24193),x=r(16031),m=r(58823),p=r(81195),f=r(19713),g=r(46417),Z=(0,l.ZP)("div")((function(e){var n=e.theme;return{width:64,height:64,fontSize:24,display:"flex",cursor:"pointer",alignItems:"center",justifyContent:"center",margin:n.spacing(.5),borderRadius:n.shape.borderRadius,"&:hover":{opacity:.72}}}));function v(e){console.log(e);var n=e.setFieldValue,r=e.fieldName,l=e.multiple,v=e.attachments,j=(0,a.useState)(v||[]),b=(0,o.Z)(j,2),y=b[0],k=b[1];(0,a.useEffect)((function(){if(null!==v&&void 0!==v&&v.length){var e=[];v.forEach((function(n){(0,x.isString)(n)&&e.push(fetch(n,{}).then((function(e){return e.blob()})))})),e.length&&Promise.all(e).then((function(e){var t=[];e.forEach((function(e){var n=new File([e],"name");n.preview=URL.createObjectURL(n),t.push(n)})),k(t),n(r,t)})).catch((function(e){console.log(e)}))}}),[v]);var P=(0,a.useCallback)((function(e){var t=[];t=e.map((function(e){var n=new FileReader;return n.onabort=function(){return console.log("file reading was aborted")},n.onerror=function(){return console.log("file reading has failed")},n.onload=function(){var e=n.result;console.log(e)},n.readAsArrayBuffer(e),Object.assign(e,{preview:URL.createObjectURL(e)})})),l&&(null===y||void 0===y?void 0:y.length)>0&&(t=[].concat((0,i.Z)(t),(0,i.Z)(y))),k(t),n(r,l?t:e[0])}),[k,n,y]),C=(0,m.uI)({onDrop:P,multiple:l,noDrag:!l,maxFiles:5}),S=C.getRootProps,w=C.getInputProps,z=C.isDragActive;return(0,g.jsxs)(g.Fragment,{children:[null===y||void 0===y?void 0:y.map((function(e){var t=e.name,i=e.preview,o=(0,x.isString)(e)?e:t;return(0,g.jsxs)(s.Z,{sx:{p:0,m:.5,width:64,height:64,borderRadius:.25,overflow:"hidden",position:"relative"},children:[(0,g.jsx)(d.Z,{variant:"outlined",component:"img",src:(0,x.isString)(e)?e:i,sx:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",borderRadius:1}}),(0,g.jsx)(s.Z,{sx:{top:6,right:6,position:"absolute"},children:(0,g.jsx)(u.Z,{size:"small",onClick:function(){return function(e){var t=l?y.filter((function(n){return n!==e})):null;k(t),n(r,t)}(e)},sx:{p:"1px",color:"common.white",bgcolor:function(e){return(0,c.Fq)(e.palette.grey[900],.72)},"&:hover":{bgcolor:function(e){return(0,c.Fq)(e.palette.grey[900],.48)}}},children:(0,g.jsx)(p.Z,{})})})]},o)})),(0,g.jsxs)(Z,(0,t.Z)((0,t.Z)({},S()),{},{sx:(0,t.Z)({},z&&{opacity:.72}),children:[(0,g.jsx)("input",(0,t.Z)({},w())),(0,g.jsx)(h.Z,{variant:"outlined",size:"small",sx:{p:0,minWidth:0},children:(0,g.jsx)(f.Z,{})})]}))]})}n.Z=function(e){return(0,g.jsx)(s.Z,{sx:{display:"flex"},children:(0,g.jsx)(v,(0,t.Z)({},e))})}},55914:function(e,n,r){r.r(n),r.d(n,{default:function(){return ye}});var t=r(15861),i=r(29439),o=r(1413),a=r(64687),l=r.n(a),c=r(47313),s=r(19860),d=r(23477),u=r(24076),h=r(67478),x=r(44758),m=r(82558),p=r(9506),f=r(61113),g=r(9289),Z=r(61689),v=r(47131),j=r(93405),b=r(9019),y=r(24631),k=r(41727),P=r(42420),C=r(51629),S=r(66835),w=r(57861),z=r(90891),_=r(70024),E=r(79601),F=r(51405),O=r(62323),A=r(50282),R=r(45987),I=r(50301),D=r(94469),T=r(33604),q=r(96467),V=r(83929),B=r(4117),L=r(15480),M=r(24193),U=r(43394),W=r(97101),H=r(12401),N=r(66182),X=r(81628),G=r(3463),J=r(79429),Y=r(52564),K=r(85554),Q=r(5866),$=(r(70816),r(16031)),ee=r(46417),ne=["image"],re=(0,c.forwardRef)((function(e,n){return(0,ee.jsx)(I.Z,(0,o.Z)({direction:"left",ref:n},e))})),te=G.Ry().shape({name:G.Z_().required("Title is required")}),ie=function(e){var n=e.open,r=e.handleCloseDialog,i=e.editingPaymentPlatform,a=void 0===i?{}:i,c=(0,K.I0)(),s=function(e){r(),c((0,Q.ss)({open:!0,message:"Payment Platform Updated successfully",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"alert",alert:{color:"success"},close:!1}))},d=function(){var e=(0,t.Z)(l().mark((function e(n,r,t,i,o){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(r,!0,!0);case 2:o(r,n[r].join(", "));case 3:case"end":return e.stop()}}),e)})));return function(n,r,t,i,o){return e.apply(this,arguments)}}(),u=function(e){var n=e.setFieldTouched,r=void 0===n?null:n,i=e.setErrors,o=void 0===i?null:i,a=e.setFieldError,c=void 0===a?null:a;return function(){var e=(0,t.Z)(l().mark((function e(n){var t,i,a,s,u;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===n||void 0===n||null===(t=n.data)||void 0===t||!t.errors){e.next=5;break}s=null===n||void 0===n||null===(a=n.data)||void 0===a?void 0:a.errors,Object.keys(s).forEach((function(e){d(s,e,r,o,c)})),e.next=9;break;case 5:if(null===n||void 0===n||null===(i=n.data)||void 0===i||!i.message){e.next=9;break}return e.next=8,r("submit",!0,!0);case 8:c("submit",null===n||void 0===n||null===(u=n.data)||void 0===u?void 0:u.message);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()};return(0,ee.jsx)(D.Z,{open:n,TransitionComponent:re,keepMounted:!0,onClose:r,sx:{"&>div:nth-of-type(3)":{justifyContent:"flex-end","&>div":{m:0,borderRadius:"0px",maxWidth:450,maxHeight:"100%"}}},children:n&&(0,ee.jsx)(J.J9,{initialValues:(0,o.Z)((0,o.Z)({submit:null,name:"",is_active:!0,subscription_enabled:!0},a),{},{image:(0,$.isString)(a.image)?[a.image]:null}),enableReinitialize:!0,validationSchema:te,onSubmit:function(){var e=(0,t.Z)(l().mark((function e(n,r){var t,i,a,d,h,x,m;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=r.setErrors,r.setStatus,r.setSubmitting,i=r.setFieldTouched,a=r.setFieldError,d=n.image,h=(0,R.Z)(n,ne),x=(0,o.Z)((0,o.Z)({},h),{},{image:(0,$.isArray)(d)?d[0]:d}),console.log(n),m={setFieldTouched:i,setErrors:t,setFieldError:a};try{x.id?(x._method="put",c((0,Y.nV)(x,s,u(m)))):x.id||c((0,Y.k5)(x,s,u(m)))}catch(l){c((0,Q.ss)({open:!0,message:"An Error Occured",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"alert",alert:{color:"error"},close:!1})),console.error(l)}case 6:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),children:function(e){var n=e.errors,t=e.setFieldValue,i=e.handleBlur,o=e.handleChange,a=e.handleSubmit,l=e.isSubmitting,c=e.touched,s=e.values;return(0,ee.jsx)("form",{noValidate:!0,onSubmit:a,children:(0,ee.jsxs)(U._,{dateAdapter:W.H,children:[(0,ee.jsx)(T.Z,{children:"".concat(s.id?"Edit":"Add"," Payment Platform")}),(0,ee.jsx)(q.Z,{children:(0,ee.jsxs)(b.ZP,{container:!0,spacing:H.dv,sx:{mt:.25},children:[(0,ee.jsx)(b.ZP,{item:!0,xs:12,children:(0,ee.jsx)(y.Z,{id:"payment-platform-name",fullWidth:!0,label:"Enter Payment Platform Title*",name:"name",value:s.name,onBlur:i,onChange:o,error:Boolean(c.name&&n.name),helperText:c.name&&n.name})}),(0,ee.jsx)(b.ZP,{item:!0,xs:12,children:(0,ee.jsxs)(b.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,ee.jsx)(b.ZP,{item:!0,xs:12,sm:4,children:(0,ee.jsx)(f.Z,{variant:"body2",children:"Image"})}),(0,ee.jsx)(b.ZP,{item:!0,xs:12,sm:8,children:(0,ee.jsx)(X.Z,{attachments:s.image,setFieldValue:t,fieldName:"image"})})]})}),(0,ee.jsx)(b.ZP,{item:!0,md:6,xs:12,children:(0,ee.jsx)(V.Z,{control:(0,ee.jsx)(_.Z,{checked:s.is_active||!1,name:"is_active",onChange:function(e){return t("is_active",e.target.checked)}}),label:"Active"})}),(0,ee.jsx)(b.ZP,{item:!0,md:6,xs:12,children:(0,ee.jsx)(V.Z,{control:(0,ee.jsx)(_.Z,{checked:s.subscription_enabled||!1,name:"subscription_enabled",onChange:function(e){return t("subscription_enabled",e.target.checked)}}),label:"Subscribed"})})]})}),(0,ee.jsxs)(B.Z,{children:[n.submit&&(0,ee.jsx)(p.Z,{sx:{ml:3,flex:1},children:(0,ee.jsx)(L.Z,{error:!0,children:n.submit})}),(0,ee.jsx)(N.Z,{children:(0,ee.jsx)(M.Z,{color:"secondary",disabled:l,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"".concat(s.id?"Update":"Create")})}),(0,ee.jsx)(N.Z,{children:(0,ee.jsx)(M.Z,{variant:"text",color:"error",onClick:r,children:"Close"})})]}),(0,ee.jsx)(p.Z,{sx:{mt:2}})]})})}})})},oe=r(33497),ae=r(25823),le=r(51997),ce=r(44289),se=r(94788),de=r(49854),ue=r(57983),he=r(83033),xe=r(38398),me=r(11146),pe=r(89535);function fe(e,n,r){return n[r]<e[r]?-1:n[r]>e[r]?1:0}var ge=function(e,n){return"desc"===e?function(e,r){return fe(e,r,n)}:function(e,r){return-fe(e,r,n)}};function Ze(e,n){var r=e.map((function(e,n){return[e,n]}));return r.sort((function(e,r){var t=n(e[0],r[0]);return 0!==t?t:e[1]-r[1]})),r.map((function(e){return e[0]}))}var ve=[{id:"id",numeric:!0,label:"ID",align:"center"},{id:"name",numeric:!1,label:"Title",align:"left"},{id:"image",numeric:!1,label:"Image",align:"left"},{id:"is_active",numeric:!1,label:"Status",align:"center"},{id:"subscription_enabled",numeric:!1,label:"Subscribed",align:"center"}];function je(e){var n=e.onSelectAllClick,r=e.order,t=e.orderBy,i=e.numSelected,o=e.rowCount,a=e.onRequestSort,l=e.theme,c=e.selected;return(0,ee.jsx)(d.Z,{children:(0,ee.jsxs)(u.Z,{children:[(0,ee.jsx)(h.Z,{padding:"checkbox",sx:{pl:3},children:(0,ee.jsx)(x.Z,{color:"primary",indeterminate:i>0&&i<o,checked:o>0&&i===o,onChange:n,inputProps:{"aria-label":"select all desserts"}})}),i>0&&(0,ee.jsx)(h.Z,{padding:"none",colSpan:7,children:(0,ee.jsx)(be,{numSelected:c.length})}),i<=0&&ve.map((function(e){return(0,ee.jsx)(h.Z,{align:e.align,padding:e.disablePadding?"none":"normal",sortDirection:t===e.id&&r,children:(0,ee.jsxs)(m.Z,{active:t===e.id,direction:t===e.id?r:"asc",onClick:(n=e.id,function(e){a(e,n)}),children:[e.label,t===(null===e||void 0===e?void 0:e.id)?(0,ee.jsx)(p.Z,{component:"span",sx:A.Z,children:"desc"===r?"sorted descending":"sorted ascending"}):null]})},e.id);var n})),i<=0&&(0,ee.jsx)(h.Z,{sortDirection:!1,align:"center",sx:{pr:3},children:(0,ee.jsx)(f.Z,{variant:"subtitle1",sx:{color:"dark"===l.palette.mode?"grey.600":"grey.900"},children:"Action"})})]})})}var be=function(e){var n=e.numSelected;return(0,ee.jsxs)(g.Z,{sx:(0,o.Z)({p:0,pl:1,pr:1},n>0&&{color:function(e){return e.palette.secondary.main}}),children:[n>0?(0,ee.jsxs)(f.Z,{color:"inherit",variant:"h4",children:[n," Selected"]}):(0,ee.jsx)(f.Z,{variant:"h6",id:"tableTitle",children:"Nutrition"}),(0,ee.jsx)(p.Z,{sx:{flexGrow:1}}),n>0&&(0,ee.jsx)(Z.Z,{title:"Delete",children:(0,ee.jsx)(v.Z,{size:"large",children:(0,ee.jsx)(le.Z,{fontSize:"small"})})})]})},ye=function(){var e=(0,s.Z)(),n=(0,ae.I0)(),r=c.useState(null),t=(0,i.Z)(r,2),o=t[0],a=t[1],l=c.useState(!1),d=(0,i.Z)(l,2),m=d[0],p=d[1],g=function(e){a(e),p(!0)},A=c.useState("asc"),R=(0,i.Z)(A,2),I=R[0],D=R[1],T=c.useState("calories"),q=(0,i.Z)(T,2),V=q[0],B=q[1],L=c.useState([]),M=(0,i.Z)(L,2),U=M[0],W=M[1],H=c.useState(0),N=(0,i.Z)(H,2),X=N[0],G=N[1],J=c.useState(5),K=(0,i.Z)(J,2),$=K[0],ne=K[1],re=c.useState(""),te=(0,i.Z)(re,2),le=te[0],fe=te[1],ve=c.useState([]),be=(0,i.Z)(ve,2),ye=be[0],ke=be[1],Pe=(0,ae.v9)((function(e){return e.paymentPlatform})).paymentPlatforms,Ce=c.useState(!1),Se=(0,i.Z)(Ce,2),we=Se[0],ze=Se[1];c.useEffect((function(){n((0,Y.qX)())}),[n]),c.useEffect((function(){ke(Pe)}),[Pe]);var _e=c.useState(null),Ee=(0,i.Z)(_e,2),Fe=Ee[0],Oe=Ee[1],Ae=function(e){Oe(null===e||void 0===e?void 0:e.currentTarget)},Re=function(){Oe(null)},Ie=function(){n((0,Q.ss)({open:!0,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"alert",alert:{color:"success"},message:"Payment Platform Deleted"})),n((0,Y.qX)())},De=function(){n((0,Q.ss)({open:!0,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"alert",alert:{color:"error"},message:"An Error Occured"}))},Te=X>0?Math.max(0,(1+X)*$-ye.length):0;return(0,ee.jsxs)(oe.Z,{title:"Payment Platform List",content:!1,children:[(0,ee.jsx)(j.Z,{children:(0,ee.jsxs)(b.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,ee.jsx)(b.ZP,{item:!0,xs:12,sm:6,children:(0,ee.jsx)(y.Z,{InputProps:{startAdornment:(0,ee.jsx)(k.Z,{position:"start",children:(0,ee.jsx)(ue.Z,{fontSize:"small"})})},onChange:function(e){var n=null===e||void 0===e?void 0:e.target.value;if(fe(n||""),n){var r=ye.filter((function(e){var r=!0,t=!1;return["name","category","price","qty","id"].forEach((function(r){e[r].toString().toLowerCase().includes(n.toString().toLowerCase())&&(t=!0)})),t||(r=!1),r}));ke(r)}else ke(Pe)},placeholder:"Search Payment Platform",value:le,size:"small"})}),(0,ee.jsxs)(b.ZP,{item:!0,xs:12,sm:6,sx:{textAlign:"right"},children:[(0,ee.jsx)(Z.Z,{title:"Copy",children:(0,ee.jsx)(v.Z,{size:"large",children:(0,ee.jsx)(de.Z,{})})}),(0,ee.jsx)(Z.Z,{title:"Print",children:(0,ee.jsx)(v.Z,{size:"large",children:(0,ee.jsx)(se.Z,{})})}),(0,ee.jsx)(Z.Z,{title:"Filter",children:(0,ee.jsx)(v.Z,{size:"large",children:(0,ee.jsx)(ce.Z,{})})}),(0,ee.jsx)(Z.Z,{title:"Add Payment Platform",children:(0,ee.jsx)(P.Z,{color:"primary",size:"small",onClick:function(){return g()},sx:{boxShadow:"none",ml:1,width:32,height:32,minHeight:32},children:(0,ee.jsx)(he.Z,{fontSize:"small"})})}),(0,ee.jsx)(ie,{open:m,editingPaymentPlatform:o,handleCloseDialog:function(){p(!1),a(null)}})]})]})}),(0,ee.jsx)(C.Z,{children:(0,ee.jsxs)(S.Z,{sx:{minWidth:750},"aria-labelledby":"tableTitle",children:[(0,ee.jsx)(je,{numSelected:U.length,order:I,orderBy:V,onSelectAllClick:function(e){if(e.target.checked)if(U.length>0)W([]);else{var n=ye.map((function(e){return e.id}));W(n)}else W([])},onRequestSort:function(e,n){D(V===n&&"asc"===I?"desc":"asc"),B(n)},rowCount:ye.length,theme:e,selected:U}),(0,ee.jsxs)(w.Z,{children:[Ze(ye,ge(I,V)).slice(X*$,X*$+$).map((function(r,t){if("number"===typeof r)return null;var i,o=(i=r.id,-1!==U.indexOf(i)),l="enhanced-table-checkbox-".concat(t);return(0,ee.jsxs)(u.Z,{hover:!0,role:"checkbox","aria-checked":o,tabIndex:-1,selected:o,children:[(0,ee.jsx)(h.Z,{padding:"checkbox",sx:{pl:3},onClick:function(e){return function(e,n){var r=U.indexOf(n),t=[];-1===r?t=t.concat(U,n):0===r?t=t.concat(U.slice(1)):r===U.length-1?t=t.concat(U.slice(0,-1)):r>0&&(t=t.concat(U.slice(0,r),U.slice(r+1))),W(t)}(0,r.id)},children:(0,ee.jsx)(x.Z,{color:"primary",checked:o,inputProps:{"aria-labelledby":l}})}),(0,ee.jsx)(h.Z,{align:"center",component:"th",id:l,scope:"row",sx:{cursor:"pointer"},children:(0,ee.jsxs)(f.Z,{variant:"subtitle1",sx:{color:"dark"===e.palette.mode?"grey.600":"grey.900"},children:["#",r.id," "]})}),(0,ee.jsx)(h.Z,{component:"th",id:l,scope:"row",sx:{cursor:"pointer"},onClick:function(e){return g(r)},children:(0,ee.jsx)(z.Z,{underline:"hover",color:"default",sx:{overflow:"hidden",display:"block",textOverflow:"ellipsis",whiteSpace:"nowrap",":hover":{color:"primary.main"},cursor:"pointer"},children:r.name})}),(0,ee.jsx)(h.Z,{children:(0,ee.jsx)(b.ZP,{container:!0,spacing:2,alignItems:"center",children:(0,ee.jsx)(b.ZP,{item:!0,children:(0,ee.jsx)(pe.Z,{alt:r.name,src:r.image})})})}),(0,ee.jsx)(h.Z,{align:"center",children:(0,ee.jsx)(_.Z,{checked:r.is_active,color:"".concat(r.is_active?"success":"error"),inputProps:{"aria-label":"controlled"},onChange:function(e,t){var i={id:r.id,is_active:e.target.checked,_method:"put"};n((0,Y.nV)(i,(function(){}),(function(){})))}})}),(0,ee.jsx)(h.Z,{align:"center",children:(0,ee.jsx)(_.Z,{checked:r.subscription_enabled,color:"".concat(r.subscription_enabled?"success":"error"),inputProps:{"aria-label":"controlled"},onChange:function(e,t){var i={id:r.id,subscription_enabled:e.target.checked,_method:"put"};n((0,Y.nV)(i,(function(){}),(function(){})))}})}),(0,ee.jsxs)(h.Z,{align:"center",sx:{pr:3},children:[(0,ee.jsx)(v.Z,{onClick:Ae,size:"large","aria-label":"more options",children:(0,ee.jsx)(xe.Z,{fontSize:"small","aria-controls":"menu-popular-card-1","aria-haspopup":"true",sx:{color:"grey.500"}})}),(0,ee.jsxs)(E.Z,{id:"menu-popular-card-1",anchorEl:Fe,keepMounted:!0,open:Boolean(Fe),onClose:Re,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},sx:{"& .MuiMenu-paper":{boxShadow:e.customShadows.z1}},children:[(0,ee.jsx)(F.Z,{onClick:function(){return function(e){g(e),Re()}(r)},children:"Edit"}),(0,ee.jsx)(F.Z,{onClick:function(){return function(e){Re(),a(e),ze(!0)}(r)},children:"Delete"})]})]})]},t)})),Te>0&&(0,ee.jsx)(u.Z,{style:{height:53*Te},children:(0,ee.jsx)(h.Z,{colSpan:6})})]})]})}),(0,ee.jsx)(O.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:ye.length,rowsPerPage:$,page:X,onPageChange:function(e,n){G(n)},onRowsPerPageChange:function(e){ne(parseInt(null===e||void 0===e?void 0:e.target.value,10)),G(0)}}),(0,ee.jsx)(me.Z,{open:we,setOpen:ze,item:o,onConfirm:function(){ze(!1),n((0,Y.EY)(o,Ie,De))},onCancel:function(){return ze(!1)}})]})}}}]);