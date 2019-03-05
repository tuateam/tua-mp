(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{50:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"单文件组件版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单文件组件版本","aria-hidden":"true"}},[t._v("#")]),t._v(" 单文件组件版本")]),t._v(" "),a("h2",{attrs:{id:"一键生成项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一键生成项目","aria-hidden":"true"}},[t._v("#")]),t._v(" 一键生成项目")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.shields.io/badge/webpack-%5E4.12.1-green.svg",alt:"webpack version"}}),t._v(" "),a("img",{attrs:{src:"https://img.shields.io/badge/vue--loader-%5E15.2.4-green.svg",alt:"vue-loader version"}})]),t._v(" "),a("p",[t._v("推荐使用 "),a("a",{attrs:{href:"https://github.com/vuejs/vue-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-cli"),a("OutboundLink")],1),t._v(" 或 "),a("router-link",{attrs:{to:"/tua-mp-cli/"}},[t._v("@tua-mp/cli")]),t._v(" 一键生成项目：")],1),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ vue init tua-mp-templates/vue my-project\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR")]),t._v("\n$ tuamp init tua-mp-templates/vue my-project\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("注意：微信开发者工具打开的是项目"),a("strong",[t._v("根目录")])])]),t._v(" "),a("h2",{attrs:{id:"文件结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件结构","aria-hidden":"true"}},[t._v("#")]),t._v(" 文件结构")]),t._v(" "),a("h3",{attrs:{id:"src-目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#src-目录","aria-hidden":"true"}},[t._v("#")]),t._v(" src/ 目录")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".\n├── app\n│   ├── App.vue\n│   ├── app.js\n│   └── app.json\n├── assets\n│   └── vue-logo.png\n├── comps\n│   ├── Filter\n│   │   ├── Filter.vue\n│   │   └── index.js\n│   └── Todo\n│       ├── Todo.vue\n│       └── index.js\n├── pages\n│   ├── index\n│   │   ├── Index.vue\n│   │   └── index.js\n│   └── todos\n│       ├── Todos.vue\n│       └── index.js\n├── scripts\n│   ├── const\n│   │   ├── README.md\n│   │   └── index.js\n│   └── utils\n│       ├── README.md\n│       ├── event.js\n│       ├── format.js\n│       ├── index.js\n│       └── log.js\n├── styles\n│   ├── global.styl\n│   ├── todomvc-app-css.css\n│   └── todomvc-common-base.css\n└── templates\n    └── info.wxml\n")])])]),a("ul",[a("li",[a("code",[t._v("app/")]),t._v(": 应用入口")]),t._v(" "),a("li",[a("code",[t._v("assets/")]),t._v(": 资源文件，比如图片")]),t._v(" "),a("li",[a("code",[t._v("comps/")]),t._v(": 全局组件")]),t._v(" "),a("li",[a("code",[t._v("pages/")]),t._v(": 页面\n"),a("ul",[a("li",[a("code",[t._v("pages/index/comps/")]),t._v(": 属于 index 的页面级组件")]),t._v(" "),a("li",[a("code",[t._v("pages/todos/comps/")]),t._v(": 属于 todos 的页面级组件")])])]),t._v(" "),a("li",[a("code",[t._v("scripts/")]),t._v(": 公用代码")]),t._v(" "),a("li",[a("code",[t._v("scripts/const")]),t._v(": 常量（已配置别名 @const）")]),t._v(" "),a("li",[a("code",[t._v("scripts/utils")]),t._v(": \b辅助函数（已配置别名 @utils）")]),t._v(" "),a("li",[a("code",[t._v("styles/")]),t._v(": 公用样式")]),t._v(" "),a("li",[a("code",[t._v("templates/")]),t._v(": 模板")])]),t._v(" "),a("h2",{attrs:{id:"单文件组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单文件组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 单文件组件")]),t._v(" "),a("p",[t._v("注意到现在咱们的 "),a("code",[t._v("pages/")]),t._v(" 和 "),a("code",[t._v("comps/")]),t._v(" 下的组件已经用上了单文件组件。")]),t._v(" "),a("p",[t._v("但在这个例子中的单文件组件和一般 web 端的单文件组件"),a("strong",[t._v("有所不同")]),t._v("：")]),t._v(" "),a("p",[t._v("1.页面的模板需要添加 "),a("code",[t._v('lang="wxml"')])]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("wxml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 小程序模板代码 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("2.原本的 "),a("code",[t._v(".json")]),t._v(" 文件变成了 "),a("code",[t._v("<config>")])]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 默认 json --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('\n{\n    "navigationBarTitleText": "tua-mp todos",\n    "usingComponents": {\n        "Todo": "./comps/Todo/Todo",\n        "Filter": "/comps/Filter/Filter"\n    }\n}\n'),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- yaml 或者 yml 也支持 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("config")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("yaml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\nnavigationBarTitleText: 'tua-mp todos'\nusingComponents:\n    Todo: ./comps/Todo/Todo\n    Filter: /comps/Filter/Filter\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("3."),a("code",[t._v("app.json")]),t._v(" 是独立文件")]),t._v(" "),a("p",[t._v("注意 "),a("code",[t._v("app.json")]),t._v(" 文件中的内容并没有像组件一样放到 "),a("code",[t._v("App.vue")]),t._v(" 的 "),a("code",[t._v("<config>")]),t._v(" 中。")]),t._v(" "),a("p",[t._v("理论上这部分的配置应该放在 "),a("code",[t._v("app.js")]),t._v(" 的 "),a("code",[t._v("export")]),t._v(" 中比较好，但因为暂时还没对于 vue-loader 进行修改，所以这部分先保持为 "),a("code",[t._v("app.json")]),t._v("。")])])},[],!1,null,null,null);s.default=n.exports}}]);