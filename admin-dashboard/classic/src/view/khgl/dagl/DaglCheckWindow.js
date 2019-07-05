Ext.define('Admin.view.khgl.dagl.DaglCheckWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.daglCheckWindow',
    height: 500,
    width: 500,
    scrollable: true,
    title: '客户档案查看',
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
            name:'CilentId',
            hidden: true,
            readOnly: true
        }, {
            xtype: 'textfield',
            fieldLabel: '客户姓名',
            name:'CilentName',
            readOnly: true
        },{
            xtype: 'textfield',
            fieldLabel: '客户性别',
            name:'CilentGender',
            readOnly: true
        },{
            xtype: 'textfield',
            fieldLabel: '客户描述',
            name:'Intro',
            readOnly: true
        },{
            xtype: 'textfield',
            fieldLabel: '对接职员',
            name:'DepartName',
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
