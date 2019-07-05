Ext.define('Admin.model.DbsyModel', {
    extend: 'Admin.model.Base',

    fields: [
        {type: 'int',name: 'id'},
        {type: 'int',name: 'liushuiid'},
        {type: 'string',name: 'worktitle'},
        {type: 'string',name: 'faqiman'},
        {type: 'string',name: 'formtype'},
        {type: 'string',name: 'presentstep'},
        //{type: 'date', name: 'date', dateFormat:'Y/m/d H:i:s'}
       // 'identifier','ggtheme', 'time','publishman','publishtime'
    ]
});
