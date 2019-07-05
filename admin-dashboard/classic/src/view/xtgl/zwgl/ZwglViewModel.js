Ext.define('Admin.view.xtgl.zwgl.ZwglViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.zwglViewModel',

    requires: [
        'Ext.data.Store',
        'Ext.data.proxy.Memory',
        'Ext.data.field.Integer',
        'Ext.data.field.String',
        //'Ext.data.field.Date',
        //'Ext.data.field.Boolean',
        'Ext.data.reader.Json'
    ],

    stores: {
      roleLists: {type: 'zwglGridStore'}
    }
});