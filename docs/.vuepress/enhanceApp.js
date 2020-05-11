import FDatePicker from '../../components/date-picker';
import '../../components/date-picker/style';
import FModal from '../../components/modal';
import '../../components/modal/style';
import FTreeSelect from '../../components/tree-select';
import '../../components/tree-select/style';
import FTable from '../../components/table';
import '../../components/table/style';

import Button from 'ant-design-vue/es/button';
import 'ant-design-vue/es/button/style/css';

export default ({ Vue }) => {
    Vue.use(Button);
    Vue.use(FDatePicker);
    Vue.use(FModal);
    Vue.use(FTreeSelect);
    Vue.use(FTable);
};
