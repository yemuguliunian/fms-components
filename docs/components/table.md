---
title: Table
---

# Table 表格

## 代码演示

<!-- prettier-ignore -->
::: demo
<template>
    <f-table :columns="columns" :dataSource="data" draggable serialable>
        <template v-slot:action>
            <a href="javascript:;">Delete</a>
        </template>
    </f-table>
</template>

<script>
const columns = [
    {
        title: 'Date',
        dataIndex: 'date',
        width: 200,
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        width: 100,
    },
    {
        title: 'Type',
        dataIndex: 'type',
        width: 100,
    },
    {
        title: 'Note',
        dataIndex: 'note',
        width: 100,
    },
    {
        title: 'Action',
        key: 'action',
        scopedSlots: { customRender: 'action' },
    },
];
const data = [...Array(13)].map((item, idx) => {
    return {
        key: idx,
        date: '2018-02-11',
        amount: 120,
        type: 'income',
        note: 'transfer',
    }
})

export default {
    name: 'App',
    data() {
        return {
            data,
            columns,
        };
    },
};
</script>

:::

```js
```
