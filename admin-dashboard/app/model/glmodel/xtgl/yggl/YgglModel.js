Ext.define('Admin.model.glmodel.xtgl.Yggl.YgglModel', {
    extend: 'Admin.model.Base',
    requires: [
        'Ext.data.proxy.Rest'
    ],
	fields: [
	    {type: 'string',name: 'userId'},
        {type: 'string', name: 'userName'},
        {type: 'string', name: 'passWord'},
        {type: 'int',name: 'departId'},
        {type: 'string',name: 'gender'},
		{type: 'int',name: 'roleId'}
	]
});