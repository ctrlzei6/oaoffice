Ext.define('Admin.view.gzlgl.bdsj.BdsjPanel',{
    extend:'Ext.panel.Panel',
    xtype:'bdsjPanel',
    requires:[
        //'Admin.view.ggl.List',
        'Admin.view.main.MainModel',
        'Admin.store.gzlgl.bdsj.BdsjData'
    ],
    controller:'bdsjController',//映射到控制层
    //reference: 'ggglPanel',
    viewModel: {type: 'bdsjViewModel'},
    laypout:'fit',
    items:[{
        xtype:'gridpanel',
        title:'表单分类',
        bind: '{bdsjLists}',
        tbar: [{
            xtype: 'combobox',
            reference:'searchFieldName',
            hideLabel: true,
            
            store:Ext.create("Ext.data.Store", {
                
                fields: ["name", "value"],
                data: [
                      { name: '表单名称', value: 'bdname' },
                    { name: '表单分类', value: 'bdclassify' }
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
            reference:'searchggTheme',
            name:'gglPanelSearchField'
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
            text: '新建',
            //tooltip: 'Add a new gg',
            iconCls: 'fa fa-plus',
            handler: 'openAddWindow'
            
            
        },
        ],
        
        columns: [
           
            {
                xtype: 'gridcolumn',
                width: 40,
                dataIndex: 'bdId',
                text: '#'
            },
            {
                xtype: 'gridcolumn',
                flex: 1,
                dataIndex: 'bdName',
                text: '表单名称',
                // listeners: {
                //     linkclick: 'onEditClick'
                // }
            },
            {
                xtype: 'gridcolumn',
                cls: 'content-column',
                flex: 1,
                dataIndex: 'bdflId',
                text: '表单分类'
            },
            {
                xtype: 'actioncolumn',
                cls: 'content-column',
                dataIndex: 'xgcz',
                text: '相关操作',
                width:150,
                items: [
                    {xtype: 'button',tooltip:"查看",iconCls: 'x-fa fa-search',handler: 'lookWindow'},
                    {xtype: 'button',tooltip:"编辑",iconCls: 'x-fa fa-pencil' ,handler: 'openEditWindow'},
                    {xtype: 'button',tooltip:"删除",iconCls: 'x-fa fa-close'	,handler: 'deleteOneRow'},
                ]
            }
            
        ],

    }]
});