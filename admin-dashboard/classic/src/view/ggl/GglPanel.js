Ext.define('Admin.view.ggl.GglPanel',{
    extend:'Ext.panel.Panel',
    xtype:'gglPanel',
    requires:[
        //'Admin.view.ggl.List',
        'Admin.view.main.MainModel',
        'Admin.store.gg.Ggdata'
    ],
    
    viewModel: {type: 'gglViewModel'},
    laypout:'fit',
    items:[{
        xtype:'gridpanel',
        title:'公告栏',
        bind: '{gglLists}',
        tbar: [{
            xtype: 'combobox',
            reference:'searchFieldName',
            hideLabel: true,
            
            store:Ext.create("Ext.data.Store", {
                
                fields: ["name", "value"],
                data: [
                      { name: '公告主题', value: 'ggTheme' },
                    { name: '公告内容', value: 'ggContent' }
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
        }, 
        // '->',{
        //     text: '新增公告',
        //     tooltip: 'Add a new gg',
        //     iconCls: 'fa fa-plus',
        //     handler: 'onAddClick'	
        // },'-',{
        //     text: '删除公告',
        //     tooltip: 'Remove the selected item',
        //     iconCls:'fa fa-trash',
        //     itemId: 'orderGridPanelRemove',
        //     disabled: true,
        //     handler: 'deleteMoreRows'	
        // }
        ],
        columns: [
            {
                //xtype: 'gridcolumn',
                width: 40,
                dataIndex: 'identifier',
                text: '#'
            },
            {
                //xtype: 'gridcolumn',
                // renderer: function(value) {
                //     return "<img src='resources/images/user-profile/" + value + "' alt='Profile Pic' height='40px' width='40px'>";
                // },
                width: 220,
                dataIndex: 'ggtheme',
                text: '公告主题',
                

            },
            {
                //xtype: 'gridcolumn',
                cls: 'content-column',
                dataIndex: 'time',
                text: '起止日期',
                flex: 1
            },
            {
                //xtype: 'gridcolumn',
                cls: 'content-column',
                dataIndex: 'publishman',
                text: '发布人',
                flex: 1
            },
            {
                //xtype: 'datecolumn',
                cls: 'content-column',
                width: 180,
                dataIndex: 'publishtime',
                text: '发布时间'
            },
          
        ]
        // listeners: {
        //     select: 'onItemSelected'
        // }

    }]
});