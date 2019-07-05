Ext.define('Admin.view.htgl.htgl.HtglViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.htglViewModel',

    requires: [
        'Ext.data.Store',
        'Ext.data.proxy.Memory',
        'Ext.data.field.Integer',
        'Ext.data.field.String',
        'Ext.data.field.Date',
        //'Ext.data.field.Boolean',
        'Ext.data.reader.Json'
    ],

    stores: {
      compactLists: {type: 'htglGridStore'}
    }
});
