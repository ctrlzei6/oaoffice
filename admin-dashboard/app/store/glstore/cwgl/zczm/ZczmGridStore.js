Ext.define('Admin.store.glstore.cwgl.zczm.ZczmGridStore', {
    extend: 'Ext.data.Store',
    alias: 'store.zczmGridStore',
	storeId:'zczmGridStore',
	model: 'Admin.model.glmodel.cwgl.zczm.ZczmModel', 
	
	data: {
		'lists':
		[
			{'outAccountId':'1','outName':'支出A', 'outAmoubt':"10000元", 'outspecter':"AAA"},
			{'outAccountId':'2','outName':'支出C', 'outAmoubt':"20000元", 'outspecter':"bbb"},
			{'outAccountId':'3','outName':'支出B', 'outAmoubt':"5000元", 'outspecter':"ddd"}
		]
	},
	//pageSize:2,

    proxy: {
		type: 'memory',
		url: '../zczm',
			
        //url: '~api/search/users'	//mvc url  xxx.json
	    reader:{
	    	type:'json',
			rootProperty:'lists'
	    }
    },

    autoLoad: 'true',

    sorters: {
        direction: 'ASC',
        property: 'outAccountId'
    }
});
