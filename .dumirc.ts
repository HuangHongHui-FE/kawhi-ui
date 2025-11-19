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
    logo: 'https://domain.com/favicon.ico',
    prefersColor: {
      default: 'auto',
      switch: true,
    },
    socialLinks: {
      github: 'https://github.com/HuangHongHui-FE/kawhi-ui',
    },
  },
});
