Ext.define('Admin.view.cwgl.srzm.SrzmAddWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.srzmAddWindow',
    height: 500,
    width: 500,
    scrollable: true,
    title: '添加收入账目',
    closable: true,
    constrain: true,
    
    defaultFocus: 'textfield',
    modal:true,
    layout: 'fit',
    items: [{
        xtype: 'form',
        layout: 'form',
        padding: '10px',
        ariaLabel: '填写收入账目',
        items: [{
            xtype: 'textfield',
            fieldLabel: 'id',
            name:'InAccountId',
            hidden: true,
            readOnly: true
        }, {
            xtype: 'textfield',
            fieldLabel: '收入项名',
            name:'InName'
        },{
            xtype: 'textfield',
            fieldLabel: '收入数额',
            name:'InAmoubt'
        },{
            xtype: 'textfield',
            fieldLabel: '账目检验员',
            name:'Inspecter'
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
