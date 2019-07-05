Ext.define('Admin.model.glmodel.xtgl.Yggl.YgglModel', {
    extend: 'Admin.model.Base',
    requires: [
        'Ext.data.proxy.Rest'
    ],
	fields: [
	    {type: 'string',name: 'UserId'},
        {type: 'string', name: 'UserName'},
        {type: 'string', name: 'PassWord'},
        {type: 'int',name: 'DepartId'},
        {type: 'string',name: 'Gender'},
		{type: 'int',name: 'RoleId'}
	]
});