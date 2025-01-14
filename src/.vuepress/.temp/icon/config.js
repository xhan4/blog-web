import { hasGlobalComponent } from "D:/workprofile/blog-web/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.70_vuepress@2.0.0-rc.19_@vuepress+bundler-vite@2.0.0-rc.19_@types+n_ljtpvicvwvkqo3gp5go5xownvq/node_modules/@vuepress/helper/lib/client/index.js";
import { useScriptTag } from "D:/workprofile/blog-web/node_modules/.pnpm/@vueuse+core@12.4.0/node_modules/@vueuse/core/index.mjs";
import { h } from "vue";
import { VPIcon } from "D:/workprofile/blog-web/node_modules/.pnpm/@vuepress+plugin-icon@2.0.0-rc.70_markdown-it@14.1.0_vuepress@2.0.0-rc.19_@vuepress+bundler-v_ed6ecqmcomvgzeo56ed2abvcma/node_modules/@vuepress/plugin-icon/lib/client/index.js"

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VPIcon")) {
      app.component(
        "VPIcon",
        (props) =>
          h(VPIcon, {
            type: "fontawesome",
            prefix: "",
            ...props,
          })
      )
    }
  },
  setup: () => {
    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/all.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

  },
}
