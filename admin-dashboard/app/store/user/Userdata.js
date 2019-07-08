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
		type: 'rest',
		url: '',
		reader:{
			type:'json',
			//rootProperty:'content',//对应后台返回的结果集名称
			//totalProperty: 'totalElements'//分页需要知道总记录数
		},
		writer: {
			type: 'json'
		},
		
		//simpleSortMode: true	//简单排序模式
	},
    autoLoad: 'true',
});
