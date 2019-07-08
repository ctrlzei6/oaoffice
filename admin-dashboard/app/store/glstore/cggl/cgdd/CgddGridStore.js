Ext.define('Admin.store.glstore.cggl.cgdd.CgddGridStore', {
    extend: 'Ext.data.Store',
    alias: 'store.cgddGridStore',
	storeId:'cgddGridStore',
	model: 'Admin.model.glmodel.cggl.cgdd.CgddModel', 
	
	data: {
		'lists':
		[
			{'orderId':'1','orderName':'订单A', 'orderTxt':"xxxxxxxxxxxxx", 'orderDate':"2019/01/02", 'assePerson':"AAA"},
			{'orderId':'2','orderName':'订单B', 'orderTxt':"rrrrrrrrrrrrrrr", 'orderDate':"2019/02/02", 'assePerson':"bbb"},
			{'orderId':'3','orderName':'订单C','orderTxt':"ccccccccccc", 'orderDate':"2019/03/02", 'assePerson':"ccc"}
		]
	},
	//pageSize:2,

    proxy: {
        type: 'memory',
		//url: '~api/search/users'	//mvc url  xxx.json
		url: '../cgdd',
	    reader:{
	    	type:'json',
			rootProperty:'lists'
			
	    }
    },

    autoLoad: 'true',

    sorters: {
        direction: 'ASC',
        property: 'orderId'
    }
});
