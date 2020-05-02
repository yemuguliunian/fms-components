import FModal from '../../lib/modal';
import '../../lib/modal/style';

import Button from 'ant-design-vue/es/button';
import 'ant-design-vue/es/button/style/css';

export default ({ Vue }) => {
    Vue.use(Button);
    Vue.use(FModal);
};
