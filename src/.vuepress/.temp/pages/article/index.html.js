import comp from "D:/workprofile/blog-web/src/.vuepress/.temp/pages/article/index.html.vue"
const data = JSON.parse("{\"path\":\"/article/\",\"title\":\"Articles\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Articles\",\"dir\":{\"index\":false},\"index\":false,\"feed\":false,\"sitemap\":false,\"blog\":{\"type\":\"type\",\"key\":\"article\"},\"layout\":\"BlogType\",\"gitInclude\":[],\"head\":[[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"zh-cn\",\"href\":\"https://mister-hope.github.io/zh/article/\"}],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/article/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"fumingbansheng\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Articles\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Articles\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null,\"excerpt\":\"\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
