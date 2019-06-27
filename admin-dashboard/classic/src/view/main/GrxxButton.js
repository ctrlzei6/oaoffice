Ext.define('Admin.view.main.GrxxButton', {
    extend: 'Ext.Container',
    xtype: 'grxxButton',
    //requires:['Admin.view.user.ModifiedController'],
    //controller: 'modifiedPassword',
    controller:'data',
                                                
    //viewModel: 'main',
    //layout: 'vbox',
    //width: 590,

    items: [ {
        defaults: {
            menu: [{
              
                text:'修改密码',
                handler: 'onModifiedPassword'
            },{
                text:'修改资料',
                //id: 'ModifiedData',
                handler:'onAddClick'
            }]
        },

        items: [{
            xtype: 'button',
            iconCls: 'button-home-small',
            text: '个人选项'
        }]
    }]
});