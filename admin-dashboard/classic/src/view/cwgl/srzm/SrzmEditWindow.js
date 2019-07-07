Ext.define('Admin.view.cwgl.srzm.SrzmEditWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.srzmEditWindow',
    height: 500,
    width: 500,
    scrollable: true,
    title: '入账信息编辑',
    closable: true,
    constrain: true,
    defaultFocus: 'textfield',
    modal:true,
    layout: 'fit',
    items: [{
        xtype: 'form',
        layout: 'form',
        padding: '10px',
        ariaLabel: '收入账目',
        items: [{
            xtype: 'textfield',
            fieldLabel: 'id',
            name:'inAccountId',
            hidden: true,
            readOnly: true
        }, {
            xtype: 'textfield',
            fieldLabel: '收入项名',
            name:'inName'
        },{
            xtype: 'textfield',
            fieldLabel: '收入数额',
            name:'inAmoubt'
        },{
            xtype: 'textfield',
            fieldLabel: '账目检验员',
            name:'inspecter'
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
