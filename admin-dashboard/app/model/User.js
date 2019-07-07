Ext.define('Admin.model.User', {
    extend: 'Admin.model.Base',

    fields: [
        {type: 'string',name: 'username'},
        {type: 'string',name: 'password'},
        {type: 'int',name: 'departId'},
        {type: 'string',name: 'gender'},
		{type: 'int',name: 'roleId'}
        //{type: 'date', name: 'date', dateFormat:'Y/m/d H:i:s'},
        //'identifier','ggtheme', 'time','publishman','publishtime'
    ],
    // proxy: {
    //     //本地储存
    //     type: 'localstorage',
    //     id: 'demo-login-user'
    // },
    proxy: {
        type: 'rest',
        url: '/order',
    }
});
