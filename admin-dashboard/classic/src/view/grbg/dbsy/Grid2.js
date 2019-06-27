Ext.define('Admin.view.grbg.dbsy.Grid2',{
    extend:'Ext.panel.Panel',
    xtype:'grid2',
    requires:[
        //'Admin.view.ggl.List',
        'Admin.view.main.MainModel',
        //'Admin.store.gg.Ggdata'
    ],
    
    //viewModel: {type: 'gglViewModel'},
    laypout:'fit',
    items:[{
        xtype:'gridpanel',
        //bind: '{gglLists}',
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
                width: 100,
                dataIndex: 'liushuiid',
                text: '流水号'
            },
            {
                //xtype: 'gridcolumn',
                // renderer: function(value) {
                //     return "<img src='resources/images/user-profile/" + value + "' alt='Profile Pic' height='40px' width='40px'>";
                // },
                width: 260,
                dataIndex: 'worktitle',
                text: '工作标题',
                

            },
            {
                //xtype: 'gridcolumn',
                cls: 'content-column',
                dataIndex: 'faqiman',
                text: '发起人',
                flex: 1
            },
            {
                //xtype: 'gridcolumn',
                cls: 'content-column',
                dataIndex: 'formtype',
                text: '表单类型',
                flex: 1
            },
            {
                //xtype: 'datecolumn',
                cls: 'content-column',
                dataIndex: 'presentstep',
                text: '当前步骤',
                flex: 1
            },
            
        ]
        // listeners: {
        //     select: 'onItemSelected'
        // }

    }]
});