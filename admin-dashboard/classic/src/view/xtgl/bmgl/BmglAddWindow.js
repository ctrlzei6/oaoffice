Ext.define('Admin.view.xtgl.bmgl.BmglAddWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.bmglAddWindow',
    height: 500,
    width: 500,
    scrollable: true,
    title: '添加部门',
    closable: true,
    constrain: true,
    
    defaultFocus: 'textfield',
    modal:true,
    layout: 'fit',
    items: [{
        xtype: 'form',
        layout: 'form',
        padding: '10px',
        ariaLabel: '填写部门',
        items: [{
            xtype: 'textfield',
            fieldLabel: 'id',
            name:'departId',
            hidden: true,
            readOnly: true
        }, {
            xtype: 'textfield',
            fieldLabel: '部门名称',
            name:'departName'
        },{
            xtype: 'textfield',
            fieldLabel: '部门负责人',
            name:'principalUser'
        },{
            xtype: 'textfield',
            fieldLabel: '联系电话',
            name:'connectTelNo'
        },{
            xtype: 'textfield',
            fieldLabel: '传真',
            name:'faxes'
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
