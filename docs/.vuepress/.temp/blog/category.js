export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"樱桃":{"path":"/category/%E6%A8%B1%E6%A1%83/","indexes":[0]}}}},"tag":{"/":{"path":"/tag/","map":{"红":{"path":"/tag/%E7%BA%A2/","indexes":[0]},"小":{"path":"/tag/%E5%B0%8F/","indexes":[0]},"圆":{"path":"/tag/%E5%9C%86/","indexes":[0]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

