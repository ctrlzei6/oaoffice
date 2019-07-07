Ext.define('Admin.store.user.Userdata', {
    extend: 'Ext.data.Store',

    alias: 'store.userData',

    model: 'Admin.model.User',
   
    data: { items: [
        { 
            userId: 001, 
            username: "admin", 
            password: "12345", 
            departId: 01, 
            gender:'男',
            roleId:101,
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
