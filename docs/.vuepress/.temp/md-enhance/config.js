import CodeDemo from "E:/myblog/suncm521.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "E:/myblog/suncm521.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "E:/myblog/suncm521.github.io/node_modules/@mdit/plugin-spoiler/spoiler.css";
import "E:/myblog/suncm521.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
