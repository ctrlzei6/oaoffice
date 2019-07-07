Ext.define('Admin.view.khgl.khfp.KhfpEditWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.khfpEditWindow',
    height: 500,
    width: 500,
    scrollable: true,
    title: '客户分派编辑',
    closable: true,
    constrain: true,
    defaultFocus: 'textfield',
    modal:true,
    layout: 'fit',
    items: [{
        xtype: 'form',
        layout: 'form',
        padding: '10px',
        ariaLabel: 'Enter your name',
        items: [{
            xtype: 'textfield',
            fieldLabel: 'id',
            name:'cilentId',
            hidden: true,
            readOnly: true
        }, {
            xtype: 'textfield',
            fieldLabel: '客户姓名',
            name:'cilentName'
        },{
            xtype: 'textfield',
            fieldLabel: '客户性别',
            name:'cilentGender'
        },{
            xtype: 'textfield',
            fieldLabel: '客户描述',
            name:'intro'
        },{
            xtype: 'textfield',
            fieldLabel: '分派职员',
            name:'departName'
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
