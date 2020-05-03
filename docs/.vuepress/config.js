const { description } = require('../../package');
const { resolve } = require('path');

module.exports = {
    title: 'Fms-components',
    description: description,
    base: '/fms-components/',
    port: '3000',
    dest: './website',
    enhanceAppFiles:
        process.env.NODE_ENV === 'development'
            ? resolve(__dirname, 'enhanceApp-development.js')
            : resolve(__dirname, 'enhanceApp-production.js'),
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
                    children: ['/components/modal', '/components/tree-select'],
                },
            ],
        },
        smoothScroll: true, // 启用页面滚动效果
    },
    plugins: ['@vuepress/back-to-top', ['@yemu419/demo-code']],
};
