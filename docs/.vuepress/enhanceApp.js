import Fms from '@yemu419/fms-components';
import '@yemu419/fms-components/style';

import { Button, Anchor } from 'ant-design-vue';

export default ({ Vue }) => {
    Vue.use(Button);
    Vue.use(Anchor);
    Vue.use(Fms);
};
