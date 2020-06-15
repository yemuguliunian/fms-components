import { version } from '../package';

import { default as DatePicker } from './date-picker';

import { default as Modal } from './modal';

import { default as Table } from './table';

import { default as TableCell } from './table-cell';

import { default as TreeSelect } from './tree-select';

const components = [DatePicker, Modal, Table, TableCell, TreeSelect];

const install = function(Vue) {
    components.map(component => {
        Vue.use(component);
    });
};

export { DatePicker, Modal, Table, TableCell, TreeSelect };

export default {
    version,
    install,
};
