Ext.define('Admin.store.glstore.cwgl.srzm.SrzmGridStore', {
    extend: 'Ext.data.Store',
    alias: 'store.srzmGridStore',

	model: 'Admin.model.glmodel.cwgl.srzm.SrzmModel', 
	
	data: {
		'lists':
		[
			{'InAccountId':'1','InName':'收入A','InAmoubt':"10000", 'Inspecter':"AAA"},
			{'InAccountId':'2','InName':'收入B','InAmoubt':"20000", 'Inspecter':"bbb"},
			{'InAccountId':'3','InName':'收入C','InAmoubt':"5000", 'Inspecter':"ddd"}
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
        property: 'InAccountId'
    }
});
