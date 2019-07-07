Ext.define('Admin.view.cwgl.zczm.ZczmEditWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.zczmEditWindow',
    height: 500,
    width: 500,
    scrollable: true,
    title: '支出账目编辑',
    closable: true,
    constrain: true,
    defaultFocus: 'textfield',
    modal:true,
    layout: 'fit',
    items: [{
        xtype: 'form',
        layout: 'form',
        padding: '10px',
        ariaLabel: '支出',
        items: [{
            xtype: 'textfield',
            fieldLabel: 'id',
            name:'outAccountId',
            hidden: true,
            readOnly: true
        }, {
            xtype: 'textfield',
            fieldLabel: '支出项名',
            name:'outName'
        },{
            xtype: 'textfield',
            fieldLabel: '支出数额',
            name:'outAmoubt'
        },{
            xtype: 'textfield',
            fieldLabel: '账目检验员',
            name:'outspecter'
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
