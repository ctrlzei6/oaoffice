Ext.define('Admin.view.ggxx.gxwj.AddFile', {
    extend: 'Ext.window.Window',
    alias: 'widget.addFile',
    height: 550,
    minHeight: 100,
    // minWidth: 300,
    width: 800,
    //scrollable: true,
    title: '新增文件',
    //closable: true,
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
            xtype:'component',
            html:'文件类型：',
        },
        {
            xtype: 'combobox',
            //reference:'searchFieldName',
            hideLabel: true,
            store:Ext.create("Ext.data.Store", {
                html:'文件类型',
                fields: ["name", "value"],
                data: [
                      { name: '文件号', value: 'fileNo' },
                    { name: '文件标题', value: 'fileTitle' }
                ]
            }),
            displayField: 'name',
            valueField:'value',
            //value:'orderNumber',
            editable: false,
            queryMode: 'local',
            triggerAction: 'all',
            //emptyText: '选择一种查询方式',
            width: 200,
            listeners:{
                select: 'searchComboboxSelectChuang'
            }
        }
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
