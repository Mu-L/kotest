(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{153:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),s=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=s.a.createContext({}),u=function(e){var t=s.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},h=s.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,m=p["".concat(o,".").concat(h)]||p[h]||b[h]||r;return n?s.a.createElement(m,c(c({ref:t},l),{},{components:n})):s.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(3),s=n(7),r=(n(0),n(153)),o={id:"index",title:"Assertions",slug:"assertions.html"},c={unversionedId:"assertions/index",id:"assertions/index",isDocsHomePage:!1,title:"Assertions",description:"Kotest is split into several subprojects which can be used independently. One of these subprojects is",source:"@site/docs/assertions/index.md",slug:"/assertions/assertions.html",permalink:"/docs/assertions/assertions.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/assertions/index.md",version:"current",sidebar:"assertions",next:{title:"Matchers",permalink:"/docs/assertions/matchers.html"}},i=[{value:"Multitude of Matchers",id:"multitude-of-matchers",children:[]},{value:"Clues",id:"clues",children:[]},{value:"Inspectors",id:"inspectors",children:[{value:"Custom Matchers",id:"custom-matchers",children:[]}]}],l={rightToc:i};function u(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Kotest is split into several subprojects which can be used independently. One of these subprojects is\nthe comprehensive assertion / matchers support. These can be used with the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/framework/framework.html"}),"Kotest test framework"),",\nor with another test framework like JUnit or Spock."),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://search.maven.org/search?q=kotest"}),Object(r.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/maven-central/v/io.kotest/kotest-assertions-core-jvm.svg?label=release",alt:"version badge"}))),"\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://oss.sonatype.org/content/repositories/snapshots/io/kotest/"}),Object(r.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/nexus/s/https/oss.sonatype.org/io.kotest/kotest-assertions-core-jvm.svg?label=snapshot",alt:"version badge"})))),Object(r.b)("p",null,"The core functionality of the assertion modules are functions that test state. Kotest calls these types of state\nassertion functions ",Object(r.b)("em",{parentName:"p"},"matchers"),". There are ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/assertions/matchers.html"}),"core")," matchers and matchers for third party libraries."),Object(r.b)("p",null,"There are also many other utilities for writing tests, such as ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/assertions/exceptions.html"}),"testing for exceptions"),", functions to\nhelp test ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/assertions/non-deterministic-testing.html"}),"non-determistic code"),", ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/assertions/inspectors.html"}),"inspectors")," for collections, and\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/assertions/soft-assertions.html"}),"soft assertions")," to group assertions."),Object(r.b)("h2",{id:"multitude-of-matchers"},"Multitude of Matchers"),Object(r.b)("p",null,"For example, to assert that a variable has an expected value, we can use the ",Object(r.b)("inlineCode",{parentName:"p"},"shouldBe")," function."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'name shouldBe "sam"\n')),Object(r.b)("p",null,"There are general purpose matchers, such as ",Object(r.b)("inlineCode",{parentName:"p"},"shouldBe")," as well as matchers for many other specific scenarios,\nsuch as ",Object(r.b)("inlineCode",{parentName:"p"},"str.shouldHaveLength(10)")," for testing the length of a string, and ",Object(r.b)("inlineCode",{parentName:"p"},"file.shouldBeDirectory()")," which test\nthat a particular file points to a directory. They come in both infix and regular variants."),Object(r.b)("p",null,"Assertions can generally be chained, for example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'"substring".shouldContain("str")\n           .shouldBeLowerCase()\n\nmyImageFile.shouldHaveExtension(".jpg")\n           .shouldStartWith("https")\n')),Object(r.b)("p",null,"There are over 350 matchers spread across multiple modules. Read about all the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/assertions/matchers.html"}),"matchers here"),"."),Object(r.b)("h2",{id:"clues"},"Clues"),Object(r.b)("p",null,"Sometimes a failed assertion does not contain enough information to know exactly what went wrong."),Object(r.b)("p",null,"For example,"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),"user.name shouldNotBe null\n")),Object(r.b)("p",null,"If this failed, you would simply get:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"<null> should not equal <null>\n")),Object(r.b)("p",null,"Which isn't particularly helpful. We can add extra context to failure messages through the use of ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/assertions/clues.html"}),"clues"),"."),Object(r.b)("h2",{id:"inspectors"},"Inspectors"),Object(r.b)("p",null,"Inspectors allow us to test elements in a collection, and assert the quantity of elements that should be\nexpected to pass (all, none, exactly k and so on). For example"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'mylist.forExactly(3) {\n    it.city shouldBe "Chicago"\n}\n')),Object(r.b)("p",null,"Read about ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/assertions/inspectors.html"}),"inspectors here")),Object(r.b)("h3",{id:"custom-matchers"},"Custom Matchers"),Object(r.b)("p",null,"It is easy to add your own matchers. Simply extend the ",Object(r.b)("inlineCode",{parentName:"p"},"Matcher<T>")," interface, where T is the type you wish to match against.\nThe Matcher interface specifies one method, ",Object(r.b)("inlineCode",{parentName:"p"},"test"),", which you must implement returning an instance of Result.\nThe Result contains a boolean to indicate if the test passed or failed, and two messages."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),"interface Matcher<in T> {\n   fun test(value: T): MatcherResult\n}\n")),Object(r.b)("p",null,"Matcher is ",Object(r.b)("em",{parentName:"p"},"contravariant")," so a matcher for Number can be used to test an Int, for example."),Object(r.b)("p",null,'The first message should always be in the positive, ie, indicate what "should" happen, and the second message\nis used when the matcher is used with ',Object(r.b)("em",{parentName:"p"},"not"),"."),Object(r.b)("p",null,'For example to create a matcher that checks that a string contains the substring "foo", we can do the following:'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'fun containFoo() = object : Matcher<String> {\n  override fun test(value: String) = MatcherResult(value.contains("foo"), "String $value should include foo", "String $value should not include foo")\n}\n')),Object(r.b)("p",null,"This matcher could then be used as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'"hello foo" should containFoo()\n"hello bar" shouldNot containFoo()\n')),Object(r.b)("p",null,"And we should then create an extension function version, like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),"fun String.shouldContainFoo() = this should containFoo()\nfun String.shouldNotContainFoo() = this shouldNot containFoo()\n")))}u.isMDXComponent=!0}}]);