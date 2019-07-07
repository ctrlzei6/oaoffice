Ext.define('Admin.store.dbsy.Dbsydata', {
    extend: 'Ext.data.Store',

    alias: 'store.dbsyData',

    model: 'Admin.model.DbsyModel',
    
    data: { items: [
        { 
            liushuiId: 1,
            workTitle:"kkk001", 
            faqiMan: "李四",
            bdflId: 1,
            presentStep:0
        }
        //{ identifier: '2', ggtheme: "万里长城", time: "2019/6/21-2025/9/9", publishman:'李四',publishtime:'2019/6/25'},
        //{ identifier: '3', ggtheme: "辣鸡代码", time: "2019/6/21-2020/9/9", publishman:'张三',publishtime:'2019/6/24'}
        
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
