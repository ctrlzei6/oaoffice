Ext.define('Admin.view.xtgl.zwgl.ZwglAddWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.zwglAddWindow',
    height: 500,
    width: 500,
    scrollable: true,
    title: '添加职务',
    closable: true,
    constrain: true,
    
    defaultFocus: 'textfield',
    modal:true,
    layout: 'fit',
    items: [{
        xtype: 'form',
        layout: 'form',
        padding: '10px',
        ariaLabel: '填写职务',
        items: [{
            xtype: 'textfield',
            fieldLabel: 'id',
            name:'RoleId',
            hidden: true,
            readOnly: true
        }, {
            xtype: 'textfield',
            fieldLabel: '角色名称',
            name:'RoleName'
        },{
            xtype: 'textfield',
            fieldLabel: '角色描述',
            name:'RoleDesc'
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
