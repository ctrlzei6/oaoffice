Ext.define('Admin.store.gzlgl.bdsj.BdflData', {
    extend: 'Ext.data.Store',

    alias: 'store.bdflData',

    model: 'Admin.model.BdflModel',
   
    data: { items: [
        { 
            bdflId:1,
            flName:'行政类',
            remark:'这是一个垃圾'
        },
        //{ identifier: 2, ggtheme: "万里长城", sstime: "2019/6/21-2025/9/9", publishman:'李四',publishtime:'2019/6/25'},
        //{ identifier: 3, ggtheme: "辣鸡代码", sstime: "2019/6/21-2020/9/9", publishman:'张三',publishtime:'2019/6/24'}
        
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },
    autoLoad: 'true',
});
