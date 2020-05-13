import Fms from '../../components';
import '../../components/style';

import Button from 'ant-design-vue/es/button';
import 'ant-design-vue/es/button/style/css';
import Anchor from 'ant-design-vue/es/anchor';
import 'ant-design-vue/es/anchor/style/css';

export default ({ Vue }) => {
    Vue.use(Button);
    Vue.use(Anchor);
    Vue.use(Fms);
};
