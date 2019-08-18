Ext.define('Admin.store.gzlgl.bdsj.BdsjData', {
    extend: 'Ext.data.Store',

    alias: 'store.bdsjData',

    model: 'Admin.model.BdsjModel',
   
    // data: { items: [
    //     { 
    //         bdId:1,
    //         bdName:'请假单',
    //         bdflId:1
    //     },
    //     //{ identifier: 2, ggtheme: "万里长城", sstime: "2019/6/21-2025/9/9", publishman:'李四',publishtime:'2019/6/25'},
    //     //{ identifier: 3, ggtheme: "辣鸡代码", sstime: "2019/6/21-2020/9/9", publishman:'张三',publishtime:'2019/6/24'}
        
    // ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },
    autoLoad: 'true',
});
