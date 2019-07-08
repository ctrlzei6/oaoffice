Ext.define('Admin.store.glstore.khgl.wdkh.WdkhGridStore', {
    extend: 'Ext.data.Store',
	alias: 'store.wdkhGridStore',
	storeId:'wdkhGridStore',
	model: 'Admin.model.glmodel.khgl.wdkh.WdkhModel', 

	
	data: {
		'cilents':
		[
			{'cilentId':'4', 'cilentName':"客户A", 'cilentGender':"男", 'intro':"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",'departName':'Lisa'},
			{'cilentId':'1', 'cilentName':"客户D", 'cilentGender':"男", 'intro':"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",'departName':'Lisa'},
			{'cilentId':'6', 'cilentName':"客户F", 'cilentGender':"女", 'intro':"cccccccccccccccccccccccccccccc",'departName':'Lisa'}
		]
	},
	

    proxy: {
        type: 'memory',					//后台rest
        //url: '~api/search/users'	//mvc url  xxx.json
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
