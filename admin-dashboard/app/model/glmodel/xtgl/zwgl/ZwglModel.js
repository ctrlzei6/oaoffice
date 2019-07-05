Ext.define('Admin.model.glmodel.xtgl.zwgl.ZwglModel', {
    extend: 'Admin.model.Base',
    requires: [
        'Ext.data.proxy.Rest'
    ],
	fields: [
        {type: 'int',name: 'RoleId'},
	    {type: 'string',name: 'RoleName'},
        {type: 'string', name: 'RoleDesc'},
	]
});