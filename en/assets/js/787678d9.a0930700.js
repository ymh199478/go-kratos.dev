(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{116:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return b}));var n=t(0),i=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=i.a.createContext({}),s=function(e){var r=i.a.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=s(e.components);return i.a.createElement(d.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},m=i.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=n,b=p["".concat(o,".").concat(m)]||p[m]||u[m]||a;return t?i.a.createElement(b,c(c({ref:r},d),{},{components:t})):i.a.createElement(b,c({ref:r},d))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var d=2;d<a;d++)o[d]=t[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},92:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return s}));var n=t(3),i=t(7),a=(t(0),t(116)),o={id:"middleware",title:"Middleware"},c={unversionedId:"component/middleware",id:"component/middleware",isDocsHomePage:!1,title:"Middleware",description:"Kratos has a series of built-in middleware to deal with common purpose such as logging or metrics. You could also implement Middleware interface to develop your custom middleware to process common business such as the user authentication etc.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/component/middleware.md",slug:"/component/middleware",permalink:"/en/docs/component/middleware",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/component/middleware.md",version:"current",sidebar:"docs",previous:{title:"Registry",permalink:"/en/docs/component/registry"},next:{title:"Transport",permalink:"/en/docs/component/transport"}},l=[{value:"Built-in Middleware",id:"built-in-middleware",children:[{value:"logging",id:"logging",children:[]},{value:"metrics",id:"metrics",children:[]},{value:"recovery",id:"recovery",children:[]},{value:"status",id:"status",children:[]},{value:"tracing",id:"tracing",children:[]},{value:"validate",id:"validate",children:[]}]},{value:"Usage",id:"usage",children:[]},{value:"Custom Middleware",id:"custom-middleware",children:[]}],d={toc:l};function s(e){var r=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},d,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Kratos has a series of built-in middleware to deal with common purpose such as logging or metrics. You could also implement Middleware interface to develop your custom middleware to process common business such as the user authentication etc."),Object(a.b)("h2",{id:"built-in-middleware"},"Built-in Middleware"),Object(a.b)("p",null,"Their codes are located in ",Object(a.b)("inlineCode",{parentName:"p"},"middleware")," directory."),Object(a.b)("h3",{id:"logging"},"logging"),Object(a.b)("p",null,"In ",Object(a.b)("inlineCode",{parentName:"p"},"middleware/logging"),", this middleware is for logging the request."),Object(a.b)("h3",{id:"metrics"},"metrics"),Object(a.b)("p",null,"In ",Object(a.b)("inlineCode",{parentName:"p"},"middleware/metrics"),", this middleware is for enabling metric."),Object(a.b)("h3",{id:"recovery"},"recovery"),Object(a.b)("p",null,"In ",Object(a.b)("inlineCode",{parentName:"p"},"middleware/recovery"),"\uff0c, this middleware is for panic recovery."),Object(a.b)("h3",{id:"status"},"status"),Object(a.b)("p",null,"In ",Object(a.b)("inlineCode",{parentName:"p"},"middleware/status"),", this middleware is for transformation of gRPC error."),Object(a.b)("h3",{id:"tracing"},"tracing"),Object(a.b)("p",null,"In ",Object(a.b)("inlineCode",{parentName:"p"},"middleware/tracing"),", this middleware is for enabling trace."),Object(a.b)("h3",{id:"validate"},"validate"),Object(a.b)("p",null,"In ",Object(a.b)("inlineCode",{parentName:"p"},"middleware/validate"),", this middleware is for parameter validation."),Object(a.b)("h3",{id:""}),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("p",null,"Register it with ",Object(a.b)("inlineCode",{parentName:"p"},"ServerOption")," in ",Object(a.b)("inlineCode",{parentName:"p"},"NewGRPCServer")," or ",Object(a.b)("inlineCode",{parentName:"p"},"NewHTTPServer"),"."),Object(a.b)("p",null,"For example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-go"},"// http\n// define opts\nvar opts = http.NewServer([]http.ServerOption{\n    http.Middleware(\n        middleware.Chain(\n            recovery.Recovery(), // put middlewares into Chain\n            tracing.Server(),\n            logging.Server(),\n        ),\n    ),\n})\n// create server\nhttp.NewServer(opts...)\n\n\n\n//grpc\nvar opts = []grpc.ServerOption{\n        grpc.Middleware(\n            middleware.Chain(\n                recovery.Recovery(),  // put middlewares into Chain\n                status.Server(),\n                tracing.Server(),\n                logging.Server(),\n            ),\n        ),\n    }\n// create server\ngrpc.NewServer(opts...)\n\n")),Object(a.b)("h2",{id:"custom-middleware"},"Custom Middleware"),Object(a.b)("p",null,"Implement ",Object(a.b)("inlineCode",{parentName:"p"},"Middleware")," interface."),Object(a.b)("p",null,"(TBD)"))}s.isMDXComponent=!0}}]);