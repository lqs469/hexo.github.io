(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{151:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(161),s=a(158),o=a(159);t.default=function(e){return r.a.createElement(s.a,{location:e.location,title:"lqs469"},r.a.createElement(o.a,{title:"About me",keywords:["lqs469","blog","about me"]}),r.a.createElement(n.a,null),r.a.createElement("p",null,"勤硕(lqs)，来自西南小城，早年 OIer, 现在在帝都给一位姓马的爸爸打工。本人属于不务正业型搬砖码畜，倒腾 Web, Mobile, NodeJs 等，喜欢折腾(自己)，除了前端技能树，还点过 Java，Python，ios，Docker 的奇葩技能树。"),"✉️ liqinshuo469@gmail.com")}},154:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var i=a(0),r=a.n(i),n=a(4),s=a.n(n),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a});a(156);var c=r.a.createContext({}),d=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},155:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return c});var i=a(166),r=a.n(i),n=a(167),s=a.n(n);a(147);s.a.baseFontSize=14,s.a.headerWeight=700,s.a.boldWeight=400,s.a.bodyWeight=100,s.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete s.a.googleFonts;var o=new r.a(s.a);var l=o.rhythm,c=o.scale},156:function(e,t,a){var i;e.exports=(i=a(157))&&i.default||i},157:function(e,t,a){"use strict";a.r(t);a(34);var i=a(0),r=a.n(i),n=a(4),s=a.n(n),o=a(55),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},158:function(e,t,a){"use strict";a(34);var i=a(7),r=a.n(i),n=a(0),s=a.n(n),o=a(154),l=a(155),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,i=t.title,r=t.children;return e="/"===a.pathname?s.a.createElement("h1",{style:Object.assign({},Object(l.b)(1),{marginBottom:Object(l.a)(1.5),marginTop:0})},s.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},i)):s.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},s.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none"},to:"/"},i)),s.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},s.a.createElement("header",null,e),s.a.createElement("main",null,r))},t}(s.a.Component);t.a=c},159:function(e,t,a){"use strict";var i=a(160),r=a(0),n=a.n(r),s=a(4),o=a.n(s),l=a(168),c=a.n(l);function d(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,o=e.title,l=i.data.site,d=t||l.siteMetadata.description;return n.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:d}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=d},160:function(e){e.exports={data:{site:{siteMetadata:{title:"lqs469",description:"lqs469 Blog",author:"lqs469"}}}}},161:function(e,t,a){"use strict";a(162);var i=a(164),r=a(0),n=a.n(r),s=a(154),o=a(165),l=a.n(o),c=a(155);var d="2345978561";t.a=function(){return n.a.createElement(s.b,{query:d,render:function(e){var t=e.site.siteMetadata,a=t.author,i=t.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(2.5)}},n.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(c.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,"Made by ",n.a.createElement("strong",null,a)," who makes stuff.",n.a.createElement("br",null)," Find me on"," ",n.a.createElement("a",{target:"_blank",href:"https://twitter.com/"+i.twitter},"Twitter")," ",n.a.createElement("a",{target:"_blank",href:"https://github.com/"+i.github},"Github")," ",n.a.createElement("a",{target:"_blank",href:"https://www.zhihu.com/people/"+i.zhihu},"Zhihu")," ",n.a.createElement("a",{target:"_blank",href:"https://instagram.com/"+i.ins},"Instagram")," ",n.a.createElement("a",{target:"_blank",href:"https://weibo.com/"+i.weibo},"Weibo")))},data:i})}},162:function(e,t,a){"use strict";a(163)("fixed",function(e){return function(){return e(this,"tt","","")}})},163:function(e,t,a){var i=a(11),r=a(18),n=a(19),s=/"/g,o=function(e,t,a,i){var r=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(i).replace(s,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),i(i.P+i.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},164:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAEDBAL/xAAYAQACAwAAAAAAAAAAAAAAAAAABAECA//aAAwDAQACEAMQAAAByXZdjClw1Uo6C8CD/8QAGxAAAgIDAQAAAAAAAAAAAAAAAQIAERASISL/2gAIAQEAAQUCd/a7YrqyxAIRxVFf/8QAGhEAAgMBAQAAAAAAAAAAAAAAABEBAhIhMf/aAAgBAwEBPwGc58EPpa0s/8QAFxEAAwEAAAAAAAAAAAAAAAAAABARIf/aAAgBAgEBPwHa4f/EABcQAAMBAAAAAAAAAAAAAAAAAAARMDH/2gAIAQEABj8CHsP/xAAaEAEAAgMBAAAAAAAAAAAAAAABABEhMUEQ/9oACAEBAAE/IVuHJeWoSo2eMrMCuQQ2QINt+T//2gAMAwEAAgADAAAAEDQIQP/EABgRAAMBAQAAAAAAAAAAAAAAAAABESFR/9oACAEDAQE/EE7HCilhlLT/xAAYEQEBAQEBAAAAAAAAAAAAAAABABEhMf/aAAgBAgEBPxBT65bIJ2Bl/8QAGxABAQEAAwEBAAAAAAAAAAAAAREAITFBYYH/2gAIAQEAAT8QpUOldJRHgSfccMy3sK7iJAHW4g37knJdXCGeOZSVu//Z",width:50,height:50,src:"/static/0257130576977213eca55ce954451317/7e494/portrait-pic.jpg",srcSet:"/static/0257130576977213eca55ce954451317/7e494/portrait-pic.jpg 1x,\n/static/0257130576977213eca55ce954451317/36cc2/portrait-pic.jpg 1.5x,\n/static/0257130576977213eca55ce954451317/0a3a6/portrait-pic.jpg 2x,\n/static/0257130576977213eca55ce954451317/75d16/portrait-pic.jpg 3x"}}},site:{siteMetadata:{author:"lqs469",social:{twitter:"liqinshuo",github:"lqs469",weibo:"lqs469",ins:"lqs469",zhihu:"li-qin-shuo"}}}}}},165:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var r,n=i(a(7)),s=i(a(35)),o=i(a(74)),l=i(a(75)),c=i(a(0)),d=i(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},A=Object.create({}),f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return A[a]||!1},p=new WeakMap;var h=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(p.has(e.target)){var t=p.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),p.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),p.set(e,t)),function(){a.unobserve(e),p.delete(e)}},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1",d=e.transitionDelay?e.transitionDelay:"0.5s";return"<picture>"+i+"<img "+o+l+a+r+t+s+n+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+d+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=c.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,d=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:i,src:r},u,{onLoad:s,onError:d,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});m.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!1,n=t.fadeIn,o=f(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,r=!1);var l=!(t.critical&&!t.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:r,fadeIn:n,hasNoScript:l,seenBefore:o},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=h(e,function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,A[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,A=void 0===d?{}:d,f=e.placeholderClassName,p=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.Tag,E=e.itemProp,w="boolean"==typeof b?"lightgray":b,S=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,A),v=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),j={title:t,alt:this.state.isVisible?"":a,style:S,className:f};if(p){var B=p;return c.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(B.srcSet)},c.default.createElement(y,{style:{width:"100%",paddingBottom:100/B.aspectRatio+"%"}}),w&&c.default.createElement(y,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",right:0,left:0}}),B.base64&&c.default.createElement(m,(0,l.default)({src:B.base64},j)),B.tracedSVG&&c.default.createElement(m,(0,l.default)({src:B.tracedSVG},j)),this.state.isVisible&&c.default.createElement("picture",null,B.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:B.srcSetWebp,sizes:B.sizes}),c.default.createElement(m,{alt:a,title:t,sizes:B.sizes,src:B.src,crossOrigin:this.props.crossOrigin,srcSet:B.srcSet,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},B))}}))}if(h){var R=h,I=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},n);return"inherit"===n.display&&delete I.display,c.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:I,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},w&&c.default.createElement(y,{title:t,style:{backgroundColor:w,width:R.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:R.height}}),R.base64&&c.default.createElement(m,(0,l.default)({src:R.base64},j)),R.tracedSVG&&c.default.createElement(m,(0,l.default)({src:R.tracedSVG},j)),this.state.isVisible&&c.default.createElement("picture",null,R.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),c.default.createElement(m,{alt:a,title:t,width:R.width,height:R.height,sizes:R.sizes,src:R.src,crossOrigin:this.props.crossOrigin,srcSet:R.srcSet,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:R.width,height:R.height},R))}}))}return null},t}(c.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var y=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),E=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});b.propTypes={resolutions:y,sizes:E,fixed:y,fluid:E,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var w=b;t.default=w}}]);
//# sourceMappingURL=component---src-pages-about-js-e2410e2971171e494508.js.map