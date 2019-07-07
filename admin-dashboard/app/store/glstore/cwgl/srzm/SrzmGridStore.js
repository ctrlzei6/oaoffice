Ext.define('Admin.store.glstore.cwgl.srzm.SrzmGridStore', {
    extend: 'Ext.data.Store',
    alias: 'store.srzmGridStore',

	model: 'Admin.model.glmodel.cwgl.srzm.SrzmModel', 
	
	data: {
		'lists':
		[
			{'inAccountId':'1','inName':'收入A','inAmoubt':"10000", 'inspecter':"AAA"},
			{'inAccountId':'2','inName':'收入B','inAmoubt':"20000", 'inspecter':"bbb"},
			{'inAccountId':'3','inName':'收入C','inAmoubt':"5000", 'inspecter':"ddd"}
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
        property: 'inAccountId'
    }
});
