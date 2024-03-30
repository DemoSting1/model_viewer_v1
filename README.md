# model_viewer_v1

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### QA
OrbitControls.js 172 行添加如下代码：

this.onMouseWheel = function( event ) {
    onMouseWheel(event)
}

Vue 3 已经不支持使用EventBus，Vue 3 没有像 Vue 2 那样的 $on() 和 $emit() 的全局事件系统。
Vue 3 中的 mitt 是一个简单而强大的事件总线库，用于在组件之间进行事件的发布和订阅。它提供了一种简洁的方式来实现组件之间的通信，而无需借助 Pinia 或其他状态管理库。