Ext.define('Admin.model.glmodel.cwgl.srzm.SrzmModel', {
	extend: 'Admin.model.Base',
	
	requires: [
        'Ext.data.proxy.Rest'
    ],

	fields: [
		{type: 'int',name: 'inAccountId'},
		{type: 'string',name: 'inName'},
	    {type: 'string',name: 'inAmoubt'},
	    {type: 'string', name: 'inspecter'}
	],
    proxy: {
		type: 'rest',
		url: '/srzm',
	}
});
