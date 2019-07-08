Ext.define('Admin.model.glmodel.xtgl.zwgl.ZwglModel', {
    extend: 'Admin.model.Base',
    requires: [
        'Ext.data.proxy.Rest'
    ],
	fields: [
        {type: 'int',name: 'roleId'},
	    {type: 'string',name: 'roleName'},
        {type: 'string', name: 'roleDesc'},
	],
    proxy: {
		type: 'rest',
		url: '../zwgl',
	}
});