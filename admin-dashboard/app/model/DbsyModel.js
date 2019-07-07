Ext.define('Admin.model.DbsyModel', {
    extend: 'Admin.model.Base',

    fields: [
        {type: 'int',name: 'liushuiId'},
        {type: 'string',name: 'workTitle'},
        {type: 'string',name: 'faqiMan'},
        {type: 'int',name: 'bdflId'},
        {type: 'boolean',name: 'presentStep'},
        //{type: 'date', name: 'date', dateFormat:'Y/m/d H:i:s'}
       // 'identifier','ggtheme', 'time','publishman','publishtime'
    ],
    proxy: {
        type: 'rest',
        url: '/order',
    }
});
