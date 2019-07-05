Ext.define('Admin.view.cggl.cgdd.CgddEditWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.cgddEditWindow',
    height: 500,
    width: 500,
    scrollable: true,
    title: '订单信息编辑',
    closable: true,
    constrain: true,
    defaultFocus: 'textfield',
    modal:true,
    layout: 'fit',
    items: [{
        xtype: 'form',
        layout: 'form',
        padding: '10px',
        ariaLabel: '订单编辑',
        items: [{
            xtype: 'textfield',
            fieldLabel: '订单ID',
            name:'OrderId',
            hidden: true,
            readOnly: true
        }, {
            xtype: 'textfield',
            fieldLabel: '订单号',
            name:'OrderName'
        },{
            xtype: 'textfield',
            fieldLabel: '订单内容',
            name:'OrderTxt'
        },{
            xtype: 'datefield',
            fieldLabel: '订单日期',
            name:'OrderDate',
            format: 'Y/m/d'
        },{
            xtype: 'textfield',
            fieldLabel: '订单审批人',
            name:'AssePerson'
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
