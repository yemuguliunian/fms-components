---
title: Modal
---

# Modal 对话框

**变更点**

-   `maskClosable` 属性值默认为 `false`
-   `bodyStyle` body 样式加上最大高度

## 组件注册

```js
import { Modal } from '@yemu419/fms-components';
Vue.use(Modal);
```

## 代码演示

#### 基本使用

<!-- prettier-ignore -->
::: demo
<template>
    <a-button type="primary" @click="open">Open Modal</a-button>
    <f-modal 
        v-model="visible" 
        title="Modal"
    >
        <div style="height: 90vh">
            Content of the modal
        </div>
    </f-modal>
</template>

<script>
export default {
    data() {
        return {
            visible: false
        }
    },
    methods: {
        open () {
            this.visible = true
        }
    }
}
</script>

:::

## API

**差异**

| 参数         | 说明                 | 类型    | 默认值                                 | 版本 |
| ------------ | -------------------- | ------- | -------------------------------------- | ---- |
| bodyStyle    | Modal body 样式      | object  | { maxHeight: '55vh', overflow: 'auto'} |      |
| maskClosable | 点击蒙层是否允许关闭 | boolean | false                                  |      |

更多属性请参考 [ant-design-vue/Modal](https://antdv.com/components/modal-cn/#API)。

<template>
    <a-anchor class="toc-affix" :targetOffset="100">
        <a-anchor-link href="#基本使用" title="基本使用" />
        <a-anchor-link href="#API" title="API" />
    </a-anchor>
</template>
