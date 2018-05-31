import fs from 'fs'
import path from 'path'
import { BannerPlugin } from 'webpack'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import EslintFriendlyFormatter from 'eslint-friendly-formatter'
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin'

const resolve = (...dir) => path.resolve(__dirname, ...dir)

// 从 src/ 直接拷贝到 dist/
const getCopyCfg = (base, ext) => ({
    from: `${base}/**/*${ext}`,
    to: `[path]/[name]${ext}`,
})
const PROJECT_CFG = 'project.config.json'
const copyCfgArr = [
    // 图片
    { from: 'assets/', to: 'assets/' },
    // 模板
    { from: 'templates/', to: 'templates/' },
    // 配置
    { from: 'app/app.json', to: 'app.json' },
    // 开发者工具配置
    { from: `../${PROJECT_CFG}`, to: PROJECT_CFG },
    // pages
    getCopyCfg('pages', '.wxml'),
    getCopyCfg('pages', '.json'),
    // comps
    getCopyCfg('comps', '.wxml'),
    getCopyCfg('comps', '.json'),
]

/**
 * 通过 base 下的中间路径，生成类似
 * pages/index/index
 * comps/tua-image/tua-image
 * 这样的路径作为 name，以便后续生成对应路径上的 js 和 wxss
 * @param {String} base 基础路径 pages|comps
 * @return {Object} 对象形式的 entry
 */
const getEntryByDirPath = (base) => fs.readdirSync(resolve('src', base))
    .map((dirPath) => ({
        dirPath,
        url: resolve('src', base, dirPath),
    }))
    .filter(({ url }) => fs.statSync(url).isDirectory())
    .reduce((acc, { dirPath, url }) => ({
        ...acc,
        [`${base}/${dirPath}/${dirPath}`]: resolve(url, dirPath),
    }), {})

export default ({ isDev }) => ({
    mode: isDev ? 'development' : 'production',
    stats: isDev ? 'none' : {
        colors: true,
        chunks: false,
        modules: false,
        children: false,
        chunkModules: false
    },
    devtool: isDev && 'source-map',
    entry: {
        // app 应用入口
        app: './src/app/app',
        // pages 页面入口
        ...getEntryByDirPath('pages'),
    },
    output: {
        filename: `[name].js`,
        path: resolve('dist'),
        globalObject: 'global',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [resolve('src')],
                options: {
                    formatter: EslintFriendlyFormatter,
                },
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src')],
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                }),
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'less-loader',
                    ],
                }),
            },
            {
                test: /\.s[ac]ss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'sass-loader',
                    ],
                }),
            },
            {
                test: /\.styl$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'stylus-loader',
                    ],
                }),
            },
        ],
    },
    resolve: {
        alias: {
            '@': resolve('src'),
            '@const': resolve('src/scripts/const'),
            '@utils': resolve('src/scripts/utils'),
        },
    },
    watchOptions: {
        aggregateTimeout: 300,
    },
    // 提取公共依赖
    optimization: {
        runtimeChunk: {
            name: 'chunks/runtime'
        },
        splitChunks: {
            cacheGroups: {
                // npm 包
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'chunks/vendors',
                    chunks: 'all',
                },
                // 项目公共函数
                scripts: {
                    test: /[\\/]src[\\/]scripts[\\/]/,
                    name: 'chunks/scripts',
                    chunks: 'all',
                    // 强制提取
                    enforce: true,
                },
            },
        },
    },
    plugins: [
        new CopyWebpackPlugin(copyCfgArr, {
            context: resolve('src'),
        }),
        new ExtractTextPlugin('[name].wxss'),
        new FriendlyErrorsWebpackPlugin(),
        new BannerPlugin({
            raw: true,
            // 因为无法通过 html 的 script 标签插入
            // 所以只好在入口文件 app.js 前插入公共依赖
            banner: `require('./chunks/runtime');require('./chunks/vendors');require('./chunks/scripts');`,
            include: 'app.js',
        })
    ],
})