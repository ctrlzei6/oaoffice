Ext.define('Admin.model.glmodel.khgl.dagl.DaglModel', {
    extend: 'Admin.model.Base',
    requires: [
        'Ext.data.proxy.Rest'
    ],


    fields: [
	    {type: 'int',name: 'cilentId'},
	    {type: 'string',name: 'cilentName'},
	    {type: 'string',name: 'cilentGender'},
        {type: 'string', name: 'intro'},
        {type: 'string', name: 'departName'}
        //fields data dataFormat:'Y/m/d H:i:s'
        //{type: 'data', name: 'data',dataFormat:'Y/m/d H:i:s'}
	]

});
