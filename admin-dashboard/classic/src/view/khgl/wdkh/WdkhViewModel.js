Ext.define('Admin.view.khgl.wdkh.WdkhViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.wdkhViewModel',

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
      cilentLists: {type: 'wdkhGridStore'}
    }
});
