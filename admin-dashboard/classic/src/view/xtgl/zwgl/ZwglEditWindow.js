Ext.define('Admin.view.xtgl.zwgl.ZwglEditWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.zwglEditWindow',
    height: 500,
    width: 500,
    scrollable: true,
    title: '职务信息编辑',
    closable: true,
    constrain: true,
    defaultFocus: 'textfield',
    modal:true,
    layout: 'fit',
    items: [{
        xtype: 'form',
        layout: 'form',
        padding: '10px',
        ariaLabel: '职务',
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
        
        // {
        //     xtype: 'datefield',
        //     fieldLabel: 'Create Time',
        //     name:'createTime',
        //     format: 'Y/m/d H:i:s'
        // }
        ]
    }],
   buttons: ['->',{
        xtype: 'button',
        text: '确认',
        handler: 'submitEditForm'
    },{
        xtype: 'button',
        text: '关闭',
        handler: function(btn) {
            btn.up('window').close();
        }
    },'->']
  
});
