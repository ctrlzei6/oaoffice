Ext.define('Admin.store.gzlgl.bdsj.BdflData', {
    extend: 'Ext.data.Store',

    alias: 'store.bdflData',

    model: 'Admin.model.BdflModel',
   
    // data: { items: [
    //     { 
    //         bdflId:1,
    //         flName:'行政类',
    //         remark:'这是一个垃圾'
    //     },
    //     { 
    //         bdflId:2,
    //         flName:'办公类',
    //         remark:'111'
    //     },

    //     //{ identifier: 2, ggtheme: "123", sstime: "2019/7/09-2019/9/9", publishman:'李四',publishtime:'2019/6/25'},


    //     //{ identifier: 3, ggtheme: "111", sstime: "2019/7/09-2020/9/9", publishman:'张三',publishtime:'2019/6/24'}
        
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
