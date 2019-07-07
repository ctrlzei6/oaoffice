Ext.define('Admin.view.gzlgl.bdfl.AddFl', {
    extend: 'Ext.window.Window',
    alias: 'widget.addFl',
    height: 550,
    minHeight: 100,
    // minWidth: 300,
    width: 1020,
    //scrollable: true,
    title: '新建表单类型',
    //closable: true,
    constrain: true,
    autoShow: true,
    defaultFocus: 'textfield',
    modal:true,

    layout: 'fit',
    items: [{
        xtype: 'form',
        layout: 'form',
        padding: '10px',
        ariaLabel: 'Enter your name',
        items: [
        {
            xtype: 'textfield',
            fieldLabel: '#',
            name:'identifier',
            hidden: true,
            readOnly: true
        }, {
            xtype: 'textfield',
            fieldLabel: '分类名称',
            name:'flName'
        },  
        {
            xtype: 'textarea',
            fieldLabel: '备注',
            height:120,
            name:'remark'
        }]
    }],
	buttons: ['->',{
        xtype: 'button',
        text: '添加',
        handler: 'submitAddBdfl'
    },{
        xtype: 'button',
        text: '取消',
        handler: function(btn) {
            btn.up('window').close();
        }
    }]
});
