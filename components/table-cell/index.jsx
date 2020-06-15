import { getComponentFromProp } from '../_utils/props-util';
import classnames from 'classnames';

const FTableCell = {
    name: 'FTableCell',
    inheritAttrs: false,
    props: {
        // 只读
        readOnly: Boolean,
        prefixCls: {
            type: String,
            default: 'fms-table-cell',
        },
        text: String,
    },
    data() {
        return {
            canEdit: false, // 可编辑状态
        };
    },
    methods: {
        allowEdit() {
            const { readOnly } = this.$props;
            // 只读状态下不可编辑
            if (!readOnly) {
                this.canEdit = true;
            }
        },
        blur() {
            this.canEdit = false;
        },
    },
    render() {
        const { $slots, $scopedSlots, $props, $data } = this;
        const { prefixCls, text, readOnly } = $props;
        const { canEdit } = $data;

        const children = $scopedSlots.default
            ? $scopedSlots.default({ blur: this.blur })
            : $slots.default;

        const textCls = classnames(`${prefixCls}-text`, {
            [`${prefixCls}-text-readonly`]: readOnly,
        });

        return canEdit ? (
            children
        ) : (
            <div onClick={this.allowEdit} class={textCls}>
                {text || getComponentFromProp(this, 'text')}
            </div>
        );
    },
};

FTableCell.install = function(Vue) {
    Vue.component(FTableCell.name, FTableCell);
};

export default FTableCell;
