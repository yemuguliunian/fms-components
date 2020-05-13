import Table from 'ant-design-vue/es/table';
import Tooltip from 'ant-design-vue/es/tooltip';
import Icon from 'ant-design-vue/es/icon';
import ColumnSetting from './ColumnSetting';

import Vue from 'vue';
import VueDraggableResizable from 'vue-draggable-resizable';

Vue.component('vue-draggable-resizable', VueDraggableResizable);

import {
    getClass,
    getStyle,
    initDefaultProps,
    getListeners,
    getOptionProps,
    getAntVComponentProps,
    getComponentFromProp,
} from '../_utils/props-util';

const fTableProps = (defaultProps = {}) => {
    return initDefaultProps(
        { ...Table.props, draggable: { type: Boolean, default: undefined } },
        defaultProps,
    );
};

const FTable = {
    name: 'FTable',
    inheritAttrs: false,
    props: {
        ...fTableProps({
            bordered: true,
        }),
        prefixCls: {
            type: String,
            default: 'fms-table',
        },
        draggable: Boolean,
        columnVisibleSetting: {
            type: Boolean,
            default: true,
        },
        defaultVisibleColumnKeys: Array,
        toolbar: Boolean,
        toolbarTitle: null,
    },
    data() {
        const { draggable } = this.$props;
        if (draggable) {
            const { columns } = this.$props;
            const draggingMap = {};
            columns.forEach(col => {
                draggingMap[col.key || col.dataIndex] = col.width;
            });
            this.draggingState = Vue.observable(draggingMap);
            this.customComponents = { header: { cell: this.resizeableTitle } };
        }

        return {
            checkedList: [],
            visibleColumns: [],
        };
    },
    computed: {
        options: function() {
            return this.columns.map(col => ({
                ...col,
                key: col.dataIndex || col.key,
            }));
        },
    },
    created() {
        this.init();
    },
    methods: {
        init() {
            const {
                toolbar,
                columnVisibleSetting,
                columns,
                defaultVisibleColumnKeys,
            } = this.$props;
            if (!toolbar || !columnVisibleSetting) {
                this.$data.visibleColumns = columns;
            } else {
                if (defaultVisibleColumnKeys) {
                    Object.assign(this.$data, {
                        checkedList: defaultVisibleColumnKeys,
                        visibleColumns: columns.filter(item =>
                            defaultVisibleColumnKeys.includes(item.dataIndex || item.key),
                        ),
                    });
                } else {
                    this.checkedList = columns.map(item => item.dataIndex);
                    this.newColumns = columns;
                    Object.assign(this.$data, {
                        checkedList: columns.map(item => item.dataIndex || item.key),
                        visibleColumns: columns,
                    });
                }
            }
        },

        resizeableTitle(h, props, children) {
            const { columns, draggingState } = this;
            let thDom = null;
            const { key, ...restProps } = props;
            const col = columns.find(col => {
                const k = col.dataIndex || col.key;
                return k === key;
            });
            const onDrag = x => {
                draggingState[key] = 0;
                col.width = Math.max(x, 1);
            };
            const onDragstop = () => {
                draggingState[key] = thDom.getBoundingClientRect().width;
            };
            if (!col.width || col.dataIndex === 'serial') {
                return <th {...restProps}>{children}</th>;
            }
            return (
                <th
                    {...restProps}
                    v-ant-ref={r => (thDom = r)}
                    width={col.width}
                    class="resize-table-th"
                >
                    {children}
                    <vue-draggable-resizable
                        key={col.key}
                        class="table-draggable-handle"
                        w={10}
                        x={draggingState[key] || col.width}
                        z={1}
                        axis="x"
                        draggable={true}
                        resizable={false}
                        onDragging={onDrag}
                        onDragstop={onDragstop}
                    />
                </th>
            );
        },

        onChangeColumns(keys) {
            const { options } = this;
            this.$data.checkedList = keys;
            this.$data.visibleColumns = options.filter(item => keys.includes(item.key));
        },

        renderToolBar(node) {
            const { prefixCls, toolbarTitle, columnVisibleSetting } = this.$props;

            const { checkedList } = this.$data;
            return (
                <div class={`${prefixCls}-wrapper`}>
                    <div class={`${prefixCls}-toolbar`}>
                        <div class={`${prefixCls}-toolbar-title`}>
                            {toolbarTitle || this.$slots.toolbarTitle
                                ? getComponentFromProp(this, 'toolbarTitle')
                                : '查询表格'}
                        </div>
                        <div class={`${prefixCls}-toolbar-option`}>
                            <div
                                class="toolbar-option-item"
                                style="margin-right: 8px;"
                                onClick={() => {
                                    this.$emit('refresh');
                                }}
                            >
                                <Tooltip title="刷新">
                                    <Icon type="redo" />
                                </Tooltip>
                            </div>
                            {columnVisibleSetting && (
                                <ColumnSetting
                                    props={{
                                        prefixCls,
                                        checkedList,
                                        options: this.options,
                                    }}
                                    on={{
                                        change: this.onChangeColumns,
                                        reset: this.init,
                                    }}
                                >
                                    <div class="toolbar-option-item">
                                        <Tooltip title="列设置">
                                            <Icon type="setting" />
                                        </Tooltip>
                                    </div>
                                </ColumnSetting>
                            )}
                        </div>
                    </div>
                    {node}
                </div>
            );
        },
    },

    render() {
        const { $attrs, $slots, $scopedSlots } = this;

        const { visibleColumns } = this.$data;
        const { toolbar, ...rest } = getOptionProps(this);

        const tableProps = {
            props: {
                ...getAntVComponentProps(Table.props, rest, ['prefixCls']),
                components: this.customComponents,
                columns: visibleColumns,
            },
            on: {
                ...getListeners(this, ['refresh']),
            },
            attrs: $attrs,
            class: {
                ...getClass(this),
            },
            style: getStyle(this),
            scopedSlots: $scopedSlots,
        };

        let node = <Table {...tableProps}>{$slots.default}</Table>;

        if (toolbar) {
            node = this.renderToolBar(node);
        }

        return node;
    },
};

FTable.install = function(Vue) {
    Vue.component(FTable.name, FTable);
};

export default FTable;
