(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{153:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),u=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),b=u(n),p=i,g=b["".concat(c,".").concat(p)]||b[p]||d[p]||a;return n?r.a.createElement(g,l(l({ref:t},o),{},{components:n})):r.a.createElement(g,l({ref:t},o))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,c[1]=l;for(var o=2;o<a;o++)c[o]=n[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},198:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/gutter_icons-0041d916c7c27f35d387a77b0bbb55c0.png"},199:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/gutter_disabled-a969740e2b9528bcdbdd5b0c614d6655.png"},200:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/gutter_run-de6404c7cc87cac6abbb0df4b6270edb.png"},201:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/duplicated_test_string_spec-ccda51db0b69c31a45fb1ca638f83340.png"},202:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/run_context_menu-574bc3d39bc3447d433eefb3c03e85ed.png"},203:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/intention_bang-3503aa10cbd1b39f492d1402aa4d4535.png"},204:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/intentions_surround-ba5d03db5a4b4caf0249d1cbfbce10ec.png"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var i=n(3),r=n(7),a=(n(0),n(153)),c={id:"index",title:"IntelliJ Plugin",slug:"intellij-plugin.html",sidebar_label:"Introduction"},l={unversionedId:"intellij/index",id:"intellij/index",isDocsHomePage:!1,title:"IntelliJ Plugin",description:"Kotest offers an IntelliJ plugin available at the jetbrains plugin marketplace (search from within IntelliJ).",source:"@site/docs/intellij/index.md",slug:"/intellij/intellij-plugin.html",permalink:"/docs/intellij/intellij-plugin.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/intellij/index.md",version:"current",sidebar_label:"Introduction",sidebar:"intellij",next:{title:"Test Explorer",permalink:"/docs/intellij/intellij-test-explorer.html"}},s=[{value:"Gutter Icons",id:"gutter-icons",children:[]},{value:"Running Tests",id:"running-tests",children:[]},{value:"Duplicated Test Highlighting",id:"duplicated-test-highlighting",children:[]},{value:"Context Menu Run / Debug",id:"context-menu-run--debug",children:[]},{value:"Intentions",id:"intentions",children:[]}],o={rightToc:s};function u(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},o,c,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Kotest offers an ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/kotest/kotest-intellij-plugin"}),"IntelliJ plugin")," available at the jetbrains plugin ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://plugins.jetbrains.com/plugin/14080-kotest"}),"marketplace")," (search from within IntelliJ)."),Object(a.b)("p",null,"This plugin provides run icons for each test, a tool window for test navigation, duplicated test highlighting, assertion intentions, and more."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"The Intellij plugin requires Kotest 4.2 or higher and will not run common tests of a multiplatform project"))),Object(a.b)("h2",{id:"gutter-icons"},"Gutter Icons"),Object(a.b)("p",null,"The plugin provides gutter run icons for specs, top level tests, and nested tests."),Object(a.b)("p",null,Object(a.b)("img",{alt:"gutter_icon_picture",src:n(198).default})),Object(a.b)("p",null,"Any tests disabled via a bang or by ",Object(a.b)("em",{parentName:"p"},"xfunctions")," such as ",Object(a.b)("inlineCode",{parentName:"p"},"xdescribe"),", will have a disabled test icon in the gutter."),Object(a.b)("p",null,Object(a.b)("img",{alt:"gutter_icon_picture",src:n(199).default})),Object(a.b)("h2",{id:"running-tests"},"Running Tests"),Object(a.b)("p",null,"If you execute a spec from the gutter icon, then all tests in that spec will be executed.\nIf you execute a test, then that test and all nested tests will be executed."),Object(a.b)("p",null,Object(a.b)("img",{alt:"gutter_icon_picture",src:n(200).default})),Object(a.b)("h2",{id:"duplicated-test-highlighting"},"Duplicated Test Highlighting"),Object(a.b)("p",null,"You cannot have two tests with the same name. The plugin will highlight any duplicated test names as errors."),Object(a.b)("p",null,Object(a.b)("img",{alt:"duplicated_test_picture",src:n(201).default})),Object(a.b)("h2",{id:"context-menu-run--debug"},"Context Menu Run / Debug"),Object(a.b)("p",null,"Right clicking on a package will allow you to run, debug or run with coverage all the tests inside that package."),Object(a.b)("p",null,Object(a.b)("img",{alt:"run_context_menu_picture",src:n(202).default})),Object(a.b)("h2",{id:"intentions"},"Intentions"),Object(a.b)("p",null,"This plugin has some basic intentions. For example, you can quickly mark a test as disabled."),Object(a.b)("p",null,Object(a.b)("img",{alt:"gutter_icon_picture",src:n(203).default})),Object(a.b)("p",null,"Or you can highlight some text and mark it as should throw, or surround with a soft assertion block."),Object(a.b)("p",null,Object(a.b)("img",{alt:"gutter_icon_picture",src:n(204).default})))}u.isMDXComponent=!0}}]);