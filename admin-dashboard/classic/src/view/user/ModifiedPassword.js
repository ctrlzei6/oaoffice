Ext.define('Admin.view.user.ModifiedPassword',{
    extend:'Ext.window.Window',
    xtype:'modifiedPassword',
    autoShow: true,
    controller:'seset',
    layout:'column',
    defaults:{
        style:'float:left;margin:4px;',
        columnWidth: 0.48
    },
    width:550,
    height:350,
    defaultType:'textfield',
    fieldDefaults:{
        labelAlign:'right',
        labelWidth:84                                 
    },

    items:[
        {
            fieldLabel: '原密码',
            name: 'pripassword',
            columnWidth: 0.96
        },
        {
            fieldLabel: '新密码',
            name: 'newpassword',
            columnWidth: 0.96
        },
        {
            fieldLabel: '确认新密码',
            name: 'qnewpassword',
            columnWidth: 0.96
        }
        
    ],
    buttons: [{
        text: '保存',
        handler: 'onSave'
    },
    {
        text: '取消',
        //关闭弹窗，需要重置模型数据
        handler: 'onWindowChange',
        ui: 'default-toolbar'
    }]
})