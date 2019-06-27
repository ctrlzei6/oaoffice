Ext.define('Admin.store.file.Filedata', {
    extend: 'Ext.data.Store',

    alias: 'store.fileData',

    //model: 'Admin.model.Ggdata',
    fields: [
        'identifier','fileid','fullname', 'filetype'
    ],
    data: { items: [
        { identifier: '1',fileid:"kkk001", fullname: "我爱中国", filetype: "行政类"}
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
