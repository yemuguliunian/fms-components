import DatePicker from 'ant-design-vue/es/date-picker';
import createPicker from './createPicker';
import FYearPicker from './YearPicker';

const { WeekPicker, MonthPicker, RangePicker } = DatePicker;

const FDatePicker = createPicker(DatePicker, 'FDatePicker');
const FWeekPicker = createPicker(WeekPicker, 'FWeekPicker');
const FMonthPicker = createPicker(MonthPicker, 'FMonthPicker');
const FRangePicker = createPicker(RangePicker, 'FRangePicker');

FDatePicker.install = function(Vue) {
    Vue.component(FDatePicker.name, FDatePicker);
    Vue.component(FWeekPicker.name, FWeekPicker);
    Vue.component(FMonthPicker.name, FMonthPicker);
    Vue.component(FYearPicker.name, FYearPicker);
    Vue.component(FRangePicker.name, FRangePicker);
};

export default FDatePicker;
