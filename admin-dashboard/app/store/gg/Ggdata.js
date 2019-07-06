Ext.define('Admin.store.gg.Ggdata', {
    extend: 'Ext.data.Store',

    alias: 'store.ggData',

    model: 'Admin.model.Ggdata',
   
    data: { items: [
        { 
            identifier: 1, 
            ggTheme: "我爱中国", 
            creatTime: "2019/06/21", 
            stopTime: "2099/09/09", 
            publishMan:'张三',
            publishTime:'2019/06/21'
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
