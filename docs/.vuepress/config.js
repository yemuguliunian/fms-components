module.exports = {
    title: 'Fenms-components',
    description: 'fenms components',
    base: '/fenms-components/',
    port: '3000',
    dest: './website',
    themeConfig: {
        repo: 'yemuguliunian/fenms-components',
        sidebarDepth: 2,
        nav: [{ text: '组件', link: '/components/installation' }],
        sidebar: {
            '/component': [
                {
                    title: '开发指南',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: ['/components/installation'],
                },
                {
                    title: '组件',
                    collapsable: false,
                    sidebarDepth: 0,
                    children: ['/components/modal'],
                },
            ],
        },
        smoothScroll: true, // 启用页面滚动效果
    },
    plugins: ['@vuepress/back-to-top', ['@yemu419/demo-code']],
};
