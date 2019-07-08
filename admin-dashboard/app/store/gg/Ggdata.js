Ext.define('Admin.store.gg.Ggdata', {
    extend: 'Ext.data.Store',

    alias: 'store.ggData',
    storeId:'ggData',
    model: 'Admin.model.Ggdata',
   
    data: { items: [
        { 
            identifier: 1, 
            ggTheme: "我爱中国", 
            creatTime: "2019/06/21", 
            stopTime: "2099/09/09", 
            publishMan:'张三',
            ggContent:'五十六个民族五十六枝花',
            publishTime:'2019/06/21'
        },   
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
