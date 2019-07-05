Ext.define('Admin.view.cggl.cgdd.CgddAddWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.cgddAddWindow',
    height: 500,
    width: 500,
    scrollable: true,
    title: '添加采购订单',
    closable: true,
    constrain: true,
    
    defaultFocus: 'textfield',
    modal:true,
    layout: 'fit',
    items: [{
        xtype: 'form',
        layout: 'form',
        padding: '10px',
        ariaLabel: '填写订单',
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
        ]
    }],

    // dockedItems:{
    //     dock:'botton',
    //     items:[{
    //         xtype:'button',
    //         text: 'Submit',
    //         handler: 'cgddAddFormSubmit'
    //     },{
    //         xtype: 'button',
    //         text: 'Close',
    //         handler: function(btn) {
    //             btn.up('window').close();
    //         }
    //     }]
    // }


	buttons: ['->',{
        xtype: 'button',
        text: '确认',
        handler: 'submitAddForm'
    },{
        xtype: 'button',
        text: '关闭',
        handler: function(btn) {
            btn.up('window').close();
        }
    },'->']
});
