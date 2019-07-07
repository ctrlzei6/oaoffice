Ext.define('Admin.view.ggl.GglPanel',{
    extend:'Ext.panel.Panel',
    xtype:'gglPanel',
    requires:[
        //'Admin.view.ggl.List',
        'Admin.view.main.MainModel',
        'Admin.store.gg.Ggdata'
    ],
    reference:"gglPanel",
    controller:'gglController',
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
            reference:'searchFieldValue',
            name:'gglPanelSearchField'
        }, 
        
         '-',{
            text: '查询',
            iconCls: 'fa fa-search',
            handler: 'onSearch'
        }, 
        
        ],
        columns: [
            {
                //xtype: 'gridcolumn',
                width: 40,
                dataIndex: 'identifier',
                text: '#'
            },
            {
                xtype: 'uxColumn',
                width: 220,
                dataIndex: 'ggTheme',
                text: '公告主题',
                listeners: {
                    //监听点击事件
                    linkclick: 'look'
                }

            },
            {
                //xtype: 'gridcolumn',
                cls: 'content-column',
                dataIndex: 'creatTime',
                text: '开始日期',
                flex: 1
            },
            {
                //xtype: 'gridcolumn',
                cls: 'content-column',
                dataIndex: 'stopTime',
                text: '结束日期',
                flex: 1
            },
            {
                //xtype: 'gridcolumn',
                cls: 'content-column',
                dataIndex: 'publishMan',
                text: '发布人',
                flex: 1
            },
            {
                //xtype: 'datecolumn',
                cls: 'content-column',
                width: 180,
                dataIndex: 'publishTime',
                text: '发布时间'
            },
          
        ]
        // listeners: {
        //     select: 'onItemSelected'
        // }

    }]
});