Ext.define('Admin.view.ggl.GglViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.gglViewModel',

    requires: [
        'Ext.data.Store',
        'Ext.data.proxy.Memory',
        'Ext.data.field.Integer',
        'Ext.data.field.String',
        'Ext.data.field.Date',
        'Ext.data.field.Boolean',
        'Ext.data.reader.Json'
    ],

    stores: {
		gglLists: {type: 'ggData'}
    }
});
