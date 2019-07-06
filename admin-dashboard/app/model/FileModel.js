Ext.define('Admin.model.FileModel', {
    extend: 'Admin.model.Base',

    fields: [
        //{type: 'int',name: 'id'},
        {type: 'int',name: 'identifier'},
        {type: 'string',name: 'fileId'},
        {type: 'string',name: 'fileName'},
        {type: 'string',name: 'fileType'},
        //{type: 'date', name: 'date', dateFormat:'Y/m/d H:i:s'}
       // 'identifier','ggtheme', 'time','publishman','publishtime'
    ]
    // fields: [
    //          'identifier','fileid','fullname', 'filetype'
    //      ],
});
