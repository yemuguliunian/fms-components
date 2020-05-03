import FModal from '@yemu419/fms-components/lib/modal';
import '@yemu419/fms-components/lib/modal/style/css';

import Button from 'ant-design-vue/es/button';
import 'ant-design-vue/es/button/style/css';

export default ({ Vue }) => {
    Vue.use(Button);
    Vue.use(FModal);
};