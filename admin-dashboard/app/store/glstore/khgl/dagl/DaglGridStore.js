Ext.define('Admin.store.glstore.khgl.dagl.DaglGridStore', {
    extend: 'Ext.data.Store',
	alias: 'store.daglGridStore',
	
	model: 'Admin.model.glmodel.khgl.dagl.DaglModel', 

	
	data: {
		'cilents':
		[
			{'cilentId':'4', 'cilentName':"客户A", 'cilentGender':"男", 'intro':"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",'departName':'Lisa'},
			{'cilentId':'2', 'cilentName':"客户B", 'cilentGender':"男", 'intro':"yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",'departName':'Worm'},
			{'cilentId':'3', 'cilentName':"客户C", 'cilentGender':"女", 'intro':"zzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",'departName':'Homer'},
			{'cilentId':'1', 'cilentName':"客户D", 'cilentGender':"男", 'intro':"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",'departName':'Lisa'},
			{'cilentId':'5', 'cilentName':"客户E", 'cilentGender':"女", 'intro':"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",'departName':'Homer'},
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
	//pageSize:2,
    autoLoad: 'true',

    sorters: {
        direction: 'ASC',
        property: 'cilentId'
    }
});
