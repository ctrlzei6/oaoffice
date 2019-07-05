Ext.define('Admin.store.glstore.cwgl.zczm.ZczmGridStore', {
    extend: 'Ext.data.Store',
    alias: 'store.zczmGridStore',
	
	model: 'Admin.model.glmodel.cwgl.zczm.ZczmModel', 
	
	data: {
		'lists':
		[
			{'OutAccountId':'1','OutName':'支出A', 'OutAmoubt':"10000元", 'Outspecter':"AAA"},
			{'OutAccountId':'2','OutName':'支出C', 'OutAmoubt':"20000元", 'Outspecter':"bbb"},
			{'OutAccountId':'3','OutName':'支出B', 'OutAmoubt':"5000元", 'Outspecter':"ddd"}
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
        property: 'OutAccountId'
    }
});
