Ext.define('Admin.store.file.Filedata', {
    extend: 'Ext.data.Store',

    alias: 'store.fileData',

    model: 'Admin.model.FileModel',
    // fields: [
    //     'identifier','fileid','fullname', 'filetype'
    // ],
    // data: { items: [
    //     { 
    //         id:1,
    //         fileId:"kkk001", 
    //         fileName: "我爱中国",
    //         fileExplain:'爱国教育文件', 
    //         bdflId: 1,
    //         fileUpload:'soure/wenjian/aa.txt',
    //     }
       
        
    // ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },
    autoLoad: 'true',
});
