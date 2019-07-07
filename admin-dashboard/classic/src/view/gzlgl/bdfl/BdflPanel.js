Ext.define('Admin.view.gzlgl.bdfl.BdflPanel',{
    extend:'Ext.panel.Panel',
    xtype:'bdflPanel',
    requires:[
        //'Admin.view.ggl.List',
        'Admin.view.main.MainModel',
        //'Admin.store.gg.Ggdata'
    ],
    //controller:'gggl',//映射到控制层
    //reference: 'ggglPanel',
    viewModel: {type: 'bdflViewModel'},
    laypout:'fit',
    items:[{
        xtype:'gridpanel',
        title:'表单分类',
        bind: '{bdflLists}',
        tbar: [{
            xtype: 'combobox',
            reference:'searchFieldName',
            hideLabel: true,
            
            store:Ext.create("Ext.data.Store", {
                
                fields: ["name", "value"],
                data: [
                      { name: '分类名称', value: 'flname' },
                    { name: '备注', value: 'remark' }
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
                dataIndex: 'bdflId',
                text: '#'
            },
            
            {
                xtype: 'gridcolumn',
    
                width: 220,
                dataIndex: 'flName',
                text: '分类名称',
                // listeners: {
                //     linkclick: 'onEditClick'
                // }
            },
    
            {
                xtype: 'gridcolumn',
                cls: 'content-column',
                //width: 180,
                flex: 1,
                dataIndex: 'remark',
                text: '备注'
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