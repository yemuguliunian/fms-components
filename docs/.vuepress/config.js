const uslug = require('uslug');
const { description } = require('../../package');

module.exports = (options, context) => ({
    title: 'Fms-components',
    description: description,
    base: '/fms-components/',
    port: '3000',
    dest: './website',
    themeConfig: {
        repo: 'yemuguliunian/fms-components',
        sidebarDepth: 2,
        nav: [{ text: '组件', link: '/components/installation' }],
        sidebar: {
            '/component': [
                {
                    title: '开发指南',
                    collapsable: false,
                    sidebarDepth: 0,
                    children: ['/components/installation'],
                },
                {
                    title: '组件',
                    collapsable: false,
                    sidebarDepth: 0,
                    children: [
                        '/components/date-picker',
                        '/components/modal',
                        '/components/table',
                        '/components/tree-select',
                    ],
                },
            ],
        },
        smoothScroll: true, // 启用页面滚动效果
    },
    plugins: ['@vuepress/back-to-top', ['@yemu419/demo-code']],
    alias: {
        '@yemu419/fms-components': '../../components',
    },
    markdown: {
        anchor: {
            permalink: true,
            permalinkBefore: true,
            slugify: s => uslug(s, { lower: false }),
        },
    },
    chainWebpack: (config, isServer) => {
        config.module
            .rule('js')
            .use('babel-loader')
            .tap(options =>
                Object.assign(options, {
                    plugins: [
                        [
                            'import',
                            {
                                libraryName: 'ant-design-vue',
                                libraryDirectory: 'es',
                                style: 'css',
                            },
                        ],
                    ],
                }),
            );
    },
});
