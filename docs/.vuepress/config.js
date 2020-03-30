module.exports = {
  title: "heimxd重学前端",
  description: "heimxd的前端学习笔记",
  themeConfig: {
    repo: "heimxd/blog",
    lastUpdated: "Last Updated",
    nav: [
      { text: "博客", link: "/blog/" },
      { text: "面试题", link: "/interview/" }
    ],
    sidebar: {
      "/blog/": [
        {
          title: "浏览器原理",
          collapsable: false,
          children: ["从输入URL到页面加载的过程"]
        },
        {
          title: "HTML",
          collapsable: false,
          children: []
        },
        {
          title: "CSS",
          collapsable: false,
          children: []
        },
        {
          title: "JavaScript",
          collapsable: false,
          children: ["变量声明总结"]
        },
        {
          title: "工程化",
          collapsable: false,
          children: ["前端测试", "前端规范"]
        },
        {
          title: "计算机基础",
          collapsable: false,
          children: []
        },
        {
          title: "其他",
          collapsable: false,
          children: []
        }
      ],
      "/interview/": [
        {
          title: "手写源码系列",
          collapsable: false,
          children: []
        },
        {
          title: "其他",
          collapsable: false,
          children: []
        }
      ]
    }
  }
};
