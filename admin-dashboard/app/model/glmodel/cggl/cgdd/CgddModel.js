Ext.define('Admin.model.glmodel.cggl.cgdd.CgddModel', {
    extend: 'Admin.model.Base',
	
	requires: [
        'Ext.data.proxy.Rest'
    ],

	fields: [
		{type: 'int',name: 'OrderId'},
		{type: 'string',name: 'OrderName'},
	    {type: 'string',name: 'OrderTxt'},
	    {type: 'date',name: 'OrderDate'},
	    {type: 'string', name: 'AssePerson'}
	]
	
	
});
