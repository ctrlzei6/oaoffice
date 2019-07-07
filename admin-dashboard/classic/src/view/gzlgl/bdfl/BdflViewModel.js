Ext.define('Admin.view.gzlgl.bdsj.BdflViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.bdflViewModel',

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
		bdflLists: {type: 'bdflData'}
    }
});
