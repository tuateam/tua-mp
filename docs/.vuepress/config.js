module.exports = {
    base: '/tua-mp/',
    locales: {
        '/': {
            title: 'tua-mp',
            description: '🖖一款类 Vue 的渐进式小程序框架'
        }
    },
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }],
    ],
    serviceWorker: true,
    themeConfig: {
        repo: 'tuateam/tua-mp',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: [
            {
                text: '快速上手',
                link: '/quick-start/',
            },
            {
                text: '构建工具',
                link: '/tua-mp-service/',
            },
            {
                text: '命令行工具',
                link: '/tua-mp-cli/',
            },
            {
                text: '生态系统',
                items: [
                    { text: '本地存储', link: '/tua-storage/' },
                    // { text: 'api 配置（待开源）', link: '/tua-api-wx' },
                ],
            },
        ],
        sidebar: {
            '/quick-start/': [
                {
                    title: '快速上手',
                    collapsable: false,
                    children: [
                        'installation',
                        '',
                        'instance',
                        'computed',
                        'components',
                        'simple-app',
                        'vue-app',
                    ],
                },
            ],
        },
    },
}
