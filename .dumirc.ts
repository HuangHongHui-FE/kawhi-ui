import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  define: {
    'prefixCls': 'kawhi'
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
