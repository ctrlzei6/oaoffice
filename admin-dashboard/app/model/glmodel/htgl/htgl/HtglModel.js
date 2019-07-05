Ext.define('Admin.model.glmodel.htgl.htgl.HtglModel', {
	extend: 'Admin.model.Base',
	
	requires: [
        'Ext.data.proxy.Rest'
    ],

	fields: [
		{type: 'int',name: 'CompactId'},
		{type: 'string',name: 'CompactName'},
	    {type: 'string',name: 'CompactTxt'},
	    {type: 'date',name: 'Compactqdrq',dataFormat:'Y/m/d'},
	    {type: 'date', name: 'Compactqixian',dataFormat:'Y/m/d'}
	]
	
	
});
