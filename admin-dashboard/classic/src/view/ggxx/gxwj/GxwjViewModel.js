Ext.define('Admin.view.ggl.GxwjViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.gxwjViewModel',

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
		gxwjLists: {type: 'fileData'}
    }
});
