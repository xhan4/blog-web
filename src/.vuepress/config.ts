import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "fumingbansheng",
      description: "A blog for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "浮名半生",
      description: "vuepress-theme-hope 的博客演示",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
