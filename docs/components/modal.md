---
title: Modal
---

# Modal 对话框

## 代码演示

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

详细请参考：[ant-design-vue/modal](https://antdv.com/components/modal-cn/#API)

**差异**

| 参数         | 说明                 | 类型    | 默认值                                 | 版本 |
| ------------ | -------------------- | ------- | -------------------------------------- | ---- |
| bodyStyle    | Modal body 样式      | object  | { maxHeight: '55vh', overflow: 'auto'} |      |
| maskClosable | 点击蒙层是否允许关闭 | boolean | false                                  |      |