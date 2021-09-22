module.exports = {
  title: '@lixianbin1/toolbox',
  description: '一个用于集成常用函数或不常用的函数插件库',
  base:'/toolBox/',
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/zh/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: 'toolbox',
      description: '集成常用函数或不常用的函数插件库'
    },
    '/': {
      lang: 'en-US',
      title: 'toolbox',
      description: 'A integrate common functions or unusual function plug-in Libraries'
    }
  },
  themeConfig: {
    logo: '/img/logo01.png',
    displayAllHeaders: true, //展开所有
    locales: { //多语言
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        algolia: {},
        nav: [
          { text: '指南', link: '/zh/guide/' },
          { text: 'GitHub', link: 'https://github.com/lixianbin1/toolBox' }, 
        ],
        sidebar:[
            {
              title: '介绍',   // 必要的
              collapsable: false, // 折叠
              children: [
                ['/zh/guide/','toolbox 是什么?'],
                ['/zh/guide/Started','快速上手'],
                ['/zh/guide/Reference','方法'],
              ]
            },
        ],
        lastUpdated: '最后更新时间',
      },
      '/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},
        nav: [
          { text: 'Guide', link: '/guide/' },
          { text: 'GitHub', link: 'https://github.com/lixianbin1/toolBox' }, 
        ],
        sidebar:[
            {
              title: 'Introduce',   // 必要的
              collapsable: false, // 折叠
              children: [
                ['/guide/','What is imgzoom-li?'],
                ['/guide/Started','Get Started'],
                ['/guide/Reference','Method'],
              ]
            },
        ],
        lastUpdated: 'Last Updated',
      },
    }
  },
}