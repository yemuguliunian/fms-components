import TreeSelect from 'ant-design-vue/es/tree-select';

import {
    getClass,
    getStyle,
    initDefaultProps,
    getListeners,
    getOptionProps,
} from '../_utils/props-util';

const fTreeSelectProps = (defaultProps = {}) => {
    return initDefaultProps(TreeSelect.props, defaultProps);
};

const FTreeSelect = {
    TreeNode: { ...TreeSelect.TreeNode, name: 'FTreeSelectNode' },
    name: 'FTreeSelect',
    inheritAttrs: false,
    model: {
        prop: 'value',
        event: 'change',
    },
    props: fTreeSelectProps({
        showSearch: true,
        searchPlaceholder: '请输入',
        treeNodeFilterProp: 'title',
        allowClear: true,
        dropdownStyle: { maxHeight: '400px', overflow: 'auto' },
    }),
    methods: {
        onChange() {
            this.$emit('change', ...arguments);
        },
    },
    render() {
        const { $attrs, $slots, $scopedSlots } = this;

        const TreeSelectProps = {
            props: getOptionProps(this),
            on: {
                ...getListeners(this),
                change: this.onChange,
            },
            attrs: $attrs,
            class: getClass(this),
            style: getStyle(this),
            scopedSlots: $scopedSlots,
        };
        return <TreeSelect {...TreeSelectProps}>{$slots.default}</TreeSelect>;
    },
};

FTreeSelect.install = function(Vue) {
    Vue.component(FTreeSelect.name, FTreeSelect);
    Vue.component(FTreeSelect.TreeNode.name, FTreeSelect.TreeNode);
};

export default FTreeSelect;
