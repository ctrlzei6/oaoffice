Ext.define('Admin.view.khgl.wdkh.WdkhEditWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.wdkhEditWindow',
    height: 500,
    width: 500,
    scrollable: true,
    title: '我的客户编辑',
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
            name:'CilentId',
            hidden: true,
            readOnly: true
        }, {
            xtype: 'textfield',
            fieldLabel: '客户姓名',
            name:'CilentName'
        },{
            xtype: 'textfield',
            fieldLabel: '客户性别',
            name:'CilentGender'
        },{
            xtype: 'textfield',
            fieldLabel: '客户描述',
            name:'Intro'}
        
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
