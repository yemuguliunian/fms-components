---
title: Table
---

# Table 表格

## 代码演示

#### 配置 draggable 来实现可伸缩列。实现方式-[参考](https://www.antdv.com/components/table-cn/#components-table-demo-resizable-column)

<!-- prettier-ignore -->
::: demo
<template>
    <f-table 
        :columns="columns" 
        :dataSource="data1" 
        draggable 
        @change="onChange"
    >
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
const data1 = [...Array(13)].map((item, idx) => {
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
            data1,
            columns,
        };
    },
    methods: {
        onChange(pagination) {
            console.log(pagination);
        }
    }
};
</script>

:::

#### 可配置列表项显隐

<!-- prettier-ignore -->
::: demo
<template>
    <f-table
        :columns="columns"
        :dataSource="data2"
        toolbar
        :defaultVisibleColumnKeys="['date', 'amount', 'type']"
        @refresh="refresh"
    >
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
    const data2 = [...Array(5)].map((item, idx) => {
        return {
            key: idx,
            date: '2018-02-11',
            amount: 120,
            type: 'income',
            note: 'transfer',
        };
    });

    export default {
        name: 'App',
        data() {
            return {
                data2,
                columns,
            };
        },
        methods: {
            refresh() {
                console.log('刷新');
            },
        }
    };
</script>

:::

#### 自定义工具栏标题位内容

<!-- prettier-ignore -->
::: demo
<template>
    <f-table
        :columns="columns"
        :dataSource="[]"
        :bordered="false"
        toolbar
    >
        <template #toolbarTitle>
            <a-button type="primary" style="margin-right: 8px">新建</a-button>
            <a-button type="danger">删除</a-button>
        </template>
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

    export default {
        name: 'App',
        data() {
            return {
                columns,
            };
        },
    };
</script>

:::

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
    const data1 = [...Array(13)].map((item, idx) => {
        return {
            key: idx,
            date: '2018-02-11',
            amount: 120,
            type: 'income',
            note: 'transfer',
        }
    })
    const data2 = [...Array(5)].map((item, idx) => {
        return {
            key: idx,
            date: '2018-02-11',
            amount: 120,
            type: 'income',
            note: 'transfer',
        };
    });

    export default {
        name: 'App',
        data() {
            return {
                data1,
                data2,
                columns,
            };
        },
        methods: {
            refresh() {
                console.log('刷新');
            },
            onChange(pagination) {
                console.log(pagination);
            }
        }
    };
</script>

## API

详细请参考：[ant-design-vue/table](https://antdv.com/components/table-cn/#API)

**差异**

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| bordered | 是否展示外边框和列边框 | boolean | true |  |
| columnVisibleSetting | 支持列显隐 | boolean | false |  |
| defaultVisibleColumnKeys | 初始默认显示的列,配合 columnVisibleSetting 使用 | Array[string] |  |  |
| draggable | 是否可收缩列 | boolean | false |  |
| toolbar | 是否显示工具栏 | boolean | false |  |
| toolbarTitle | 自定义工具栏标题位 | String\|Function\| slot |  |  |
