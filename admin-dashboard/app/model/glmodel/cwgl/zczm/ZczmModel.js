Ext.define('Admin.model.glmodel.cwgl.zczm.ZczmModel', {
    extend: 'Admin.model.Base',
    requires: [
        'Ext.data.proxy.Rest'
    ],
	fields: [
		{type: 'int',name: 'OutAccountId'},
		{type: 'string',name: 'OutName'},
	    {type: 'string',name: 'OutAmoubt'},
	    {type: 'string', name: 'Outspecter'}
	]
	
});
