import { hasGlobalComponent } from "D:/workprofile/blog-web/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.70_vuepress@2.0.0-rc.19_@vuepress+bundler-vite@2.0.0-rc.19_@types+n_ljtpvicvwvkqo3gp5go5xownvq/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "D:/workprofile/blog-web/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.68_sass-embedded@1.83.2_vuepress@2.0.0-rc.19_@vuepress+bu_qhr4jmi3py37xactjkb7jabc2q/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "D:/workprofile/blog-web/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.68_sass-embedded@1.83.2_vuepress@2.0.0-rc.19_@vuepress+bu_qhr4jmi3py37xactjkb7jabc2q/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "D:/workprofile/blog-web/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.70_vuepress@2.0.0-rc.19_@vuepress+bundler-vite@2.0.0-rc.19_@types+n_ljtpvicvwvkqo3gp5go5xownvq/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
