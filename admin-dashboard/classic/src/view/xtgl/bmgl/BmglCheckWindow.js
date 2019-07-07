Ext.define('Admin.view.xtgl.bmgl.BmglCheckWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.bmglCheckWindow',
    height: 500,
    width: 500,
    scrollable: true,
    title: '部门信息查看',
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
            name:'departId',
            hidden: true,
            readOnly: true
        }, {
            xtype: 'textfield',
            fieldLabel: '部门名称',
            name:'departName',
            readOnly: true
        },{
            xtype: 'textfield',
            fieldLabel: '部门负责人',
            name:'principalUser',
            readOnly: true
        },{
            xtype: 'textfield',
            fieldLabel: '联系电话',
            name:'connectTelNo',
            readOnly: true
        },{
            xtype: 'textfield',
            fieldLabel: '传真',
            name:'faxes',
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
