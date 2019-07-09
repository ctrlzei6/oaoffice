Ext.define('Admin.store.user.Userdata', {
    extend: 'Ext.data.Store',

    alias: 'store.userData',
    storeId:'user',
    model: 'Admin.model.User',
   
    data: { items: [
        { 
            userId: 001, 
            username: "admin", 
            password: "12345", 
            departId: 01, 
            gender:'男',
            roleId:101,
        }
        
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
