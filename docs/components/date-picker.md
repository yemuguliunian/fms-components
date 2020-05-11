---
title: DatePicker
---

# DatePicker 日期选择器

**变更点**

-   `value(v-model)`值类型由 `mement` 变更为 `string`

-   `ant-design-vue@1.5.4` 目前暂无 `YearPicker` 组件，官方计划 2.x 版本才会提供。故利用 `mode` 和 `panelChange` 等方法封装 `YearPicker` 等组件，解决[mode 设置后无法选择年份/月份？](https://www.antdv.com/docs/vue/faq-cn#%E5%BD%93%E6%88%91%E6%8C%87%E5%AE%9A%E4%BA%86-DatePicker/RangePicker-%E7%9A%84-mode-%E5%B1%9E%E6%80%A7%E5%90%8E%EF%BC%8C%E7%82%B9%E5%87%BB%E5%90%8E%E6%97%A0%E6%B3%95%E9%80%89%E6%8B%A9%E5%B9%B4%E4%BB%BD/%E6%9C%88%E4%BB%BD%EF%BC%9F)

## 代码演示

#### 基本使用

<!-- prettier-ignore -->
::: demo
<template>
    <f-date-picker v-model="date" @change="change" />
    <br />
    <f-month-picker v-model="month" placeholder="选择月份" />
    <br />
    <f-week-picker v-model="week" placeholder="选择周" @change="changeWeek" />
    <br />
    <f-year-picker v-model="year" placeholder="选择年" @change="changeYear" @disabledDate="disabledDate" />
    <br />
    <f-range-picker
        v-model="range"
        @change="changeRange"
        :show-time="{ format: 'HH:mm' }"
        format="YYYY-MM-DD HH:mm"
        :placeholder="['Start Time', 'End Time']"
    />
</template>

<script>
    export default {
        data() {
            return {
                date: '2020-06-06',
                month: '',
                week: '',
                year: '',
                range: [],
            };
        },
        methods: {
            change(date, dateString) {
                console.log(dateString);
            },

            changeWeek(date, dateString) {
                console.log(date, dateString);
            },

            changeYear(date, dateString) {
                console.log(date, dateString);
            },

            changeRange(dates, dateStrings) {
                console.log(dates, dateStrings);
            },

            disabledDate(current) {
                return current;
            }
        },
    };
</script>

:::

## API

详细请参考：[ant-design-vue/DatePicker](https://antdv.com/components/date-picker-cn/#API)

### YearPicker

| 参数           | 说明           | 类型                                   | 默认值 | 版本 |
| -------------- | -------------- | -------------------------------------- | ------ | ---- |
| placeholder    | 输入框提示文字 | string                                 | -      |      |
| value(v-model) | 日期           | string\|[moment](http://momentjs.com/) | -      |      |

### YearPicker 事件

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 时间发生变化的回调，发生在用户选择时间时 | function(date: moment \| string, dateString: string) |
