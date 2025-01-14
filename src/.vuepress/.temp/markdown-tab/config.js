import { CodeTabs } from "D:/workprofile/blog-web/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.70_markdown-it@14.1.0_vuepress@2.0.0-rc.19_@vuepress+b_55p5g26gs3frgb7v6ceeklkihq/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/workprofile/blog-web/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.70_markdown-it@14.1.0_vuepress@2.0.0-rc.19_@vuepress+b_55p5g26gs3frgb7v6ceeklkihq/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/workprofile/blog-web/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.70_markdown-it@14.1.0_vuepress@2.0.0-rc.19_@vuepress+b_55p5g26gs3frgb7v6ceeklkihq/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
