Ext.define('Admin.model.glmodel.xtgl.bmgl.BmglModel', {
    extend: 'Admin.model.Base',
    requires: [
        'Ext.data.proxy.Rest'
    ],
	fields: [
	    {type: 'int',name: 'DepartId'},
	    {type: 'string',name: 'DepartName'},
		{type: 'string', name: 'PrincipalUser'},
		{type: 'int',name: 'ConnectTelNo'},
		{type: 'int',name: 'Faxes'}
	]
	
});
