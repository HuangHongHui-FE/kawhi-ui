import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  base: '/kawhi-ui/',
  publicPath: '/kawhi-ui/',
  define: {
    prefixCls: 'kawhi',
  },
  themeConfig: {
    name: 'kawhi-ui',
    logo: 'https://zcy-gov-open-doc.oss-cn-north-2-gov-1.aliyuncs.com/1072PT/null/202511/498d75c1-a8ca-4c9f-b4eb-13ec6ad02b67.png',
    prefersColor: {
      default: 'auto',
      switch: true,
    },
    socialLinks: {
      github: 'https://github.com/HuangHongHui-FE/kawhi-ui',
    },
  },
});
