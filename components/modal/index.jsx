import Modal from 'ant-design-vue/es/modal';

import { getClass, getStyle, initDefaultProps } from '../_utils/props-util';

const fModalProps = (defaultProps = {}) => {
    return initDefaultProps(Modal.props, defaultProps);
};

const FModal = {
    name: 'FModal',
    inheritAttrs: false,
    model: {
        prop: 'visible',
        event: 'change',
    },
    props: fModalProps({
        maskClosable: false,
        bodyStyle: {
            maxHeight: '55vh',
            overflow: 'auto',
        },
    }),
    methods: {
        handleCancel(e) {
            this.$emit('cancel', e);
            this.$emit('change', false);
        },
    },
    render() {
        const { $attrs, $slots, $scopedSlots } = this;
        const children = $scopedSlots.default ? $scopedSlots.default() : $slots.default;
        const modalProps = {
            props: this.$options.propsData,
            on: {
                cancel: this.handleCancel,
            },
            attrs: $attrs,
            class: getClass(this),
            style: getStyle(this),
        };
        return <Modal {...modalProps}>{children}</Modal>;
    },
};

FModal.install = function(Vue) {
    Vue.component(FModal.name, FModal);
};

export default FModal;
