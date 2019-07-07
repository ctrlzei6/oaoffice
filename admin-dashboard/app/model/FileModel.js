Ext.define('Admin.model.FileModel', {
    extend: 'Admin.model.Base',

    fields: [
        //{type: 'int',name: 'id'},
        {type: 'int',name: 'id'},
        {type: 'string',name: 'fileId'},
        {type: 'string',name: 'fileName'},
        {type: 'string',name: 'fileExplain'},
        {type: 'int',name: 'bdflId'},
        {type: 'string',name: 'fileUpload'}
        //{type: 'date', name: 'date', dateFormat:'Y/m/d H:i:s'}
       // 'identifier','ggtheme', 'time','publishman','publishtime'
    ],
    proxy: {
        type: 'rest',
        url: '/order',
    }
    
});
