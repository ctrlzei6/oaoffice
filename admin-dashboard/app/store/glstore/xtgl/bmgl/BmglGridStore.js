Ext.define('Admin.store.glstore.xtgl.bmgl.BmglGridStore', {
    extend: 'Ext.data.Store',
    alias: 'store.bmglGridStore',
	model: 'Admin.model.glmodel.xtgl.bmgl.BmglModel', 
	
	data: {
		'lists':
		[
			{'departId':'1', 'departName':"部门A", 'principalUser':"AAA", 'connectTelNo':"8700001", 'faxes':"8710001"},
			{'departId':'2', 'departName':"部门B", 'principalUser':"BBB", 'connectTelNo':"8700002", 'faxes':"8720002"},
			{'departId':'3', 'departName':"部门C", 'principalUser':"CCC", 'connectTelNo':"8700003", 'faxes':"8730003"},
			{'departId':'4', 'departName':"部门D", 'principalUser':"DDD", 'connectTelNo':"8700004", 'faxes':"8740004"},
			{'departId':'5', 'departName':"部门E", 'principalUser':"EEE", 'connectTelNo':"8700005", 'faxes':"8750005"}
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
        property: 'departId'
    }
});
