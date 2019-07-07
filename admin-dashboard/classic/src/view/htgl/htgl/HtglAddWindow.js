Ext.define('Admin.view.htgl.HtglAddWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.htglAddWindow',
    height: 500,
    width: 500,
    scrollable: true,
    title: '添加合同信息',
    closable: true,
    constrain: true,
    
    defaultFocus: 'textfield',
    modal:true,
    layout: 'fit',
    items: [{
        xtype: 'form',
        layout: 'form',
        padding: '10px',
        ariaLabel: '填写合同',
        items: [{
            xtype: 'textfield',
            fieldLabel: 'id',
            name:'compactId',
            hidden: true,
            readOnly: true
        }, {
            xtype: 'textfield',
            fieldLabel: '合同名称',
            name:'compactName'
        },{
            xtype: 'textfield',
            fieldLabel: '合同内容',
            name:'compactTxt'
        },{
            xtype: 'datefield',
            fieldLabel: '签订日期',
            name:'compactqdrq',
            format: 'Y/m/d'
        },{
            xtype: 'datefield',
            fieldLabel: '合同期限',
            name:'compactqixian',
            format: 'Y/m/d'
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
