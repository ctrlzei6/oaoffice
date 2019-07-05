Ext.define('Admin.model.FileModel', {
    extend: 'Admin.model.Base',

    fields: [
        {type: 'int',name: 'id'},
        {type: 'int',name: 'identifier'},
        {type: 'string',name: 'fileid'},
        {type: 'string',name: 'filename'},
        {type: 'string',name: 'filetype'},
        //{type: 'date', name: 'date', dateFormat:'Y/m/d H:i:s'}
       // 'identifier','ggtheme', 'time','publishman','publishtime'
    ]
    // fields: [
    //          'identifier','fileid','fullname', 'filetype'
    //      ],
});
