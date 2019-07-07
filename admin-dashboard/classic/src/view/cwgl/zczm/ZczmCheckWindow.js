Ext.define('Admin.view.cwgl.zczm.ZczmCheckWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.zczmCheckWindow',
    height: 500,
    width: 500,
    scrollable: true,
    title: '支出信息查看',
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
            name:'outAccountId',
            hidden: true,
            readOnly: true
        }, {
            xtype: 'textfield',
            fieldLabel: '支出项名',
            name:'outName',
            readOnly: true
        },{
            xtype: 'textfield',
            fieldLabel: '支出数额',
            name:'outAmoubt',
            readOnly: true
        },{
            xtype: 'textfield',
            fieldLabel: '账目检验员',
            name:'outspecter',
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
