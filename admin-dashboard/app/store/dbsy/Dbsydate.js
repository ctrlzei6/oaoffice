Ext.define('Admin.store.dbsy.Dbsydata', {
    extend: 'Ext.data.Store',

    alias: 'store.dbsyData',

    model: 'Admin.model.DbsyModel',
    
    data: { items: [
        { id:1,liushuiid: '001',worktitle:"kkk001", faqiman: "李四", formtype: "行政类",presentstep:"未批准"}
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
