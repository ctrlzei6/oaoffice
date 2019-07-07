Ext.define('Admin.view.xtgl.zwgl.ZwglCheckWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.zwglCheckWindow',
    height: 500,
    width: 500,
    scrollable: true,
    title: '职务信息查看',
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
            name:'roleId',
            hidden: true,
            readOnly: true
        }, {
            xtype: 'textfield',
            fieldLabel: '角色名称',
            name:'roleName',
            readOnly: true
        },{
            xtype: 'textfield',
            fieldLabel: '角色描述',
            name:'roleDesc',
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
