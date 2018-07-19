(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{154:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件")]),a("p",[a("code",[t._v("tua-mp")]),t._v(" 的组件系统是在小程序原生自定义组件上的二次封装。")]),a("h2",{attrs:{id:"props-适配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#props-适配","aria-hidden":"true"}},[t._v("#")]),t._v(" props 适配")]),a("p",[a("code",[t._v("tua-mp")]),t._v(" 对于 Vue 风格的 props 进行了兼容，即开发者编写 props，框架底层会转换成原生的 properties。")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 简单用法")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("TuaComp")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    props"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'size'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'myMessage'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 对象语法，提供校验")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("TuaComp")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    props"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// 检测类型")]),t._v("\n        height"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Number"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// 检测类型 + 其他验证")]),t._v("\n        age"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            type"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Number"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            required"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// <- 注意小程序中没有这个概念")]),t._v("\n            validator"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" value "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" value "),a("span",{attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),a("p",[t._v("注意小程序中没有 required 这个概念")])]),a("h2",{attrs:{id:"通过事件向父级组件发送消息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过事件向父级组件发送消息","aria-hidden":"true"}},[t._v("#")]),t._v(" 通过事件向父级组件发送消息")]),a("p",[t._v("小程序原生使用的是 "),a("code",[t._v("triggerEvent")]),t._v(" 这个方法来触发事件。"),a("code",[t._v("tua-mp")]),t._v(" 提供了 "),a("code",[t._v("$emit")]),t._v(" 方法，包装原生的 "),a("code",[t._v("triggerEvent")]),t._v(" 方法。")]),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 子组件 --\x3e")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v("\n    "),a("span",{attrs:{class:"token attr-name"}},[t._v("value")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{ todo.title }}"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),a("span",{attrs:{class:"token attr-name"}},[t._v("data-id")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{ todo.id }}"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),a("span",{attrs:{class:"token attr-name"}},[t._v("bindblur")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onBlurTodo"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 子组件")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("TuaComp")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    methods"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("onBlurTodo")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myEventOption "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 触发事件的选项")]),t._v("\n\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// 直接传递事件 e 即可，底层会取出并合并常用的 detail 和 dataset 上的值")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("$emit")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'onBlurTodo'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" myEventOption"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("因为一般数据会放在事件的 "),a("code",[t._v("detail")]),t._v(" 属性，或者是 "),a("code",[t._v("currentTarget.dataset")]),t._v(" 中，每次手动获取十分麻烦。所以 "),a("code",[t._v("$emit")]),t._v(" 方法会自动取出并合并其中的值。")]),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 父组件 --\x3e")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Todo")]),t._v("\n    "),a("span",{attrs:{class:"token attr-name"}},[t._v("...")]),t._v("\n    "),a("span",{attrs:{class:"token attr-name"}},[a("span",{attrs:{class:"token namespace"}},[t._v("bind:")]),t._v("onBlurTodo")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onBlurTodo"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 父组件")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("TuaPage")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    methods"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("onBlurTodo")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" id"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("getValFromEvent")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),a("p",[t._v("如果想要传递一些没有绑定在模板中的其他数据，那么需要将其放在 "),a("code",[t._v("detail")]),t._v(" 属性中， "),a("code",[t._v("{ detail: { yourValue: 'yourValue' } }")]),t._v("。（因为默认会获取 "),a("code",[t._v("detail")]),t._v(" 和 "),a("code",[t._v("currentTarget.dataset")]),t._v(" 中的数据）")])])])}],!1,null,null,null);s.default=o.exports}}]);