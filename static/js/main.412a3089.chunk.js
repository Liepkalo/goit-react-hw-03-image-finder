(this["webpackJsonpgoit-react-hw-02-bank-account"]=this["webpackJsonpgoit-react-hw-02-bank-account"]||[]).push([[0],{10:function(e,t,a){e.exports={overlay:"Modal_overlay__nbVoQ",modal:"Modal_modal__wkm0B"}},14:function(e,t,a){e.exports={search_form:"SearchForm_search_form__3vT51"}},15:function(e,t,a){e.exports={gallery:"Gallery_gallery__3GFWn"}},16:function(e,t,a){e.exports=a(45)},2:function(e,t,a){e.exports={photo_card:"PhotoCard_photo_card__1PPs5",stats:"PhotoCard_stats__fjFuP",stats_item:"PhotoCard_stats_item__1FXhO",fullscreen_button:"PhotoCard_fullscreen_button__2U34v",gallery_item:"PhotoCard_gallery_item__2j2ge"}},22:function(e,t,a){e.exports={App:"src_App__3DL2y",button:"src_button__1WUSl"}},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),s=(a(21),a(22),a(11)),l=a(3),i=a(4),u=a(6),m=a(5),p=a(7),h=a(13),d=a.n(h),f=(a(44),a(9)),b=a.n(f),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return fetch("https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(e,"&page=").concat(t,"&per_page=12&key=14394962-7157b89b212ffee5ae0417b6a")).then((function(e){return e.json()})).then((function(e){return e.hits}))},y=a(14),v=a.n(y),g=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={query:""},a.handleChange=function(e){a.setState({query:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.onSearch(a.state.query),a.setState({query:""})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.query;return r.a.createElement("form",{className:v.a.search_form,onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",autoComplete:"off",placeholder:"Search images...",value:e,onChange:this.handleChange})," ")}}]),t}(n.Component),E=a(15),C=a.n(E),k=a(2),O=a.n(k),N=a(10),j=a.n(N),w=document.querySelector("#modal-root"),S=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).backdropRef=Object(n.createRef)(),a.handleKeyPress=function(e){"Escape"===e.code&&a.props.onClose()},a.handleBackdropClick=function(e){a.backdropRef.current&&e.target!==a.backdropRef.current||a.props.onClose()},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.props.children;return Object(o.createPortal)(r.a.createElement("div",{className:j.a.overlay,ref:this.backdropRef,onClick:this.handleBackdropClick,role:"presentation"},r.a.createElement("div",{className:j.a.modal}," ",e," ")," "),w)}}]),t}(n.Component),P=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isModalOpen:!1},a.openModal=function(){return a.setState({isModalOpen:!0})},a.closeModal=function(){return a.setState({isModalOpen:!1})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.item,t=this.state.isModalOpen;return r.a.createElement("li",{className:O.a.gallery_item,key:e.id},r.a.createElement("div",{className:O.a.photo_card},r.a.createElement("img",{src:e.webformatURL,alt:""}),r.a.createElement("div",{className:O.a.stats},r.a.createElement("p",{className:O.a.stats_item},r.a.createElement("i",{className:"material-icons"}," thumb_up ")," ",e.likes," ")," ",r.a.createElement("p",{className:O.a.stats_item},r.a.createElement("i",{className:"material-icons"}," visibility ")," ",e.views," ")," ",r.a.createElement("p",{className:O.a.stats_item},r.a.createElement("i",{className:"material-icons"}," comment ")," ",e.comments," ")," ",r.a.createElement("p",{className:O.a.stats_item},r.a.createElement("i",{className:"material-icons"}," cloud_download ")," ",e.downloads," ")," ")," ",r.a.createElement("button",{type:"button",className:O.a.fullscreen_button,onClick:this.openModal},r.a.createElement("i",{className:"material-icons"}," zoom_out_map ")," ")," ",t&&r.a.createElement(S,{onClose:this.closeModal},r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"modal"},r.a.createElement("img",{src:e.largeImageURL,alt:""}))," ")," ")," ")," ")}}]),t}(n.Component),q=function(e){var t=e.photoCards;return r.a.createElement("ul",{className:C.a.gallery}," ",t.map((function(e){return r.a.createElement(P,{item:e,key:e.id})}))," ")},A=function(e){return r.a.createElement("div",null," Error: ",e," ")},M=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={photoCards:[],error:null,pageNumber:1,query:"",isLoading:!1},a.onSearch=function(e){a.state.query!==e&&a.setState({query:e,photoCards:[],pageNumber:1})},a.fetchPhotoCards=function(){var e=a.state,t=e.query,n=e.pageNumber;a.setState({isLoading:!0}),_(t,n).then((function(e){a.setState((function(t){return{photoCards:[].concat(Object(s.a)(t.photoCards),Object(s.a)(e)),pageNumber:t.pageNumber+1,isLoading:!1}}))})).catch((function(e){a.setState({error:e})}))},a.reset=function(){a.setState({query:""})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.query,r=a.pageNumber;t.query!==n&&this.fetchPhotoCards(),t.pageNumber!==r&&window.scrollTo({top:1450*r,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.photoCards,a=e.error,n=e.isLoading;return r.a.createElement("div",{className:b.a.App},r.a.createElement(g,{onSearch:this.onSearch})," ",a&&r.a.createElement(A,{message:a.message})," ",n&&r.a.createElement(d.a,{type:"ThreeDots",color:"#grey",height:80,width:80})," ",t.length>0&&r.a.createElement(q,{photoCards:t})," ",t.length>0&&r.a.createElement("button",{type:"button",className:b.a.button,onClick:this.fetchPhotoCards},"Load more"," ")," ")}}]),t}(n.Component);c.a.render(r.a.createElement(M,null),document.getElementById("root"))},9:function(e,t,a){e.exports={App:"App_App__sk3AF",button:"App_button__3Z9h3"}}},[[16,1,2]]]);
//# sourceMappingURL=main.412a3089.chunk.js.map