Ext.define('Admin.view.cwgl.zczm.ZczmAddWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.zczmAddWindow',
    height: 500,
    width: 500,
    scrollable: true,
    title: '添加支出账目',
    closable: true,
    constrain: true,
    
    defaultFocus: 'textfield',
    modal:true,
    layout: 'fit',
    items: [{
        xtype: 'form',
        layout: 'form',
        padding: '10px',
        ariaLabel: '填写支出账目',
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
        ]
    }],

    // dockedItems:{
    //     dock:'botton',
    //     items:[{
    //         xtype:'button',
    //         text: 'Submit',
    //         handler: 'htglAddFormSubmit'
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
