(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{182:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var r=a(0),n=a.n(r),i=a(58),o=a.n(i);a.d(t,"a",function(){return o.a});a(184);var s=n.a.createContext({});function l(e){var t=e.staticQueryData,a=e.data,r=e.query,i=e.render,o=a?a.data:t[r]&&t[r].data;return n.a.createElement(n.a.Fragment,null,o&&i(o),!o&&n.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,a=e.query,r=e.render,i=e.children;return n.a.createElement(s.Consumer,null,function(e){return n.a.createElement(l,{data:t,query:a,render:r||i,staticQueryData:e})})}},183:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d});var r=a(191),n=a.n(r),i=a(193),o=a.n(i);a(194);o.a.baseFontSize="14px",o.a.headerWeight=600,o.a.boldWeight=500,o.a.bodyWeight=400,o.a.bodyFontFamily=o.a.headerFontFamily=["-apple-system","BlinkMacSystemFont","Helvetica Neue","PingFang SC","Microsoft YaHei","Source Han Sans SC","serif"],o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var s=new n.a(o.a);var l=s.rhythm,d=s.scale},184:function(e,t,a){var r;e.exports=(r=a(187))&&r.default||r},185:function(e,t,a){"use strict";a(23);var r=a(0),n=a.n(r),i=a(182),o=a(183);var s=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e,t=this.props,a=t.location,r=t.title,s=t.children;return e="/"===a.pathname?n.a.createElement("h1",{style:Object.assign({},Object(o.b)(1),{marginBottom:Object(o.a)(1.5),marginTop:0})},n.a.createElement(i.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)):n.a.createElement("h3",{style:{marginTop:0}},n.a.createElement(i.a,{style:{boxShadow:"none",textDecoration:"none"},to:"/"},r)),n.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(o.a)(25),padding:Object(o.a)(1.5)+" "+Object(o.a)(.75)}},n.a.createElement("header",null,e),n.a.createElement("main",null,s))},r}(n.a.Component);t.a=s},186:function(e,t,a){"use strict";var r=a(189),n=a(0),i=a.n(n),o=a(195),s=a.n(o);function l(e){var t=e.description,a=e.lang,n=e.meta,o=e.keywords,l=e.title,d=r.data.site,c=t||d.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+d.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:l},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:d.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:c}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(n)})}l.defaultProps={lang:"en",meta:[],keywords:[],description:""},t.a=l},187:function(e,t,a){"use strict";a.r(t);a(23);var r=a(0),n=a.n(r),i=a(88);t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},188:function(e,t,a){"use strict";a(190);var r=a(198),n=a(0),i=a.n(n),o=a(182),s=a(199),l=a.n(s),d=a(183);var c="2345978561";t.a=function(){return i.a.createElement(o.b,{query:c,render:function(e){var t=e.site.siteMetadata,a=t.author,r=t.social;return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(d.a)(2.5)}},i.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),i.a.createElement("p",null,"Made by ",i.a.createElement("strong",null,a)," who makes stuff.",i.a.createElement("br",null)," Find me on"," ",i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/"+r.twitter},"Twitter")," ",i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/"+r.github},"Github")," ",i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.zhihu.com/people/"+r.zhihu},"Zhihu")," ",i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://instagram.com/"+r.ins},"Instagram")," ",i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://weibo.com/"+r.weibo},"Weibo")))},data:r})}},189:function(e){e.exports={data:{site:{siteMetadata:{title:"lqs469",description:"lqs469 Blog",author:"lqs469"}}}}},190:function(e,t,a){"use strict";a(197)("fixed",function(e){return function(){return e(this,"tt","","")}})},197:function(e,t,a){var r=a(5),n=a(8),i=a(36),o=/"/g,s=function(e,t,a,r){var n=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},198:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAEDBAL/xAAYAQACAwAAAAAAAAAAAAAAAAAABAECA//aAAwDAQACEAMQAAAByXZdjClw1Uo6C8CD/8QAGxAAAgIDAQAAAAAAAAAAAAAAAQIAERASISL/2gAIAQEAAQUCd/a7YrqyxAIRxVFf/8QAGhEAAgMBAQAAAAAAAAAAAAAAABEBAhIhMf/aAAgBAwEBPwGc58EPpa0s/8QAFxEAAwEAAAAAAAAAAAAAAAAAABARIf/aAAgBAgEBPwHa4f/EABcQAAMBAAAAAAAAAAAAAAAAAAARMDH/2gAIAQEABj8CHsP/xAAaEAEAAgMBAAAAAAAAAAAAAAABABEhMUEQ/9oACAEBAAE/IVuHJeWoSo2eMrMCuQQ2QINt+T//2gAMAwEAAgADAAAAEDQIQP/EABgRAAMBAQAAAAAAAAAAAAAAAAABESFR/9oACAEDAQE/EE7HCilhlLT/xAAYEQEBAQEBAAAAAAAAAAAAAAABABEhMf/aAAgBAgEBPxBT65bIJ2Bl/8QAGxABAQEAAwEBAAAAAAAAAAAAAREAITFBYYH/2gAIAQEAAT8QpUOldJRHgSfccMy3sK7iJAHW4g37knJdXCGeOZSVu//Z",width:50,height:50,src:"/static/0257130576977213eca55ce954451317/9b664/portrait-pic.jpg",srcSet:"/static/0257130576977213eca55ce954451317/9b664/portrait-pic.jpg 1x,\n/static/0257130576977213eca55ce954451317/06a10/portrait-pic.jpg 1.5x,\n/static/0257130576977213eca55ce954451317/f1b5a/portrait-pic.jpg 2x"}}},site:{siteMetadata:{author:"lqs469",social:{twitter:"liqinshuo",github:"lqs469",weibo:"lqs469",ins:"lqs469",zhihu:"li-qin-shuo"}}}}}},199:function(e,t,a){"use strict";a(28),a(24),a(12),a(64),a(125),a(190);var r=a(15);t.__esModule=!0,t.default=void 0;var n,i=r(a(60)),o=r(a(65)),s=r(a(126)),l=r(a(127)),d=r(a(0)),c=r(a(61)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},A=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},f=Object.create({}),g=function(e){var t=u(e),a=A(t);return f[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,m=h&&window.IntersectionObserver,b=new WeakMap;function y(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),d.default.createElement("source",{media:n,srcSet:a,sizes:i}))})}function E(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function S(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function v(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var j=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},B=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)}).join("")+"<img "+d+o+s+a+r+t+i+n+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=d.default.createElement(R,(0,l.default)({src:t},n));return a.length>1?d.default.createElement("picture",null,r(a),i):i},R=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,o=e.onLoad,c=e.onError,u=e.loading,A=e.draggable,f=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:n},f,{onLoad:o,onError:c,ref:t,loading:u,draggable:A,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});R.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var x=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!p&&m&&!t.critical&&!a.seenBefore;var r=t.critical||h&&(p||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=A(t),f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,A=void 0===c?{}:c,f=e.placeholderClassName,g=e.fluid,p=e.fixed,h=e.backgroundColor,m=e.durationFadeIn,b=e.Tag,E=e.itemProp,w=e.loading,j=e.draggable,x=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,l.default)({opacity:x?1:0,transition:L?"opacity "+m+"ms":"none"},s),C="boolean"==typeof h?"lightgray":h,Q={transitionDelay:m+"ms"},M=(0,l.default)({opacity:this.state.imgLoaded?0:1},L&&Q,s,A),N={title:t,alt:this.state.isVisible?"":a,style:M,className:f};if(g){var k=g,V=k[0];return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),C&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&Q)}),V.base64&&d.default.createElement(I,{src:V.base64,spreadProps:N,imageVariants:k,generateSources:v}),V.tracedSVG&&d.default.createElement(I,{src:V.tracedSVG,spreadProps:N,imageVariants:k,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,y(k),d.default.createElement(R,{alt:a,title:t,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:j})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:B((0,l.default)({alt:a,title:t,loading:w},V,{imageVariants:k}))}}))}if(p){var z=p,T=z[0],P=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},i);return"inherit"===i.display&&delete P.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:P,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},C&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:C,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},L&&Q)}),T.base64&&d.default.createElement(I,{src:T.base64,spreadProps:N,imageVariants:z,generateSources:v}),T.tracedSVG&&d.default.createElement(I,{src:T.tracedSVG,spreadProps:N,imageVariants:z,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,y(z),d.default.createElement(R,{alt:a,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:j})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:B((0,l.default)({alt:a,title:t,loading:w},T,{imageVariants:z}))}}))}return null},t}(d.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var L=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),O=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});x.propTypes={resolutions:L,sizes:O,fixed:c.default.oneOfType([L,c.default.arrayOf(L)]),fluid:c.default.oneOfType([O,c.default.arrayOf(O)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var C=x;t.default=C}}]);
//# sourceMappingURL=2-24d8130b2e3c852be9be.js.map