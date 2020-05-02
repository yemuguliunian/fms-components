import classnames from 'classnames';

const getClass = ele => {
    let data = {};
    if (ele.$vnode && ele.$vnode.data) {
        data = ele.$vnode.data;
    }
    const tempCls = data.class || {};
    const staticClass = data.staticClass;
    let cls = {};
    staticClass &&
        staticClass.split(' ').forEach(c => {
            cls[c.trim()] = true;
        });
    if (typeof tempCls == 'string') {
        tempCls.split(' ').forEach(c => {
            cls[c.trim()] = true;
        });
    } else if (Array.isArray(tempCls)) {
        classnames(tempCls)
            .split(' ')
            .forEach(c => {
                cls[c.trim()] = true;
            });
    } else {
        cls = { ...cls, ...tempCls };
    }
    return cls;
};

const getStyle = ele => {
    let data = {};
    if (ele.$vnode && ele.$vnode.data) {
        data = ele.$vnode.data;
    }
    let style = data.style || data.staticStyle;
    if (Array.isArray(style)) {
        let res = {};
        style.map(s => {
            res = { ...s, ...res };
        });
        return res;
    }
    return style;
};

const initDefaultProps = (propTypes, defaultProps) => {
    Object.keys(defaultProps).forEach(k => {
        if (propTypes[k]) {
            propTypes[k].def && (propTypes[k] = propTypes[k].def(defaultProps[k]));
        } else {
            throw new Error(`not have ${k} prop`);
        }
    });
    return propTypes;
};

export { getClass, getStyle, initDefaultProps };
