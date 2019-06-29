Ext.define('Admin.view.ggxx.gxwj.EditFile', {
    extend: 'Ext.window.Window',
    alias: 'widget.editFile',
    height: 450,
    minHeight: 100,
    // minWidth: 300,
    width: 800,
    scrollable: true,
    title: '编辑文件',
    closable: true,
    constrain: true,
    defaultFocus: 'textfield',
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
            fieldLabel: 'id',
            name:'id',
            hidden: true,
            readOnly: true
        }, {
            xtype: 'textfield',
            fieldLabel: '文件号',
            name:'fileId'
        }, {
            xtype: 'textfield',
            fieldLabel: '文件标题',
            name:'fileTitle'
        }, 
        {
            xtype:'combo',
            fieldLabel:'文件类型：',
            name: 'fileTitle',
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
        },
    ]
    }],
	buttons: ['->',{
        xtype: 'button',
        text: '确定',
        handler: 'submitAddForm'
    },{
        xtype: 'button',
        text: '取消',
        handler: function(btn) {
            btn.up('window').close();
        }
    },'->']
});
