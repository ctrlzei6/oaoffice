Ext.define('Admin.view.xtgl.yggl.YgglViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.ygglViewModel',

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
      userLists: {type: 'ygglGridStore'}
    }
});