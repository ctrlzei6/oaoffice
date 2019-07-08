Ext.define('Admin.model.BdflModel', {
    extend: 'Admin.model.Base',
    requires: [
		'Ext.data.proxy.Rest'
	],
    fields: [
        {type: 'int',name: 'bdflId'},
        {type: 'string',name: 'flName'},
        {type: 'string',name: 'remark'}
        //{type: 'date', name: 'date', dateFormat:'Y/m/d H:i:s'}
       // 'identifier','ggtheme', 'time','publishman','publishtime'
    ],
    proxy: {
        type: 'rest',
        url: '/order',
    }
});
