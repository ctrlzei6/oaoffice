Ext.define('Admin.view.xtgl.yggl.YgglEditWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.ygglEditWindow',
    height: 500,
    width: 500,
    scrollable: true,
    title: '员工信息编辑',
    closable: true,
    constrain: true,
    defaultFocus: 'textfield',
    modal:true,
    layout: 'fit',
    items: [{
        xtype: 'form',
        layout: 'form',
        padding: '10px',
        ariaLabel: '部门',
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
