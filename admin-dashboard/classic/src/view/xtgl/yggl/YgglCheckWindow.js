Ext.define('Admin.view.xtgl.yggl.YgglCheckWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.ygglCheckWindow',
    height: 500,
    width: 500,
    scrollable: true,
    title: '员工信息查看',
    closable: true,
    constrain: true,
    defaultFocus: 'textfield',
    modal:true,
    layout: 'fit',
    items: [{
        xtype: 'form',
        layout: 'form',
        padding: '10px',
        ariaLabel: 'check',
        items: [{
            xtype: 'textfield',
            fieldLabel: 'id',
            name:'userId',
            hidden: true,
            readOnly: true
        }, {
            xtype: 'textfield',
            fieldLabel: '员工名称',
            name:'userName',
            readOnly: true
        },{
            xtype: 'textfield',
            fieldLabel: '密码',
            name:'passWord',
            readOnly: true
        },{
            xtype: 'textfield',
            fieldLabel: '部门',
            name:'departId',
            readOnly: true
        },{
            xtype: 'textfield',
            fieldLabel: '性别',
            name:'gender',
            readOnly: true
        },{
            xtype: 'textfield',
            fieldLabel: '角色',
            name:'roleId',
            readOnly: true
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
        text: '关闭',
        handler: function(btn) {
            btn.up('window').close();
        }
    },'->']
  
});
