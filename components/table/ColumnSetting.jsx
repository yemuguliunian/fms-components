import Popover from 'ant-design-vue/es/popover';
import Checkbox from 'ant-design-vue/es/checkbox';

const ColumnSetting = {
    name: 'ColumnSetting',
    props: {
        options: Array, // 选项
        checkedList: Array,
        prefixCls: String,
    },
    data() {
        return {
            indeterminate: false,
            checkAll: false,
        };
    },
    watch: {
        checkedList: {
            handler(val) {
                const { options } = this.$props;
                Object.assign(this.$data, {
                    checkAll: val.length == options.length,
                    indeterminate: !!val.length && val.length < options.length,
                });
            },
            immediate: true,
        },
    },
    methods: {
        // 内容
        renderContent() {
            const { prefixCls, options, checkedList = [] } = this.$props;
            return (
                <div class={`${prefixCls}-column-setting-list`}>
                    {options.map(opt => {
                        const key = opt.key || opt.dataIndex;
                        return (
                            <div key={key}>
                                <Checkbox
                                    props={{ checked: checkedList.includes(key) }}
                                    on={{ change: e => this.onCheckChange(e, key) }}
                                >
                                    {opt.title}
                                </Checkbox>
                            </div>
                        );
                    })}
                </div>
            );
        },

        // 全选
        onCheckAllChange(e) {
            const { checked } = e.target;
            const { options } = this.$props;
            const { change } = this.$listeners;

            if (change) {
                const newCheckedList = checked ? options.map(item => item.key) : [];
                change(newCheckedList);
            }
        },

        onCheckChange(e, key) {
            const { checked } = e.target;
            const { checkedList } = this.$props;
            const { change } = this.$listeners;

            if (change) {
                const newCheckedList = checked
                    ? [...checkedList, key]
                    : checkedList.filter(item => item != key);
                change(newCheckedList);
            }
        },
    },

    render() {
        const { $slots, renderContent } = this;
        const { prefixCls } = this.$props;
        const { indeterminate, checkAll } = this.$data;
        const { reset } = this.$listeners;

        return (
            <Popover trigger="click" placement="bottom" content={renderContent()}>
                {/* 标题 */}
                <div class={`${prefixCls}-column-setting-title`} slot="title">
                    <Checkbox
                        props={{ indeterminate, checked: checkAll }}
                        on={{ change: this.onCheckAllChange }}
                    >
                        列展示
                    </Checkbox>
                    <a onClick={reset}>重置</a>
                </div>
                {$slots.default}
            </Popover>
        );
    },
};

export default ColumnSetting;
