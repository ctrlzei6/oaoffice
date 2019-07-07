Ext.define('Admin.store.glstore.htgl.htgl.HtglGridStore', {
    extend: 'Ext.data.Store',
    alias: 'store.htglGridStore',
	
	model: 'Admin.model.glmodel.htgl.htgl.HtglModel', 
	
	data: {
		'lists':
		[
			{'compactId':'1','compactName':"合同A", 'compactTxt':"qqqqqqqqqqqqq", 'compactqdrq':"2019/01/12", 'compactqixian':"2019/02/28"},
			{'compactId':'2','compactName':"合同B", 'compactTxt':"xxxxxxxxxxx", 'compactqdrq':"2019/02/22", 'compactqixian':"2019/05/31"}
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
        property: 'cilentId'
    }
});
