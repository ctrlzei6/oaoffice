Ext.define('Admin.view.khgl.htgl.HtglCheckWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.htglCheckWindow',
    height: 500,
    width: 500,
    scrollable: true,
    title: '合同信息查看',
    closable: true,
    constrain: true,
    defaultFocus: 'textfield',
    modal:true,
    layout: 'fit',
    items: [{
        xtype: 'form',
        layout: 'form',
        padding: '10px',
        ariaLabel: 'check',
        items: [{
            xtype: 'textfield',
            fieldLabel: 'id',
            name:'cilentId',
            hidden: true,
            readOnly: true
        }, {
            xtype: 'textfield',
            fieldLabel: '合同名称',
            name:'compactName',
            readOnly: true
        },{
            xtype: 'textfield',
            fieldLabel: '合同内容',
            name:'compactTxt',
            readOnly: true
        },{
            xtype: 'datefield',
            fieldLabel: '签订日期',
            name:'compactqdrq',
            format: 'Y/m/d',
            readOnly: true
        },{
            xtype: 'datefield',
            fieldLabel: '合同期限',
            name:'compactqixian',
            format: 'Y/m/d',
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
