(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4186)}])},9749:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return o}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,r=e.unoptimized,l=void 0!==r&&r,c=e.priority,s=void 0!==c&&c,h=e.loading,g=e.lazyRoot,j=void 0===g?null:g,N=e.lazyBoundary,E=void 0===N?"200px":N,k=e.className,_=e.quality,P=e.width,R=e.height,L=e.style,C=e.objectFit,q=e.objectPosition,M=e.onLoadingComplete,D=e.placeholder,W=void 0===D?"empty":D,T=e.blurDataURL,B=y(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),U=u.useContext(p.ImageConfigContext),V=u.useMemo((function(){var e=v||U||f.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return b({},e,{allSizes:t,deviceSizes:n})}),[U]),F=B,H=n?"responsive":"intrinsic";"layout"in F&&(F.layout&&(H=F.layout),delete F.layout);var G=O;if("loader"in F){if(F.loader){var J=F.loader;G=function(e){e.config;var t=y(e,["config"]);return J(t)}}delete F.loader}var X="";if(function(e){return"object"===typeof e&&(S(e)||function(e){return void 0!==e.src}(e))}(t)){var $=S(t)?t.default:t;if(!$.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify($)));if(T=T||$.blurDataURL,X=$.src,(!H||"fill"!==H)&&(R=R||$.height,P=P||$.width,!$.height||!$.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify($)))}t="string"===typeof t?t:X;var Q=z(P),K=z(R),Y=z(_),Z=!s&&("lazy"===h||"undefined"===typeof h);(t.startsWith("data:")||t.startsWith("blob:"))&&(l=!0,Z=!1);x.has(t)&&(Z=!1);var ee,te=o(u.useState(!1),2),ne=te[0],re=te[1],ie=o(m.useIntersection({rootRef:j,rootMargin:E,disabled:!Z}),3),oe=ie[0],ae=ie[1],le=ie[2],ce=!Z||ae,se={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ue={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},de=!1,fe={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:C,objectPosition:q};0;0;var me=Object.assign({},L,"raw"===H?{}:fe),pe="blur"!==W||ne?{}:{filter:"blur(20px)",backgroundSize:C||"cover",backgroundImage:'url("'.concat(T,'")'),backgroundPosition:q||"0% 0%"};if("fill"===H)se.display="block",se.position="absolute",se.top=0,se.left=0,se.bottom=0,se.right=0;else if("undefined"!==typeof Q&&"undefined"!==typeof K){var he=K/Q,ge=isNaN(he)?"100%":"".concat(100*he,"%");"responsive"===H?(se.display="block",se.position="relative",de=!0,ue.paddingTop=ge):"intrinsic"===H?(se.display="inline-block",se.position="relative",se.maxWidth="100%",de=!0,ue.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(Q,"%27%20height=%27").concat(K,"%27/%3e")):"fixed"===H&&(se.display="inline-block",se.position="relative",se.width=Q,se.height=K)}else 0;var be={src:w,srcSet:void 0,sizes:void 0};ce&&(be=A({config:V,src:t,unoptimized:l,layout:H,width:Q,quality:Y,sizes:n,loader:G}));var ye=t;0;var ve,xe="imagesrcset",we="imagesizes";xe="imageSrcSet",we="imageSizes";var je=(i(ve={},xe,be.srcSet),i(ve,we,be.sizes),ve),Se=u.default.useLayoutEffect,Ae=u.useRef(M),ze=u.useRef(t);u.useEffect((function(){Ae.current=M}),[M]),Se((function(){ze.current!==t&&(le(),ze.current=t)}),[le,t]);var Oe=b({isLazy:Z,imgAttributes:be,heightInt:K,widthInt:Q,qualityInt:Y,layout:H,className:k,imgStyle:me,blurStyle:pe,loading:h,config:V,unoptimized:l,placeholder:W,loader:G,srcString:ye,onLoadingCompleteRef:Ae,setBlurComplete:re,setIntersection:oe,isVisible:ce},F);return u.default.createElement(u.default.Fragment,null,"raw"===H?u.default.createElement(I,Object.assign({},Oe)):u.default.createElement("span",{style:se},de?u.default.createElement("span",{style:ue},ee?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,u.default.createElement(I,Object.assign({},Oe))),s?u.default.createElement(d.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+be.src+be.srcSet+be.sizes,rel:"preload",as:"image",href:be.srcSet?void 0:be.src},je))):null)};var c,s,u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),d=(c=n(3121))&&c.__esModule?c:{default:c},f=n(139),m=n(9246),p=n(8730),h=(n(670),n(2700));function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){g(e,t,r[t])}))},r=1;r<arguments.length;r++)n(r);return e}function y(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}s={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/Tailwindcss/",loader:"akamai",experimentalLayoutRaw:!1};var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/Tailwindcss/",loader:"akamai",experimentalLayoutRaw:!1},x=new Set,w=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var j=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(h.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t.path).concat(E(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(E(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(E(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function S(e){return void 0!==e.default}function A(e){var t=e.config,n=e.src,r=e.unoptimized,i=e.layout,o=e.width,l=e.quality,c=e.sizes,s=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n,r){var i=e.deviceSizes,o=e.allSizes;if(r&&("fill"===n||"responsive"===n||"raw"===n)){for(var l,c=/(^|\s)(1?\d?\d)vw/g,s=[];l=c.exec(r);l)s.push(parseInt(l[2]));if(s.length){var u,d=.01*(u=Math).min.apply(u,a(s));return{widths:o.filter((function(e){return e>=i[0]*d})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return o.find((function(t){return t>=e}))||o[o.length-1]})))),kind:"x"}}(t,o,i,c),d=u.widths,f=u.kind,m=d.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:d.map((function(e,r){return"".concat(s({config:t,src:n,quality:l,width:e})," ").concat("w"===f?e:r+1).concat(f)})).join(", "),src:s({config:t,src:n,quality:l,width:d[m]})}}function z(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function O(e){var t,n=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",r=j.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function N(e,t,n,r,i,o){e&&e.src!==w&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(x.add(t),"blur"===r&&o(!0),null===i||void 0===i?void 0:i.current)){var n=e.naturalWidth,a=e.naturalHeight;i.current({naturalWidth:n,naturalHeight:a})}})))}var I=function(e){var t=e.imgAttributes,n=e.heightInt,r=e.widthInt,i=e.qualityInt,o=e.layout,a=e.className,l=e.imgStyle,c=e.blurStyle,s=e.isLazy,d=e.placeholder,f=e.loading,m=e.srcString,p=e.config,h=e.unoptimized,g=e.loader,v=e.onLoadingCompleteRef,x=e.setBlurComplete,w=e.setIntersection,j=e.onLoad,S=e.onError,z=(e.isVisible,y(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible"]));return u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},z,t,"raw"===o?{height:n,width:r}:{},{decoding:"async","data-nimg":o,className:a,style:b({},l,c),ref:u.useCallback((function(e){w(e),(null===e||void 0===e?void 0:e.complete)&&N(e,m,0,d,v,x)}),[w,m,o,d,v,x]),onLoad:function(e){N(e.currentTarget,m,0,d,v,x),j&&j(e)},onError:function(e){"blur"===d&&x(!0),S&&S(e)}})),(s||"blur"===d)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},z,A({config:p,src:m,unoptimized:h,layout:o,width:r,quality:i,sizes:t.sizes,loader:g}),"raw"===o?{height:n,width:r}:{},{decoding:"async","data-nimg":o,style:l,className:a,loading:f||"lazy"}))))};function E(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!l,u=o.useRef(),d=i(o.useState(!1),2),f=d[0],m=d[1],p=i(o.useState(t?t.current:null),2),h=p[0],g=p[1],b=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||f||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=s.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=c.get(r):(t=c.get(n),s.push(n));if(t)return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(n,t={id:n,observer:o,elements:i}),t}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),c.delete(i);var t=s.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&s.splice(t,1)}}}(e,(function(e){return e&&m(e)}),{root:h,rootMargin:n}))}),[r,h,n,f]),y=o.useCallback((function(){m(!1)}),[]);return o.useEffect((function(){if(!l&&!f){var e=a.requestIdleCallback((function(){return m(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),o.useEffect((function(){t&&g(t.current)}),[t]),[b,f,y]};var o=n(7294),a=n(4686),l="undefined"!==typeof IntersectionObserver;var c=new Map,s=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},4186:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(9008),o=n.n(i),a=n(5675),l=n.n(a);t.default=function(){return(0,r.jsxs)("div",{className:"flex min-h-screen flex-col items-center justify-center py-2",children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:"Create Next App"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("main",{className:"flex w-full flex-1 flex-col items-center justify-center px-20 text-center",children:[(0,r.jsxs)("h1",{className:"text-6xl font-bold",children:["Welcome to"," ",(0,r.jsx)("a",{className:"text-blue-600",href:"https://nextjs.org",children:"Next.js!"})]}),(0,r.jsxs)("p",{className:"mt-3 text-2xl",children:["Get started by editing"," ",(0,r.jsx)("code",{className:"rounded-md bg-gray-100 p-3 font-mono text-lg",children:"pages/index.tsx"})]}),(0,r.jsxs)("div",{className:"mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full",children:[(0,r.jsxs)("a",{href:"https://nextjs.org/docs",className:"mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600",children:[(0,r.jsx)("h3",{className:"text-2xl font-bold",children:"Documentation \u2192"}),(0,r.jsx)("p",{className:"mt-4 text-xl",children:"Find in-depth information about Next.js features and its API."})]}),(0,r.jsxs)("a",{href:"https://nextjs.org/learn",className:"mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600",children:[(0,r.jsx)("h3",{className:"text-2xl font-bold",children:"Learn \u2192"}),(0,r.jsx)("p",{className:"mt-4 text-xl",children:"Learn about Next.js in an interactive course with quizzes!"})]}),(0,r.jsxs)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples",className:"mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600",children:[(0,r.jsx)("h3",{className:"text-2xl font-bold",children:"Examples \u2192"}),(0,r.jsx)("p",{className:"mt-4 text-xl",children:"Discover and deploy boilerplate example Next.js projects."})]}),(0,r.jsxs)("a",{href:"https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:"mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600",children:[(0,r.jsx)("h3",{className:"text-2xl font-bold",children:"Deploy \u2192"}),(0,r.jsx)("p",{className:"mt-4 text-xl",children:"Instantly deploy your Next.js site to a public URL with Vercel."})]})]})]}),(0,r.jsx)("footer",{className:"flex h-24 w-full items-center justify-center border-t",children:(0,r.jsxs)("a",{className:"flex items-center justify-center gap-2",href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,r.jsx)(l(),{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})]})})]})}},9008:function(e,t,n){e.exports=n(3121)},5675:function(e,t,n){e.exports=n(9749)}},function(e){e.O(0,[774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);