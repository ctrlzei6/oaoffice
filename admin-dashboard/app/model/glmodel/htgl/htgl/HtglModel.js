Ext.define('Admin.model.glmodel.htgl.htgl.HtglModel', {
	extend: 'Admin.model.Base',
	
	requires: [
        'Ext.data.proxy.Rest'
    ],

	fields: [
		{type: 'int',name: 'compactId'},
		{type: 'string',name: 'compactName'},
	    {type: 'string',name: 'compactTxt'},
	    {type: 'date',name: 'compactqdrq',dataFormat:'Y/m/d'},
	    {type: 'date', name: 'compactqixian',dataFormat:'Y/m/d'}
	]
	
	
});
