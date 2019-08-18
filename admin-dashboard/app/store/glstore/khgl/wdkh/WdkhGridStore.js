Ext.define('Admin.store.glstore.khgl.wdkh.WdkhGridStore', {
    extend: 'Ext.data.Store',
	alias: 'store.wdkhGridStore',
	storeId:'wdkhGridStore',
	model: 'Admin.model.glmodel.khgl.wdkh.WdkhModel', 

	
	data: {
		'cilents':
		[
			{'cilentId':'4', 'cilentName':"客户A", 'cilentGender':"男", 'intro':"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",'departName':'Lisa'},
			
			// {'cilentId':'1', 
			// 'cilentName':"客户D", 
			// 'cilentGender':"男",
			//  'intro':"123",
			//  'departName':'Lisa'},
			
			// {'cilentId':'6', 
			// 'cilentName':"客户F", 
			// 'cilentName':"ss", 
			// 'cilentGender':"女", 
			// 'intro':"456",
			// 'departName':'Lisa'}
		]
	},
	

    proxy: {
		type: 'memory',					//后台rest
		//type:'rest',
		//url: 'http://localhost:8080/wdkl'	//mvc url  xxx.json
		url: '../wdkh',
	    reader:{
	    	type:'json',
	    	rootProperty:'cilents'
	    }
    },


	//autoSync: ture, //连接后台修改store自动触发rest请求
	pageSize:2,
    autoLoad: 'true',

    sorters: {
        direction: 'ASC',
        property: 'cilentId'
    }
});
