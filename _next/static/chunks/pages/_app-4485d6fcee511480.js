(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(3847)}])},1484:function(e,t,r){"use strict";r.d(t,{Z:function(){return j}});var n=r(5893),o=r(1664),a=r.n(o),l=r(1163),c=r(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},u=c.createContext&&c.createContext(i),s=function(){return s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},s.apply(this,arguments)},f=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function d(e){return e&&e.map((function(e,t){return c.createElement(e.tag,s({key:t},e.attr),d(e.child))}))}function p(e){return function(t){return c.createElement(v,s({attr:s({},e.attr)},t),d(e.child))}}function v(e){var t=function(t){var r,n=e.attr,o=e.size,a=e.title,l=f(e,["attr","size","title"]),i=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),c.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,l,{className:r,style:s(s({color:e.color||t.color},t.style),e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),a&&c.createElement("title",null,a),e.children)};return void 0!==u?c.createElement(u.Consumer,null,(function(e){return t(e)})):t(i)}function h(e){return p({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",clipRule:"evenodd"}}]})(e)}function y(e){return p({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"}}]})(e)}function m(e){return p({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",clipRule:"evenodd"}}]})(e)}function g(e){return p({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",clipRule:"evenodd"}}]})(e)}var b=function(e){var t=e.icon,r=e.styles,o=e.name,a=e.isActive;return(0,n.jsxs)("div",{className:"sidebar-icon group text-2xl ".concat(r," ").concat(a&&"bg-green-600 text-white"),children:[t,(0,n.jsxs)("span",{className:"stidebar-tooltip group-hover:scale-100",children:[o," \ud83d\udca1"]})]})},j=function(){var e=[{name:"Home",icon:(0,n.jsx)(y,{}),styles:"",path:"/"},{name:"chatting",icon:(0,n.jsx)(h,{}),styles:"",path:"/chatting"},{name:"Plus",icon:(0,n.jsx)(g,{}),styles:"",path:"/plus"},{name:"meetings",icon:(0,n.jsx)(m,{}),styles:"",path:"/meetings"}],t=(0,l.useRouter)();return(0,n.jsx)("div",{className:"fixed top-0 left-0 flex flex-col w-16 h-screen m-0 shadow-lg text-secondary bg-primary ",children:e.map((function(e,r){return(0,n.jsx)(a(),{href:"/Tailwindcss"+e.path,children:(0,n.jsx)("a",{children:(0,n.jsx)(b,{icon:e.icon,styles:e.styles,name:e.name,isActive:t.asPath.replace("/Tailwindcss","")===e.path})})},r)}))})}},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],l=!0,c=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(i){c=!0,o=i}finally{try{l||null==r.return||r.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,l=(a=r(7294))&&a.__esModule?a:{default:a},c=r(1003),i=r(880),u=r(9246);function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var f={};function d(e,t,r,n){if(e&&c.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[t+"%"+r+(o?"%"+o:"")]=!0}}var p=l.default.forwardRef((function(e,t){var r,n=e.legacyBehavior,a=void 0===n?!0!==Boolean(!1):n,p=e.href,v=e.as,h=e.children,y=e.prefetch,m=e.passHref,g=e.replace,b=e.shallow,j=e.scroll,w=e.locale,x=e.onClick,O=e.onMouseEnter,E=s(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);r=h,a&&"string"===typeof r&&(r=l.default.createElement("a",null,r));var C,M=!1!==y,k=i.useRouter(),_=l.default.useMemo((function(){var e=o(c.resolveHref(k,p,!0),2),t=e[0],r=e[1];return{href:t,as:v?c.resolveHref(k,v):r||t}}),[k,p,v]),P=_.href,R=_.as,S=l.default.useRef(P),A=l.default.useRef(R);a&&(C=l.default.Children.only(r));var N=a?C&&"object"===typeof C&&C.ref:t,I=o(u.useIntersection({rootMargin:"200px"}),3),L=I[0],z=I[1],H=I[2],T=l.default.useCallback((function(e){A.current===R&&S.current===P||(H(),A.current=R,S.current=P),L(e),N&&("function"===typeof N?N(e):"object"===typeof N&&(N.current=e))}),[R,N,P,H,L]);l.default.useEffect((function(){var e=z&&M&&c.isLocalURL(P),t="undefined"!==typeof w?w:k&&k.locale,r=f[P+"%"+R+(t?"%"+t:"")];e&&!r&&d(k,P,R,{locale:t})}),[R,P,z,w,M,k]);var B={ref:T,onClick:function(e){a||"function"!==typeof x||x(e),a&&C.props&&"function"===typeof C.props.onClick&&C.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,l,i){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:i,scroll:l}))}(e,k,P,R,g,b,j,w)},onMouseEnter:function(e){a||"function"!==typeof O||O(e),a&&C.props&&"function"===typeof C.props.onMouseEnter&&C.props.onMouseEnter(e),c.isLocalURL(P)&&d(k,P,R,{priority:!0})}};if(!a||m||"a"===C.type&&!("href"in C.props)){var U="undefined"!==typeof w?w:k&&k.locale,V=k&&k.isLocaleDomain&&c.getDomainLocale(R,U,k&&k.locales,k&&k.domainLocales);B.href=V||c.addBasePath(c.addLocale(R,U,k&&k.defaultLocale))}return a?l.default.cloneElement(C,B):l.default.createElement("a",Object.assign({},E,B),r)}));t.default=p,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],l=!0,c=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(i){c=!0,o=i}finally{try{l||null==r.return||r.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!c,s=a.useRef(),f=o(a.useState(!1),2),d=f[0],p=f[1],v=o(a.useState(t?t.current:null),2),h=v[0],y=v[1],m=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=u.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=i.get(n):(t=i.get(r),u.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,l=n.elements;return l.set(e,t),a.observe(e),function(){if(l.delete(e),a.unobserve(e),0===l.size){a.disconnect(),i.delete(o);var t=u.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&u.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:h,rootMargin:r}))}),[n,h,r,d]),g=a.useCallback((function(){p(!1)}),[]);return a.useEffect((function(){if(!c&&!d){var e=l.requestIdleCallback((function(){return p(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&y(t.current)}),[t]),[m,d,g]};var a=r(7294),l=r(4686),c="undefined"!==typeof IntersectionObserver;var i=new Map,u=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},3847:function(e,t,r){"use strict";r.r(t);var n=r(5893),o=(r(6774),r(1484)),a=r(9008),l=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){c(e,t,r[t])}))}return e}t.default=function(e){var t=e.Component,r=e.pageProps;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l(),{children:[(0,n.jsx)("title",{children:"Tailwindcss \uc5f0\uc2b5"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)(o.Z,{}),(0,n.jsx)("div",{className:"flex flex-col min-h-screen ml-16 bg-discordGray-600",children:(0,n.jsx)(t,i({},r))})]})}},6774:function(){},9008:function(e,t,r){e.exports=r(3121)},1664:function(e,t,r){e.exports=r(1551)},1163:function(e,t,r){e.exports=r(880)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6840),t(880)}));var r=e.O();_N_E=r}]);