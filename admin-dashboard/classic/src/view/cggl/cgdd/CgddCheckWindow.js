Ext.define('Admin.view.cggl.cgdd.CgddCheckWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.cgddCheckWindow',
    height: 500,
    width: 500,
    scrollable: true,
    title: '订单信息查看',
    closable: true,
    constrain: true,
    defaultFocus: 'textfield',
    modal:true,
    layout: 'fit',
    items: [{
        xtype: 'form',
        layout: 'form',
        padding: '10px',
        ariaLabel: '查看订单',
        items: [{
            xtype: 'textfield',
            fieldLabel: '订单ID',
            name:'OrderId',
            hidden: true,
            readOnly: true
        }, {
            xtype: 'textfield',
            fieldLabel: '订单号',
            name:'OrderName',
            readOnly: true
        },{
            xtype: 'textfield',
            fieldLabel: '订单内容',
            name:'OrderTxt',
            readOnly: true
        },{
            xtype: 'datefield',
            fieldLabel: '订单日期',
            name:'OrderDate',
            format: 'Y/m/d',
            readOnly: true
        },{
            xtype: 'textfield',
            fieldLabel: '订单审批人',
            name:'AssePerson',
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
