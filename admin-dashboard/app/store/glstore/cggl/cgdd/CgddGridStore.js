Ext.define('Admin.store.glstore.cggl.cgdd.CgddGridStore', {
    extend: 'Ext.data.Store',
    alias: 'store.cgddGridStore',
	
	model: 'Admin.model.glmodel.cggl.cgdd.CgddModel', 
	
	data: {
		'lists':
		[
			{'OrderId':'1','OrderName':'订单A', 'OrderTxt':"xxxxxxxxxxxxx", 'OrderDate':"2019/01/02", 'AssePerson':"AAA"},
			{'OrderId':'2','OrderName':'订单B', 'OrderTxt':"rrrrrrrrrrrrrrr", 'OrderDate':"2019/02/02", 'AssePerson':"bbb"},
			{'OrderId':'3','OrderName':'订单C','OrderTxt':"ccccccccccc", 'OrderDate':"2019/03/02", 'AssePerson':"ccc"}
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
        property: 'OrderId'
    }
});
