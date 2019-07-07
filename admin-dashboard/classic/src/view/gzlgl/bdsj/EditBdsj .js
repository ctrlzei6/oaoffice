Ext.define('Admin.view.ggxx.gxwj.EditBdfl', {
    extend: 'Ext.window.Window',
    alias: 'widget.editBdsj',
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
            //readOnly: true
        }, {
            xtype: 'textfield',
            fieldLabel: '表单名称',
            name:'bdName',
            //readOnly:true
        }, 
        {
            xtype:'combo',
            fieldLabel:'文件类型',
            name: 'bdflId',
            value:0,
            store: Ext.create('Ext.data.Store', {
                fields: ["name", "value"],
                 data: [
                       { name: '行政类', value: 'xzl' },
                     { name: '办公类', value: 'bgl' }
                 ]
            }),
            queryMode: 'local',
            displayField: 'name',
            valueField: 'val',
            triggerAction: 'all',
            //readOnly:true
        },
        {
            xtype: 'textarea',
            fieldLabel: '表单内容',
            name:'bdContent',
            //readOnly:true
        }
    ]
    }],
    buttons: ['->',{
        xtype: 'button',
        text: '修改',
        handler: 'submitEditBdfl'
    },{
        xtype: 'button',
        text: '取消',
        handler: function(btn) {
            btn.up('window').close();
        }
    }]
});
