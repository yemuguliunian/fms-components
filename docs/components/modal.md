---
title: Modal
---

# Modal 对话框

### 代码演示


::: demo
<template>
    <a-button type="primary" @click="open">Open Modal</a-button>
    <f-modal 
        v-model="visible" 
        title="Modal"
    >
        Content of the modal
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
