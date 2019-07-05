Ext.define('Admin.model.glmodel.cwgl.srzm.SrzmModel', {
	extend: 'Admin.model.Base',
	
	requires: [
        'Ext.data.proxy.Rest'
    ],

	fields: [
		{type: 'int',name: 'InAccountId'},
		{type: 'string',name: 'InName'},
	    {type: 'string',name: 'InAmoubt'},
	    {type: 'string', name: 'Inspecter'}
	]
});
