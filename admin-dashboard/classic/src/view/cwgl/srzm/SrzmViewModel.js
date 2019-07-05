Ext.define('Admin.view.cwgl.srzm.SrzmViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.srzmViewModel',

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
      inAccountLists: {type: 'srzmGridStore'}
    }
});
