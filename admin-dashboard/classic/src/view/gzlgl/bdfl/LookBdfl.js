Ext.define('Admin.view.ggxx.gxwj.LookBdfl', {
    extend: 'Ext.window.Window',
    alias: 'widget.lookBdfl',
    height: 450,
    minHeight: 100,
    // minWidth: 300,
    width: 800,
    scrollable: true,
    title: '文件详情',
    closable: true,
    constrain: true,
    //defaultFocus: 'textfield',
    modal:true,
    layout: 'fit',
    items: [{
        xtype: 'form',
        layout: 'form',
        padding: '10px',
        //ariaLabel: 'Enter your name',
        readOnly: true,
        items: [{
            xtype: 'textfield',
            fieldLabel: 'bdflId',
            name:'id',
            hidden: true,
            readOnly: true
        }, {
            xtype: 'textfield',
            fieldLabel: '分类名称',
            name:'flName',
            readOnly:true
        }, {
            xtype: 'textarea',
            fieldLabel: '备注',
            name:'remark',
            readOnly:true
        }
    ]
    }]
});
