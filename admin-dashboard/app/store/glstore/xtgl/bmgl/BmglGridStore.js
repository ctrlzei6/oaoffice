Ext.define('Admin.store.glstore.xtgl.bmgl.BmglGridStore', {
    extend: 'Ext.data.Store',
    alias: 'store.bmglGridStore',
	model: 'Admin.model.glmodel.xtgl.bmgl.BmglModel', 
	
	data: {
		'lists':
		[
			{'DepartId':'1', 'DepartName':"部门A", 'PrincipalUser':"AAA", 'ConnectTelNo':"8700001", 'Faxes':"8710001"},
			{'DepartId':'2', 'DepartName':"部门B", 'PrincipalUser':"BBB", 'ConnectTelNo':"8700002", 'Faxes':"8720002"},
			{'DepartId':'3', 'DepartName':"部门C", 'PrincipalUser':"CCC", 'ConnectTelNo':"8700003", 'Faxes':"8730003"},
			{'DepartId':'4', 'DepartName':"部门D", 'PrincipalUser':"DDD", 'ConnectTelNo':"8700004", 'Faxes':"8740004"},
			{'DepartId':'5', 'DepartName':"部门E", 'PrincipalUser':"EEE", 'ConnectTelNo':"8700005", 'Faxes':"8750005"}
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
