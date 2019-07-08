Ext.define('Admin.model.glmodel.cwgl.zczm.ZczmModel', {
    extend: 'Admin.model.Base',
    requires: [
        'Ext.data.proxy.Rest'
    ],
	fields: [
		{type: 'int',name: 'outAccountId'},
		{type: 'string',name: 'outName'},
	    {type: 'string',name: 'outAmoubt'},
	    {type: 'string', name: 'outspecter'}
	],
    proxy: {
		type: 'rest',
		url: '../zczm',
	}
	
});
