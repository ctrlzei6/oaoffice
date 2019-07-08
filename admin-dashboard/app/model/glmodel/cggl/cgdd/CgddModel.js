Ext.define('Admin.model.glmodel.cggl.cgdd.CgddModel', {
    extend: 'Admin.model.Base',
	
	requires: [
        'Ext.data.proxy.Rest'
    ],

	fields: [
		{type: 'int',name: 'orderId'},
		{type: 'string',name: 'orderName'},
	    {type: 'string',name: 'orderTxt'},
	    {type: 'date',name: 'orderDate'},
	    {type: 'string', name: 'assePerson'}
	],
    proxy: {
		type: 'rest',
		url: '../cgdd',
	}
	
	
});
