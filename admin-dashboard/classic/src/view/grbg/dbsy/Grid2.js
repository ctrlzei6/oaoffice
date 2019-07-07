Ext.define('Admin.view.grbg.dbsy.Grid2',{
    extend:'Ext.panel.Panel',
    xtype:'grid2',
    requires:[
        //'Admin.view.ggl.List',
        'Admin.view.main.MainModel',
        'Admin.store.dbsy.Dbsydata'
    ],
    controller:'dbsyController',
    viewModel: {type: 'dbsyViewModel1'},
    laypout:'fit',
    items:[{
        xtype:'gridpanel',
        bind: '{dbsyLists}',
        tbar: [{
            xtype: 'combobox',
            reference:'searchFieldName',
            hideLabel: true,
            store:Ext.create("Ext.data.Store", {
                
                fields: ["name", "value"],
                data: [
                    { name: '所有表单类型', value: 'allbill' },
                    { name: '请假单', value: 'qjbill' },
                    { name: '项目报销单', value: 'xmbxbill' }
                ]
                
            }),
            forceSelection : true,
            displayField: 'name',
            valueField:'value',
            editable: false,
            queryMode: 'local',
            triggerAction: 'all',
            value:'allbill',
            allowBlank: false,
            width: 200,
            listeners:{
                select: 'searchComboboxSelectChuang', 
                render : function(combo) {//渲染 
                    combo.getStore().on("load", function(s, r, o) { 
                        combo.setValue(r[0].get('name'));//第一个值 
                    }); 
                } 
            }
            //logTypeCombo.setValue( logTypeCombo.store.getAt(0).get('key') );
        }, '-',{
            emptyText:'工作标题',
            xtype:'textfield',
            reference:'searchggTheme',
            name:'gglPanelSearchField'
        }, 
         '-',{
            text: '查询',
            iconCls: 'fa fa-search',
            handler: 'quickSearch'
        }, 
       
        ],
        columns: [
            {
                //xtype: 'gridcolumn',
                width: 100,
                dataIndex: 'liushuiId',
                text: '流水号'
            },
            {
               
                width: 260,
                dataIndex: 'workTitle',
                text: '工作标题',
                

            },
            {
                //xtype: 'gridcolumn',
                cls: 'content-column',
                dataIndex: 'faqiMan',
                text: '发起人',
                flex: 1
            },
            {
                //xtype: 'gridcolumn',
                cls: 'content-column',
                dataIndex: 'bdflId',
                text: '表单类型',
                flex: 1
            },
            {
                //xtype: 'datecolumn',
                cls: 'content-column',
                dataIndex: 'presentStep',
                text: '当前步骤',
                flex: 1
            },
            {
                xtype: 'actioncolumn',
                //cls: 'content-column',
                width: 200,
                text: '流程操作',
                tooltip: 'edit ',
                items:[
                    {xtype: 'button',tooltip:"查看",iconCls: 'x-fa fa-search',handler: 'look'},
                ]
            }
        ]

    }]
});