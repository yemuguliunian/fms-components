import DatePicker from 'ant-design-vue/es/date-picker';
import moment from 'moment';

import {
    getClass,
    getStyle,
    initDefaultProps,
    getListeners,
    getOptionProps,
} from '../_utils/props-util';

const FYearPicker = {
    name: 'FYearPicker',
    inheritAttrs: false,
    model: {
        prop: 'value',
        event: 'change',
    },
    props: initDefaultProps(DatePicker.props),
    data() {
        return {
            date: null,
            isopen: false,
        };
    },
    watch: {
        value: {
            handler(val) {
                this.date = val ? (moment.isMoment(val) ? val : moment(val)) : null;
            },
            immediate: true,
        },
    },
    methods: {
        handlerOpenChange(status) {
            this.isopen = status;
            this.$emit('openChange', status);
        },
        handlerPanelChange(value, mode) {
            Object.assign(this.$data, {
                date: value,
                isopen: false,
            });
            this.$emit('panelChange', value, mode);
            this.$emit('change', value, value.format('YYYY'));
        },
    },
    render() {
        const { $attrs, $slots, $scopedSlots } = this;
        const { date, isopen } = this.$data;
        const pickerProps = {
            props: {
                ...getOptionProps(this),
                format: 'YYYY',
                value: date,
                open: isopen,
                mode: 'year',
            },
            on: {
                ...getListeners(this),
                openChange: this.handlerOpenChange,
                panelChange: this.handlerPanelChange,
            },
            attrs: $attrs,
            class: getClass(this),
            style: getStyle(this),
            scopedSlots: $scopedSlots,
        };
        return <DatePicker {...pickerProps}>{$slots.default}</DatePicker>;
    },
};

export default FYearPicker;
