Ext.define('Admin.store.glstore.khgl.wdkh.WdkhGridStore', {
    extend: 'Ext.data.Store',
	alias: 'store.wdkhGridStore',
	
	model: 'Admin.model.glmodel.khgl.wdkh.WdkhModel', 

	
	data: {
		'cilents':
		[
			{'CilentId':'4', 'CilentName':"客户A", 'CilentGender':"男", 'Intro':"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",'DepartName':'Lisa'},
			{'CilentId':'1', 'CilentName':"客户D", 'CilentGender':"男", 'Intro':"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",'DepartName':'Lisa'},
			{'CilentId':'6', 'CilentName':"客户F", 'CilentGender':"女", 'Intro':"cccccccccccccccccccccccccccccc",'DepartName':'Lisa'}
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
	//pageSize:2,
    autoLoad: 'true',

    sorters: {
        direction: 'ASC',
        property: 'CilentId'
    }
});
