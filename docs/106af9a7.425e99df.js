(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{153:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,b=p["".concat(a,".").concat(f)]||p[f]||d[f]||s;return n?o.a.createElement(b,i(i({ref:t},l),{},{components:n})):o.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),s=(n(0),n(153)),a={id:"dsl",title:"Kotest DSL",slug:"dsl.html",sidebar_label:"Kotest DSL"},i={unversionedId:"framework/dsl",id:"framework/dsl",isDocsHomePage:!1,title:"Kotest DSL",description:"This page discusses in detail the Kotest DSL that is used to build tests. You do not need to read this page",source:"@site/docs/framework/dsl.md",slug:"/framework/dsl.html",permalink:"/docs/framework/dsl.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/framework/dsl.md",version:"current",sidebar_label:"Kotest DSL"},c=[{value:"Tests",id:"tests",children:[]},{value:"Spec",id:"spec",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"This page discusses in detail the Kotest DSL that is used to build tests. You do not need to read this page\nto effectively use Kotest, but it may be of interest to users who are implementing extensions or\nraising PRs on Kotest itself or anyone who is just curious how things work under the hood."),Object(s.b)("h3",{id:"tests"},"Tests"),Object(s.b)("p",null,"In Kotest a test is essentially just a function ",Object(s.b)("inlineCode",{parentName:"p"},"TestContext -> Unit"),". This function will contain assertions\n(",Object(s.b)("em",{parentName:"p"},"matchers")," in Kotest nomenclature) which will throw an exception if the assertion fails. These exceptions are\nthen intercepted by the framework and used to mark a test as ",Object(s.b)("em",{parentName:"p"},"failed")," or ",Object(s.b)("em",{parentName:"p"},"errored")," (depending on the exception class)."),Object(s.b)("h3",{id:"spec"},"Spec"),Object(s.b)("p",null,"The basic unit of currency in Kotest is the spec. A spec is the top most container of tests and is essentially\njust a class that extends one of the spec styles (FunSpec, DescribeSpec and so on)."),Object(s.b)("p",null,"Each spec contains tests which are referred to as ",Object(s.b)("em",{parentName:"p"},"root tests")," (rooted in reference to the spec). These root\ntests are registered"))}u.isMDXComponent=!0}}]);