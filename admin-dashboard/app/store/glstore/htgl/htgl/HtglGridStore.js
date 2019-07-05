Ext.define('Admin.store.glstore.htgl.htgl.HtglGridStore', {
    extend: 'Ext.data.Store',
    alias: 'store.htglGridStore',
	
	model: 'Admin.model.glmodel.htgl.htgl.HtglModel', 
	
	data: {
		'lists':
		[
			{'CompactId':'1','CompactName':"合同A", 'CompactTxt':"qqqqqqqqqqqqq", 'Compactqdrq':"2019/01/12", 'Compactqixian':"2019/02/28"},
			{'CompactId':'2','CompactName':"合同B", 'CompactTxt':"xxxxxxxxxxx", 'Compactqdrq':"2019/02/22", 'Compactqixian':"2019/05/31"},
			{'CompactId':'3','CompactName':"合同C", 'CompactTxt':"ccccccccccccc", 'Compactqdrq':"2019/03/12", 'Compactqixian':"2019/04/30"},
			{'CompactId':'4','CompactName':"合同D", 'CompactTxt':"ddddddddddd", 'Compactqdrq':"2019/04/12", 'Compactqixian':"2019/06/30"}
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
        property: 'CilentId'
    }
});
