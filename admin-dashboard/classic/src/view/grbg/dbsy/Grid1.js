Ext.define('Admin.view.grbg.dbsy.Grid1',{
    extend:'Ext.panel.Panel',
    xtype:'grid1',
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
                load:function(){
                    Ext.getCmp('name').setValue(0);
                    }
      
      
                // afterRender: function(combo) {
                //     　　var firstValue = store.reader.jsonData[0].value;
                //     　　combo.setValue(firstValue);
                // }
            }
        
            //logTypeCombo.setValue( logTypeCombo.store.getAt(0).get('key') );
        }, '-',{
            emptyText:'工作标题',
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
        ],
        columns: [
            {
                //xtype: 'gridcolumn',
                width: 100,
                dataIndex: 'liushuiId',
                text: '流水号'
            },
            {
                //xtype: 'gridcolumn',
                // renderer: function(value) {
                //     return "<img src='resources/images/user-profile/" + value + "' alt='Profile Pic' height='40px' width='40px'>";
                // },
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
                xtype: 'actiontextcolumn',
                //cls: 'content-column',
                width: 200,
                //dataIndex: 'operate',
                text: '流程操作',
                tooltip: 'edit ',
                items:[
                    {
                        text:"批准",
                        width:50,
                        handler:"approve"
                    },
                    {
                        text:" 查看",
                        width:50,
                        handler:'look'
                    }
                    //{xtype: 'button', tooltip: '处理',iconCls:'x-fa fa-check',handler: 'deleteOneRow'},
                    //{xtype: 'button', tooltip: '查看',iconCls: 'x-fa fa-eye',handler: 'onDisableButton'}
                ]
            }
        ]
        // listeners: {
        //     select: 'onItemSelected'
        // }

    }]
    
});