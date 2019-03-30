# y

> jade

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

##目录结构
```
 |---build 打包配置
 |--config 基本的配置
 |--dist   打包的文件
 |--src    文件页面
    |--assets 公共图片和css
       |--img 图片
       |--css 样式
    |--components 公共组件
    |--rooter  路由模块
    |--App     主要的挂载
    |--main    文件统一入口
 |--static  公共资源
 |--common  公共js
     |--require.js 请求封装
     |--GetJS.js   公共方法
```
