Ext.define('Admin.model.Ggdata', {
    extend: 'Admin.model.Base',

    fields: [
        {type: 'int',name: 'identifier'},
        {type: 'string',name: 'ggTheme'},
        {type: 'date',name: 'creatTime'},
        {type: 'date',name: 'stopTime'},
        {type: 'string',name: 'publishMan'},
        {type: 'date',name: 'publishTime'},
        //{type: 'date', name: 'date', dateFormat:'Y/m/d H:i:s'},
        //'identifier','ggtheme', 'time','publishman','publishtime'
    ]
});
