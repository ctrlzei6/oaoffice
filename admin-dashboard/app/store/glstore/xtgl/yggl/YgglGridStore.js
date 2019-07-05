Ext.define('Admin.store.glstore.xtgl.Yggl.YgglGridStore', {
    extend: 'Ext.data.Store',
    alias: 'store.ygglGridStore',
	model: 'Admin.model.glmodel.xtgl.Yggl.YgglModel', 
	
	data: {
		'lists':
		[
			{'UserId':'001', 'UserName':"Lisa", 'PassWord':"123456",'DepartId':"1",'Gender':"女",'RoleId':"1"},
            {'UserId':'002', 'UserName':"Bart", 'PassWord':"123456",'DepartId':"2",'Gender':"男",'RoleId':"2"},
            {'UserId':'003', 'UserName':"Homer", 'PassWord':"123456",'DepartId':"3",'Gender':"男",'RoleId':"1"},
            { 'UserId':'004', 'UserName':"Worm", 'PassWord':"123456",'DepartId':"2",'Gender':"女",'RoleId':"1"}
		]
	},
	//pageSize:2,

    proxy: {
        type: 'memory',
        //url: '~api/search/users'	//mvc url  xxx.json
	    reader:{
	    	type:'json',
	    	rootProperty:'lists'
	    }
    },

    autoLoad: 'true',

    sorters: {
        direction: 'ASC',
        property: 'DepartId'
    }
});