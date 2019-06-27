Ext.define('Admin.store.gg.Ggdata', {
    extend: 'Ext.data.Store',

    alias: 'store.ggData',

    model: 'Admin.model.Ggdata',
   
    data: { items: [
        { identifier: '1', ggtheme: "我爱中国", time: "2019/6/21-2099/9/9", publishman:'张三',publishtime:'2019/6/21'},
        { identifier: '2', ggtheme: "万里长城", time: "2019/6/21-2025/9/9", publishman:'李四',publishtime:'2019/6/25'},
        { identifier: '3', ggtheme: "辣鸡代码", time: "2019/6/21-2020/9/9", publishman:'张三',publishtime:'2019/6/24'}
        
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
