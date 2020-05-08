import Table from 'ant-design-vue/es/table';
import Vue from 'vue';
import VueDraggableResizable from 'vue-draggable-resizable';
import cloneDeep from 'lodash/cloneDeep';

Vue.component('vue-draggable-resizable', VueDraggableResizable);

import {
    getClass,
    getStyle,
    initDefaultProps,
    getListeners,
    getOptionProps,
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
        draggable: {
            type: Boolean,
            default: false,
        },
        serialable: Boolean,
        serialTitle: {
            type: String,
            default: '序号',
        },
        startSerial: {
            type: Number,
            default: 1,
        },
    },
    data() {
        const { draggable } = this;
        this.newColumns = this.insertSerialColumn();
        if (draggable) {
            const { resizeableTitle, newColumns } = this;
            const draggingMap = {};
            newColumns.forEach(col => {
                draggingMap[col.key || col.dataIndex] = col.width;
            });
            this.draggingState = Vue.observable(draggingMap);
            this.newComponents = draggable ? { header: { cell: resizeableTitle } } : undefined;
        }

        return {};
    },
    computed: {
        data: function() {
            const { dataSource, startSerial } = this;
            if (this.serialable) {
                return dataSource.map((item, index) => {
                    return {
                        ...item,
                        serial: index + startSerial,
                    };
                });
            }
            return dataSource;
        },
    },
    methods: {
        insertSerialColumn() {
            let { columns, serialable, serialTitle } = this;
            if (serialable) {
                columns = [
                    {
                        title: serialTitle,
                        dataIndex: 'serial',
                        width: 70,
                    },
                    ...cloneDeep(columns),
                ];
            }
            return columns;
        },

        resizeableTitle(h, props, children) {
            const { newColumns, draggingState } = this;
            let thDom = null;
            const { key, ...restProps } = props;
            const col = newColumns.find(col => {
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
                    ></vue-draggable-resizable>
                </th>
            );
        },
    },

    render() {
        const { $attrs, $slots, $scopedSlots } = this;
        const tableProps = {
            props: {
                ...getOptionProps(this),
                components: this.newComponents,
                columns: this.newColumns,
                dataSource: this.data,
            },
            on: {
                ...getListeners(this),
            },
            attrs: $attrs,
            class: {
                ...getClass(this),
                'fms-table': true,
            },
            style: getStyle(this),
            scopedSlots: $scopedSlots,
        };
        return <Table {...tableProps}>{$slots.default}</Table>;
    },
};

FTable.install = function(Vue) {
    Vue.component(FTable.name, FTable);
};

export default FTable;
