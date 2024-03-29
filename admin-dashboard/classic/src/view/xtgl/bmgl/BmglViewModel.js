Ext.define('Admin.view.cwgl.bmgl.BmglViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.bmglViewModel',

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
      departLists: {type: 'bmglGridStore'}
    }
});
