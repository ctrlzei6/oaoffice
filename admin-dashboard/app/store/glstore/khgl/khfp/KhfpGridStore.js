Ext.define('Admin.store.glstore.khgl.khfp.KhfpGridStore', {
    extend: 'Ext.data.Store',
	alias: 'store.khfpGridStore',
	
	model: 'Admin.model.glmodel.khgl.khfp.KhfpModel', 

	
	data: {
		'cilents':
		[
			{'CilentId':'4', 'CilentName':"客户A", 'CilentGender':"男", 'Intro':"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",'DepartName':'Lisa'},
			{'CilentId':'2', 'CilentName':"客户B", 'CilentGender':"男", 'Intro':"yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",'DepartName':'Worm'},
			{'CilentId':'3', 'CilentName':"客户C", 'CilentGender':"女", 'Intro':"zzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",'DepartName':'Homer'},
			{'CilentId':'1', 'CilentName':"客户D", 'CilentGender':"男", 'Intro':"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",'DepartName':'Lisa'},
			{'CilentId':'5', 'CilentName':"客户E", 'CilentGender':"女", 'Intro':"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",'DepartName':'Homer'},
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
