---
home: true
heroText: fms-components
tagline: 基于 ant-design-vue 二次封装的 vue 组件库
actionText: 快速入门 →
actionLink: /components/installation
---

## 安装

```shell
yarn add @yemu419/fms-components -S
```

## Usage

```js
import Vue from 'vue';
import { Modal } from '@yemu419/fms-components';
import App from './App';

Vue.component(Modal.name, Modal);

Vue.use(Modal);

new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
});
```
