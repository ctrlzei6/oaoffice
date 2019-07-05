Ext.define('Admin.store.glstore.xtgl.zwgl.ZwglGridStore', {
    extend: 'Ext.data.Store',
    alias: 'store.zwglGridStore',
	//Admin.model.glmodel.xtgl.zwgl.ZwglModel
	model: 'Admin.model.glmodel.xtgl.zwgl.ZwglModel', 
	data: {
		'lists':
		[
			{'RoleId':'1', 'RoleName':"员工", 'RoleDesc':"员工描述"},
            {'RoleId':'2', 'RoleName':"助理", 'RoleDesc':"助理描述"},
            {'RoleId':'3', 'RoleName':"经理", 'RoleDesc':"经理描述"},
            {'RoleId':'4', 'RoleName':"总经理", 'RoleDesc':"总经理描述"}
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
        property: 'RoleId'
    }
});