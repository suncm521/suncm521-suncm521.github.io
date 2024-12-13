import { hasGlobalComponent } from "E:/myblog/suncm521.github.io/node_modules/@vuepress/helper/lib/client/index.js";

import FontIcon from "E:/myblog/suncm521.github.io/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import Badge from "E:/myblog/suncm521.github.io/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "E:/myblog/suncm521.github.io/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "E:/myblog/suncm521.github.io/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
