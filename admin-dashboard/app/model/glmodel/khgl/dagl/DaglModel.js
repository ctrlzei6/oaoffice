Ext.define('Admin.model.glmodel.khgl.dagl.DaglModel', {
    extend: 'Admin.model.Base',
    requires: [
        'Ext.data.proxy.Rest'
    ],


    fields: [
	    {type: 'int',name: 'CilentId'},
	    {type: 'string',name: 'CilentName'},
	    {type: 'string',name: 'CilentGender'},
        {type: 'string', name: 'Intro'},
        {type: 'string', name: 'DepartName'}
        //fields data dataFormat:'Y/m/d H:i:s'
        //{type: 'data', name: 'data',dataFormat:'Y/m/d H:i:s'}
	]

});
