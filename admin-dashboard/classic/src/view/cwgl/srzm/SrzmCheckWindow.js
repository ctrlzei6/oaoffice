Ext.define('Admin.view.cwgl.srzm.SrzmCheckWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.srzmCheckWindow',
    height: 500,
    width: 500,
    scrollable: true,
    title: '入账信息查看',
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
            name:'InAccountId',
            hidden: true,
            readOnly: true
        }, {
            xtype: 'textfield',
            fieldLabel: '收入项名',
            name:'InName',
            readOnly: true
        },{
            xtype: 'textfield',
            fieldLabel: '收入数额',
            name:'InAmoubt',
            readOnly: true
        },{
            xtype: 'textfield',
            fieldLabel: '账目检验员',
            name:'Inspecter',
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
