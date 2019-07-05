Ext.define('Admin.view.xtgl.yggl.YgglAddWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.ygglAddWindow',
    height: 500,
    width: 500,
    scrollable: true,
    title: '添加员工',
    closable: true,
    constrain: true,
    
    defaultFocus: 'textfield',
    modal:true,
    layout: 'fit',
    items: [{
        xtype: 'form',
        layout: 'form',
        padding: '10px',
        ariaLabel: '填写员工',
        items: [{
            xtype: 'textfield',
            fieldLabel: 'id',
            name:'UserId',
            hidden: true,
            readOnly: true
        }, {
            xtype: 'textfield',
            fieldLabel: '员工名称',
            name:'UserName'
        },{
            xtype: 'textfield',
            fieldLabel: '密码',
            name:'PassWord'
        },{
            xtype: 'textfield',
            fieldLabel: '部门',
            name:'DepartId'
        },{
            xtype: 'textfield',
            fieldLabel: '性别',
            name:'Gender'
        },{
            xtype: 'textfield',
            fieldLabel: '角色',
            name:'RoleId'
        }
        ]
    }],

    // dockedItems:{
    //     dock:'botton',
    //     items:[{
    //         xtype:'button',
    //         text: 'Submit',
    //         handler: 'htglAddFormSubmit'
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
