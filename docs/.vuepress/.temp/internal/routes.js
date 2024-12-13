export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myblog/suncm521.github.io/docs/.vuepress/.temp/pages/index.html.js"), meta: {"d":1730789696000,"e":"<p>This is a blog home page.</p>\n","r":{"minutes":0.15,"words":46},"t":"首页","i":"home","y":"a"} }],
  ["/base/network/cherry.html", { loader: () => import(/* webpackChunkName: "base_network_cherry.html" */"E:/myblog/suncm521.github.io/docs/.vuepress/.temp/pages/base/network/cherry.html.js"), meta: {"d":1641686400000,"l":"2022年1月9日","c":["樱桃"],"g":["红","小","圆"],"e":"\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n","r":{"minutes":0.11,"words":33},"t":"樱桃","i":"pen-to-square","y":"a"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/myblog/suncm521.github.io/docs/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/base/network/", { loader: () => import(/* webpackChunkName: "base_network_index.html" */"E:/myblog/suncm521.github.io/docs/.vuepress/.temp/pages/base/network/index.html.js"), meta: {"t":"Network"} }],
  ["/base/", { loader: () => import(/* webpackChunkName: "base_index.html" */"E:/myblog/suncm521.github.io/docs/.vuepress/.temp/pages/base/index.html.js"), meta: {"t":"Base"} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"E:/myblog/suncm521.github.io/docs/.vuepress/.temp/pages/category/index.html.js"), meta: {"t":"分类","I":false} }],
  ["/category/%E6%A8%B1%E6%A1%83/", { loader: () => import(/* webpackChunkName: "category_樱桃_index.html" */"E:/myblog/suncm521.github.io/docs/.vuepress/.temp/pages/category/樱桃/index.html.js"), meta: {"t":"樱桃 分类","I":false} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"E:/myblog/suncm521.github.io/docs/.vuepress/.temp/pages/tag/index.html.js"), meta: {"t":"标签","I":false} }],
  ["/tag/%E7%BA%A2/", { loader: () => import(/* webpackChunkName: "tag_红_index.html" */"E:/myblog/suncm521.github.io/docs/.vuepress/.temp/pages/tag/红/index.html.js"), meta: {"t":"标签: 红","I":false} }],
  ["/tag/%E5%B0%8F/", { loader: () => import(/* webpackChunkName: "tag_小_index.html" */"E:/myblog/suncm521.github.io/docs/.vuepress/.temp/pages/tag/小/index.html.js"), meta: {"t":"标签: 小","I":false} }],
  ["/tag/%E5%9C%86/", { loader: () => import(/* webpackChunkName: "tag_圆_index.html" */"E:/myblog/suncm521.github.io/docs/.vuepress/.temp/pages/tag/圆/index.html.js"), meta: {"t":"标签: 圆","I":false} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"E:/myblog/suncm521.github.io/docs/.vuepress/.temp/pages/article/index.html.js"), meta: {"t":"文章","I":false} }],
  ["/star/", { loader: () => import(/* webpackChunkName: "star_index.html" */"E:/myblog/suncm521.github.io/docs/.vuepress/.temp/pages/star/index.html.js"), meta: {"t":"星标","I":false} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"E:/myblog/suncm521.github.io/docs/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"t":"时间轴","I":false} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
