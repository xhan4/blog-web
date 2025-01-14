import CodeDemo from "D:/workprofile/blog-web/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.68_markdown-it@14.1.0_sass-embedded@1.83.2_vuepress@2.0.0_w2f7xlhmx3k4m56xafa7moor5i/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "D:/workprofile/blog-web/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.68_markdown-it@14.1.0_sass-embedded@1.83.2_vuepress@2.0.0_w2f7xlhmx3k4m56xafa7moor5i/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
