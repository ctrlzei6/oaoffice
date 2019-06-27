Ext.define('Admin.view.xzbg.xjgz.XjgzPanel',{
    extend:'Ext.panel.Panel',
    xtype:'xjgzPanel',
    requires:[
        //'Admin.view.ggl.List',
        'Admin.view.main.MainModel',
        //'Admin.store.gg.Ggdata'
    ],
    //controller:'gggl',//映射到控制层
    //reference: 'ggglPanel',
    //viewModel: {type: 'gglViewModel'},
    laypout:'fit',
    items:[{
        xtype:'gridpanel',
        title:'表单分类',
        //bind: '{gglLists}',
        tbar: [{
            xtype: 'combobox',
            reference:'searchFieldName',
            hideLabel: true,
            
            store:Ext.create("Ext.data.Store", {
                
                fields: ["name", "value"],
                data: [
                    { name: '项目单据类', value: 'xmdj' },
                    { name: ' 报表报告类', value: 'bbbg' }
                ]
            }),
            displayField: 'name',
            valueField:'value',
            //value:'orderNumber',
            editable: false,
            queryMode: 'local',
            triggerAction: 'all',
            emptyText: '选择表单类别',
            width: 200,
            listeners:{
                select: 'searchComboboxSelectChuang'
            }
        }, '-',{
            xtype: 'combobox',
            reference:'searchFieldName',
            hideLabel: true,
            
            store:Ext.create("Ext.data.Store", {
                
                fields: ["name", "value"],
                data: [
                      { name: '请假条', value: 'qjt' },
                    { name: '费用报销单', value: 'fybx' }
                ]
            }),
            displayField: 'name',
            valueField:'value',
            //value:'orderNumber',
            editable: false,
            queryMode: 'local',
            triggerAction: 'all',
            emptyText: '选择表单',
            width: 200,
            listeners:{
                select: 'searchComboboxSelectChuang'
            }
        }, 
        // '-',{
        //     xtype:'textfield',
        //     reference:'searchggContent',
        //     name:'gglPanelSearchField'
        // },
          '->',{
            text: '新建',
            //tooltip: 'Add a new gg',
            iconCls: 'fa fa-plus',
            handler: 'openAddWindow'
            
            
        },'-',{
            text: '删除',
            //tooltip: 'Remove the selected item',
            iconCls:'fa fa-trash',
            //itemId: 'orderGridPanelRemove',
            disabled: true,
            handler:'onDeleteClick',
            itemId: 'orderGridPanelRemove'
            // bind: {
            //     disabled: '{!ggglPanel.selection}'
            // },
        
        }],
        selModel: {
            selType: 'checkboxmodel',
            checkOnly: true,
            showHeaderCheckbox: true,
            
        },
        listeners: { //监听是否选中，灰色按钮变可用
            selectionchange: function(selModel, selections){
                this.down('#orderGridPanelRemove').setDisabled(selections.length === 0);
            }
        },
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
            }
            
        ]

    }]
});