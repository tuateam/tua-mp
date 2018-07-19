(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{158:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),a("p",[t._v("推荐使用 "),a("a",{attrs:{href:"https://github.com/vuejs/vue-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-cli"),a("OutboundLink")],1),t._v(" 一键生成项目：")]),t._m(3),a("p",[t._v("接下来让咱们一步步地将原项目代码迁移到过渡版本中。")]),t._m(4),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),a("p",[t._v("如果你是 Vue 重度用户，建议直接看下一章"),a("router-link",{attrs:{to:"./vue-app.html"}},[t._v("《单文件组件版本》")]),t._v("，下一章中我们将借助 vue-loader v15+ 实现单文件组件即 "),a("code",[t._v(".vue")]),t._v(" 文件的支持。")],1)]),t._m(5),t._m(6),a("p",[t._v("文件结构和一般的 web 项目差不多：")]),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),a("p",[t._v("以上那些特性的支持是因为底层调用了 webpack 将源代码转换成小程序的代码。由于 webpack 配置太繁琐了，因此受到 "),a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-service",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vue/cli-service"),a("OutboundLink")],1),t._v(" 的启发，这部分配置也用 "),a("a",{attrs:{href:"https://github.com/tuateam/tua-mp-service",target:"_blank",rel:"noopener noreferrer"}},[t._v("@tua-mp/service"),a("OutboundLink")],1),t._v(" 进行了封装。")]),a("p",[t._v("这个配置文件提供了一个入口让开发者可以对于 webpack 进行二次配置。")]),t._m(13),a("blockquote",[a("p",[t._v("更多用法可参阅 "),a("router-link",{attrs:{to:"./../tua-mp-service/"}},[t._v("@tua-mp/service")])],1)]),t._m(14),t._m(15),a("p",[t._v("例如在 package.json 中添加以下内容：")]),t._m(16),t._m(17),a("p",[t._v("然后就可以这样调用：")]),t._m(18)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"过渡版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#过渡版本","aria-hidden":"true"}},[this._v("#")]),this._v(" 过渡版本")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"一键生成项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一键生成项目","aria-hidden":"true"}},[this._v("#")]),this._v(" 一键生成项目")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://img.shields.io/badge/webpack-%5E4.8.1-green.svg",alt:"webpack version"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ vue init tua-mp-templates/simple my-project\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("blockquote",[a("p",[t._v("之所以叫【过渡版本】，是因为在这个版本中仅仅增加了 babel 支持、npm 支持、预编译器支持等等。每个页面和组件仍然是由4个文件组成。（"),a("code",[t._v(".json")]),t._v("、"),a("code",[t._v(".wxml")]),t._v("、"),a("code",[t._v(".js")]),t._v("、"),a("code",[t._v(".wxss/.css/.less/.sass/.scss/.styl")]),t._v("）")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"文件结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件结构","aria-hidden":"true"}},[this._v("#")]),this._v(" 文件结构")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"根目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#根目录","aria-hidden":"true"}},[this._v("#")]),this._v(" 根目录")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v(".\n├── README.md\n├── dist/\n├── package.json\n├── tua-mp.config.js\n├── project.config.json\n└── src/\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("src/: 源码")]),a("li",[t._v("dist/: 打包后代码")]),a("li",[t._v("tua-mp.config.js: "),a("code",[t._v("@tua-mp/service")]),t._v(" 的配置文件")]),a("li",[t._v("project.config.json: 小程序开发工具配置文件，会被拷到 "),a("code",[t._v("dist/")]),t._v(" 下")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"src-目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#src-目录","aria-hidden":"true"}},[this._v("#")]),this._v(" src/ 目录")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v(".\n├── app\n│   ├── app.js\n│   ├── app.json\n│   └── app.scss\n├── assets\n│   └── vue-logo.png\n├── comps\n│   └── todo\n│       ├── todo.js\n│       ├── todo.json\n│       ├── todo.less\n│       └── todo.wxml\n├── pages\n│   └── index\n│       ├── index.js\n│       ├── index.json\n│       ├── index.less\n│       └── index.wxml\n├── scripts\n│   ├── const\n│   │   ├── README.md\n│   │   └── index.js\n│   └── utils\n│       ├── README.md\n│       ├── event.js\n│       ├── format.js\n│       ├── index.js\n│       └── log.js\n├── styles\n│   ├── global.styl\n│   ├── todomvc-app-css.css\n│   └── todomvc-common-base.css\n└── templates\n    └── info.wxml\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("app/: 应用入口")]),a("li",[t._v("assets/: 资源文件，比如图片")]),a("li",[t._v("comps/: 组件")]),a("li",[t._v("pages/: 页面")]),a("li",[t._v("scripts: 公用代码")]),a("li",[t._v("scripts/const: 常量（已配置别名 @const）")]),a("li",[t._v("scripts/utils: 辅助函数（已配置别名 @utils）")]),a("li",[t._v("styles/: 公用样式")]),a("li",[t._v("templates/: 模板")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"tua-mp-config-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tua-mp-config-js","aria-hidden":"true"}},[this._v("#")]),this._v(" tua-mp.config.js")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// tua-mp.config.js")]),t._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 简单配置")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 这部分的配置最终会通过 webpack-merge 和已有的 webpack 配置合并。")]),t._v("\n    configureWebpack"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        plugins"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("MyAwesomeWebpackPlugin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 链式配置")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 这个函数会传入一个 webpack-chain 对象，这样你就可以更加细粒度地对内部配置进行任意自定义修改。")]),t._v("\n    chainWebpack"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// app 应用入口")]),t._v("\n        config"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("entry")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'app'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// 因为默认入口是 ./src/app/index.js")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("clear")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("add")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'./src/app/app'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("end")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"开发与发布"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发与发布","aria-hidden":"true"}},[this._v("#")]),this._v(" 开发与发布")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("安装了 "),a("code",[t._v("@tua-mp/service")]),t._v(" 之后，会在你的项目中的 "),a("code",[t._v("node_modules/.bin/")]),t._v(" 下安装脚本 "),a("code",[t._v("tua-mp-service")]),t._v("，所以你可以使用 "),a("code",[t._v("npm scripts")]),t._v(" 或直接在命令行中调用 "),a("code",[t._v("./node_modules/.bin/tua-mp-service")]),t._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("serve")]),this._v(" 即 "),s("code",[this._v("webpack --mode=development -w")])]),s("li",[s("code",[this._v("build")]),this._v(" 即 "),s("code",[this._v("webpack --mode=production")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"start"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"tua-mp-service serve"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"build"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"tua-mp-service build"')]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# 开发")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" start\n"),a("span",{attrs:{class:"token comment"}},[t._v("# OR")]),t._v("\nyarn start\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 打包")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n"),a("span",{attrs:{class:"token comment"}},[t._v("# OR")]),t._v("\nyarn build\n")])])])}],!1,null,null,null);s.default=e.exports}}]);