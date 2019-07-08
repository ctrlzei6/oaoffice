Ext.define('Admin.store.glstore.xtgl.Yggl.YgglGridStore', {
    extend: 'Ext.data.Store',
    alias: 'store.ygglGridStore',
    storeId:'ygglGridStore',
	model: 'Admin.model.glmodel.xtgl.Yggl.YgglModel', 
	
	data: {
		'lists':
		[
			{'userId':'001', 'userName':"Lisa", 'passWord':"123456",'departId':"1",'gender':"女",'roleId':"1"},
            {'userId':'002', 'userName':"Bart", 'passWord':"123456",'departId':"2",'gender':"男",'roleId':"2"},
            {'userId':'003', 'userName':"Homer", 'passWord':"123456",'departId':"3",'gender':"男",'roleId':"1"},
            {'userId':'004', 'userName':"Worm", 'passWord':"123456",'departId':"2",'gender':"女",'roleId':"1"}
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