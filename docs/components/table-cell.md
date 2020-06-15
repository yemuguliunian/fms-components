---
title: TableCell
---

# TableCell 表格单元格

## 何时使用

-   带单元格编辑功能的表格。点击单元格进入编辑状态
-   默认插槽内的控件需支持焦点事件(获取焦点和失去焦点)

## 组件注册

```js
import { TableCell } from '@yemu419/fms-components';
Vue.use(TableCell);
```

## 代码演示

#### 基本使用

<!-- prettier-ignore -->
::: demo
<template>
    <div style="margin-bottom: 10px">只读：<a-switch v-model="readOnly" /></div>
    <f-table :columns="columns" :dataSource="data">
        <template #name="name">
            <f-table-cell :text="name" :readOnly="readOnly">
                <template #default="{blur}">
                    <a-input autoFocus @blur="blur" :value="name" />
                </template>
            </f-table-cell>
        </template>
        <template #code="code, record, index">
            <!-- readOnly 可在查看时使用 -->
            <!-- prettier-ignore -->
            <f-table-cell :text="code, record, index" :readOnly="readOnly">
                <template #default="{blur}">
                    <a-input
                        autoFocus
                        @blur="blur"
                        :value="code"
                        @change="e => changeData(e.target.value, index, 'code')"
                    />
                </template>
            </f-table-cell>
        </template>
        <template #type="type">
            <f-table-cell :text="type" :readOnly="readOnly">
                <template #default="{blur}">
                    <a-input autoFocus @blur="blur" :value="type" />
                </template>
            </f-table-cell>
        </template>
    </f-table>
</template>

<script>
// 设置 width 值可有效防止切换编辑时单元格宽度变化
const columns = [
    {
        title: '名称',
        dataIndex: 'name',
        scopedSlots: { customRender: 'name' },
        width: 100,
    },
    {
        title: '编码',
        dataIndex: 'code',
        scopedSlots: { customRender: 'code' },
        width: 100,
    },
    {
        title: '类型',
        dataIndex: 'type',
        scopedSlots: { customRender: 'type' },
        width: 100,
    },
];
const data = [...Array(4)].map((item, idx) => {
    return {
        key: idx,
        name: 'transfer',
        code: 'code',
        type: 'income',
    };
});

export default {
    name: 'App',
    data() {
        return {
            data,
            columns,
            readOnly: false,
        };
    },
    methods: {
        changeData(value, index, paramCode) {
            this.$set(this.data[index], paramCode, value);
        },
    },
};
</script>

:::

## API

**差异**

| 参数     | 说明         | 类型    | 默认值 | 版本 |
| -------- | ------------ | ------- | ------ | ---- |
| readOnly | 是否只读     | boolean | false  |      |
| text     | 默认显示文本 | string  |        |      |

<template>
    <a-anchor class="toc-affix" :targetOffset="100">
        <a-anchor-link href="#基本使用" title="基本使用" />
        <a-anchor-link href="#API" title="API" />
    </a-anchor>
</template>
