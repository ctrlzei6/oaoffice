Ext.define('Admin.model.BdsjModel', {
    extend: 'Admin.model.Base',

    fields: [
        {type: 'int',name: 'bdId'},
        {type: 'string',name: 'bdName'},
        {type: 'string',name: 'bdClassify'}
        //{type: 'date', name: 'date', dateFormat:'Y/m/d H:i:s'}
       // 'identifier','ggtheme', 'time','publishman','publishtime'
    ],
    proxy: {
        type: 'rest',
        url: '/order',
    }
});
