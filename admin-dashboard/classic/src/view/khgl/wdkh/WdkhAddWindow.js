Ext.define('Admin.view.wdkh.WdkhAddWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.wdkhAddWindow',
    height: 500,
    width: 500,
    scrollable: true,
    title: '添加客户信息',
    closable: true,
    constrain: true,
    
    defaultFocus: 'textfield',
    modal:true,
    layout: 'fit',
    items: [{
        xtype: 'form',
        layout: 'form',
        padding: '10px',
        ariaLabel: 'Enter your name',
        items: [{
            xtype: 'textfield',
            fieldLabel: 'id',
            name:'cilentId',
            hidden: true,
            readOnly: true
        }, {
            xtype: 'textfield',
            fieldLabel: '客户姓名',
            name:'cilentName'
        },{
            xtype: 'textfield',
            fieldLabel: '客户性别',
            name:'cilentGender'
        },{
            xtype: 'textfield',
            fieldLabel: '客户描述',
            name:'intro'}
        // }, {
        //     xtype: 'datefield',
        //     fieldLabel: 'Create Time',
        //     name:'createTime',
        //     format: 'Y/m/d H:i:s'
        ]
    }],

    // dockedItems:{
    //     dock:'botton',
    //     items:[{
    //         xtype:'button',
    //         text: 'Submit',
    //         handler: 'wdkhAddFormSubmit'
    //     },{
    //         xtype: 'button',
    //         text: 'Close',
    //         handler: function(btn) {
    //             btn.up('window').close();
    //         }
    //     }]
    // }


	buttons: ['->',{
        xtype: 'button',
        text: '确认',
        handler: 'submitAddForm'
    },{
        xtype: 'button',
        text: '关闭',
        handler: function(btn) {
            btn.up('window').close();
        }
    },'->']
});
