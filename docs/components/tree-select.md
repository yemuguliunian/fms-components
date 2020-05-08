---
title: TreeSelect
---

# 树型选择控件

## 代码演示

#### 基本用法

<!-- prettier-ignore -->
::: demo

<template>
    <f-tree-select
        v-model="value"
        style="width: 100%"
        placeholder="Please select"
        tree-default-expand-all
    >
        <f-tree-select-node key="0-1" value="parent 1" title="parent 1">
            <f-tree-select-node key="0-1-1" value="parent 1-0" title="parent 1-0">
                <f-tree-select-node
                    key="random"
                    :selectable="false"
                    value="leaf1"
                    title="my leaf"
                />
                <f-tree-select-node key="random1" value="leaf2" title="your leaf" />
            </f-tree-select-node>
            <f-tree-select-node key="random2" value="parent 1-1" title="parent 1-1">
                <f-tree-select-node key="random3" value="sss">
                    <b slot="title" style="color: #08c">sss</b>
                </f-tree-select-node>
            </f-tree-select-node>
        </f-tree-select-node>
    </f-tree-select>
</template>

<script>
    export default {
        data() {
            return {
                value: undefined,
            };
        },
    };
</script>

:::

#### 从数据直接生成

<!-- prettier-ignore -->
::: demo
<template>
    <f-tree-select
        v-model="value1"
        style="width: 100%"
        :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
        :tree-data="treeData"
        placeholder="Please select"
        tree-default-expand-all
    >
        <span v-if="key === '0-0-1'" slot="title" slot-scope="{ key, value }" style="color: #08c">
            Child Node1 {{ value }}
        </span>
    </f-tree-select>
</template>

<script>
    const treeData = [
        {
            title: 'Node1',
            value: '0-0',
            key: '0-0',
            children: [
                {
                    value: '0-0-1',
                    key: '0-0-1',
                    scopedSlots: {
                        // custom title
                        title: 'title',
                    },
                },
                {
                    title: 'Child Node2',
                    value: '0-0-2',
                    key: '0-0-2',
                },
            ],
        },
        {
            title: 'Node2',
            value: '0-1',
            key: '0-1',
        },
    ];
    export default {
        data() {
            return {
                value1: undefined,
                treeData,
            };
        },
        watch: {
            value(value1) {
                console.log(value1);
            },
        },
    };
</script>

:::

<script>
    const treeData = [
        {
            title: 'Node1',
            value: '0-0',
            key: '0-0',
            children: [
                {
                    value: '0-0-1',
                    key: '0-0-1',
                    scopedSlots: {
                        // custom title
                        title: 'title',
                    },
                },
                {
                    title: 'Child Node2',
                    value: '0-0-2',
                    key: '0-0-2',
                },
            ],
        },
        {
            title: 'Node2',
            value: '0-1',
            key: '0-1',
        },
    ];
    export default {
        data() {
            return {
                value: undefined,
                value1: undefined,
                treeData,
            };
        },
        watch: {
            value(value) {
                console.log(value);
            },
        },
    };
</script>

## API

详细请参考：[ant-design-vue/tree-select](https://antdv.com/components/tree-select-cn/#API)

**差异**

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 显示清除按钮 | boolean | true |  |
| dropdownStyle | 下拉菜单的样式 | object | { maxHeight: '400px', overflow: 'auto' } |  |
| searchPlaceholder | 搜索框默认文字 | string\|slot | '请输入' |  |
| showSearch | 在下拉中显示搜索框(仅在单选模式下生效) | boolean | true |  |
| treeNodeFilterProp | 输入项过滤对应的 treeNode 属性 | string | 'title' |  |
