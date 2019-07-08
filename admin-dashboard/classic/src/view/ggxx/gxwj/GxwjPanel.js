Ext.define('Admin.view.ggxx.gxwj.GxwjPanel',{
    extend:'Ext.panel.Panel',
    requires:[
        //'Admin.view.ggl.List',
        'Admin.view.main.MainModel',
        'Admin.store.file.Filedata'
    ],
    viewModel: {type: 'gxwjViewModel'},
    xtype:'gxwjPanel',
    controller:'gxwjController',
    laypout:'fit',
    items:[{
        xtype:'gridpanel',
        title:'文件管理',
        bind: '{gxwjLists}',
        tbar: [{
            xtype: 'combobox',
            reference:'searchFieldName',
            hideLabel: true,
            
            store:Ext.create("Ext.data.Store", {
                fields: ["name", "value"],
                data: [
                      { name: '文件号', value: 'fileId' },
                    { name: '文件标题', value: 'fileName' }
                ]
            }),
            displayField: 'name',
            valueField:'value',
            //value:'orderNumber',
            editable: false,
            queryMode: 'local',
            triggerAction: 'all',
            emptyText: '选择一种查询方式',
            width: 200,
            listeners:{
                select: 'searchComboboxSelectChuang'
            }
        }, '-',{
            xtype:'textfield',
            reference:'searchFieldValue',
            name:'gxwjPanelSearchField'
        }, 
        // '-',{
        //     xtype:'textfield',
        //     reference:'searchggContent',
        //     name:'gglPanelSearchField'
        // },
         '-',{
            text: '查询',
            iconCls: 'fa fa-search',
            handler: 'quickSearch'
        }, '->',{
            text: '增加',
            tooltip: 'Add a new file',
            iconCls: 'fa fa-plus',
            handler: 'addFile'	
        }],
        
        columns: [
           
            {
                xtype: 'gridcolumn',
                width: 40,
                dataIndex: 'id',
                text: '#'
            },
            // {
            //     xtype: 'checkboxfield',
            //     checked: true
            // },
            {
                xtype: 'gridcolumn',
                width: 220,
                dataIndex: 'fileId',
                text: '文件号'
            },
            {
                xtype: 'gridcolumn',
                cls: 'content-column',
                dataIndex: 'fileName',
                text: '文件标题',
                flex: 1
            },
            {
                xtype: 'gridcolumn',
                cls: 'content-column',
                dataIndex: 'bdflId',
                text: '文件类型',
                flex: 1
            },
            {
                xtype: 'actioncolumn',
                cls: 'content-column',
                width: 180,
                //dataIndex: 'action',
                text: '相关操作',
                tooltip: 'edit ',
                items: [
                    {xtype: 'button',tooltip:"查看",iconCls: 'x-fa fa-search',handler: 'lookWindow'},
                    {xtype: 'button',tooltip:"编辑",iconCls: 'x-fa fa-pencil' ,handler: 'openEditWindow'},
                    {xtype: 'button',tooltip:"删除",iconCls: 'x-fa fa-close'	,handler: 'deleteOneRow'},
                    
                ]
            },
            
        ],

    }]
});