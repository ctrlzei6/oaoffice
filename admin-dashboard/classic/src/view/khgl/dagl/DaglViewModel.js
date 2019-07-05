Ext.define('Admin.view.khgl.dagl.DaglViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.daglViewModel',

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
      cilentLists: {type: 'daglGridStore'}
    }
});
