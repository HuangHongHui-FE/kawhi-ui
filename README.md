# kawhi-ui

[![NPM version](https://img.shields.io/npm/v/kawhi-ui.svg?style=flat)](https://npmjs.org/package/kawhi-ui)
[![NPM downloads](http://img.shields.io/npm/dm/kawhi-ui.svg?style=flat)](https://npmjs.org/package/kawhi-ui)

A react library developed with dumi

> 文档在线预览地址：[kawhi-ui 文档站](https://huanghonghui-fe.github.io/kawhi-ui/)

## 快速开始

```bash
# 安装
npm install kawhi-ui
# 或者
yarn add kawhi-ui
```

```tsx
import { Button } from 'kawhi-ui';

export default () => <Button type="primary">Hello kawhi-ui</Button>;
```

## 组件示例

更多示例请直接访问上方在线文档站，所有 README 中的代码都能在该页面实时运行。

## Options

TODO

## Development

```bash
# install dependencies
$ yarn install

# develop library by docs demo
$ yarn start

# build library source code
$ yarn run build

# build library source code in watch mode
$ yarn run build:watch

# build docs
$ yarn run docs:build

# Locally preview the production build.
$ yarn run docs:preview

# 部署文档到 GitHub Pages
$ yarn run docs:deploy

# check your project for potential problems
$ yarn run doctor
```

## LICENSE

MIT

## 参考文档

[ant-design](https://ant.design/components/overview-cn/)

[dumi](https://d.umijs.org/)

## __todo

* [ ]  验证组件支持的react版本
* [ ]  组件支持class,style入参设置
* [ ]  className写法优化

  ```jsx
  {classNames(prefixClsIcon, `iconfont ${type}`, className, {
          [`${prefixClsIcon}-spin`]: spin,
        })}
  ```
* [ ]  组件均要支持ref
