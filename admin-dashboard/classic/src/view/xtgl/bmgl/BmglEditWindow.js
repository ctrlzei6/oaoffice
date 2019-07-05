Ext.define('Admin.view.xtgl.bmgl.BmglEditWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.bmglEditWindow',
    height: 500,
    width: 500,
    scrollable: true,
    title: '部门信息编辑',
    closable: true,
    constrain: true,
    defaultFocus: 'textfield',
    modal:true,
    layout: 'fit',
    items: [{
        xtype: 'form',
        layout: 'form',
        padding: '10px',
        ariaLabel: '部门',
        items: [{
            xtype: 'textfield',
            fieldLabel: 'id',
            name:'DepartId',
            hidden: true,
            readOnly: true
        }, {
            xtype: 'textfield',
            fieldLabel: '部门名称',
            name:'DepartName'
        },{
            xtype: 'textfield',
            fieldLabel: '部门负责人',
            name:'PrincipalUser'
        },{
            xtype: 'textfield',
            fieldLabel: '联系电话',
            name:'ConnectTelNo'
        },{
            xtype: 'textfield',
            fieldLabel: '传真',
            name:'Faxes'
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
