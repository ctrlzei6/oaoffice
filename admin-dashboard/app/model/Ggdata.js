Ext.define('Admin.model.Ggdata', {
    extend: 'Admin.model.Base',

    fields: [
        {type: 'int',name: 'identifier'},
        {type: 'string',name: 'ggTheme'},
        {type: 'date',name: 'creatTime',format: 'Y/m/d H:i:s'},
        {type: 'date',name: 'stopTime',format: 'Y/m/d H:i:s'},
        {type: 'string',name: 'ggContent'},
        {type: 'string',name: 'publishMan'},
        {type: 'date',name: 'publishTime',format: 'Y/m/d H:i:s'},
        //{type: 'date', name: 'date', dateFormat:'Y/m/d H:i:s'},
        //'identifier','ggtheme', 'time','publishman','publishtime'
    ],
    proxy: {
        type: 'rest',
        url: '/order',
    }
});
