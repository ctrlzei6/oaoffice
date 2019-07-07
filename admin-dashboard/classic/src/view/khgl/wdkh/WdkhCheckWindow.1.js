Ext.define('Admin.view.khgl.wdkh.WdkhCheckWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.wdkhCheckWindow',
    height: 500,
    width: 500,
    scrollable: true,
    title: '我的客户查看',
    closable: true,
    constrain: true,
    defaultFocus: 'textfield',
    modal:true,
    layout: 'fit',
    items: [{
        xtype: 'form',
        layout: 'form',
        padding: '10px',
        ariaLabel: 'Check',
        items: [{
            xtype: 'textfield',
            fieldLabel: 'id',
            name:'cilentId',
            hidden: true,
            readOnly: true
        }, {
            xtype: 'textfield',
            fieldLabel: '客户姓名',
            name:'cilentName',
            readOnly: true
        },{
            xtype: 'textfield',
            fieldLabel: '客户性别',
            name:'cilentGender',
            readOnly: true
        },{
            xtype: 'textfield',
            fieldLabel: '客户描述',
            name:'intro',
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
