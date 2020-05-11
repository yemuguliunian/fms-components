import {
    getClass,
    getStyle,
    initDefaultProps,
    getListeners,
    getOptionProps,
} from '../_utils/props-util';
import moment from 'moment';

export default function createPicker(Component, name) {
    return {
        name,
        inheritAttrs: false,
        props: initDefaultProps(Component.props),
        model: {
            prop: 'value',
            event: 'change',
        },
        watch: {
            value: {
                handler(val) {
                    if (Array.isArray(val)) {
                        this.newValue = val.map(d => {
                            return moment.isMoment(d) ? d : moment(d);
                        });
                    } else {
                        this.newValue = val ? (moment.isMoment(val) ? val : moment(val)) : null;
                    }
                },
                immediate: true,
            },
        },
        render() {
            const { $attrs, $slots, $scopedSlots } = this;
            const pickerProps = {
                props: {
                    ...getOptionProps(this),
                    value: this.newValue,
                },
                on: { ...getListeners(this) },
                attrs: $attrs,
                class: getClass(this),
                style: getStyle(this),
                scopedSlots: $scopedSlots,
            };
            return <Component {...pickerProps}>{$slots.default}</Component>;
        },
    };
}
