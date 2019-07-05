Ext.define('Admin.view.grbg.dbsy.DbsyViewModel1', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.dbsyViewModel1',

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
		dbsyLists: {type: 'dbsyData'}
    }
});
