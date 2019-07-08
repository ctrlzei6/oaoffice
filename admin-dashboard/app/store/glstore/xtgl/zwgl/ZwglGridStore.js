Ext.define('Admin.store.glstore.xtgl.zwgl.ZwglGridStore', {
    extend: 'Ext.data.Store',
    alias: 'store.zwglGridStore',
    //Admin.model.glmodel.xtgl.zwgl.ZwglModel
    storeId:'zwglGridStore',
	model: 'Admin.model.glmodel.xtgl.zwgl.ZwglModel', 
	data: {
		'lists':
		[
			{'roleId':'1', 'roleName':"员工", 'roleDesc':"员工描述"},
            {'roleId':'2', 'roleName':"助理", 'roleDesc':"助理描述"},
            {'roleId':'3', 'roleName':"经理", 'roleDesc':"经理描述"},
            {'roleId':'4', 'roleName':"总经理", 'roleDesc':"总经理描述"}
		]
	},
	//pageSize:2,

    proxy: {
        type: 'memory',
        //url: '~api/search/users'	//mvc url  xxx.json
        url: '../zwgl',
	    reader:{
	    	type:'json',
	    	rootProperty:'lists'
	    }
    },

    autoLoad: 'true',

    sorters: {
        direction: 'ASC',
        property: 'roleId'
    }
});