Ext.define('Admin.model.glmodel.khgl.wdkh.WdkhModel', {
    extend: 'Admin.model.Base',
    requires: [
        'Ext.data.proxy.Rest'
    ],


    fields: [
	    {type: 'int',name: 'cilentId'},
	    {type: 'string',name: 'cilentName'},
	    {type: 'string',name: 'cilentGender'},
        {type: 'string', name: 'intro'}
        //fields data dataFormat:'Y/m/d H:i:s'
        //{type: 'data', name: 'data',dataFormat:'Y/m/d H:i:s'}
	],
    proxy: {
		type: 'rest',
		url: '/wdkh',
	}
});
