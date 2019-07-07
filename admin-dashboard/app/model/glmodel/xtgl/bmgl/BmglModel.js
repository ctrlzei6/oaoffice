Ext.define('Admin.model.glmodel.xtgl.bmgl.BmglModel', {
    extend: 'Admin.model.Base',
    requires: [
        'Ext.data.proxy.Rest'
    ],
	fields: [
	    {type: 'int',name: 'departId'},
	    {type: 'string',name: 'departName'},
		{type: 'string', name: 'principalUser'},
		{type: 'int',name: 'connectTelNo'},
		{type: 'int',name: 'faxes'}
	]
	
});
