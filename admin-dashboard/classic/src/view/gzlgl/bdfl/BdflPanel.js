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
        },'-',{
            text: '修改',
            //tooltip: 'Remove the selected item',
            iconCls:'fa fa-trash',
            //itemId: 'orderGridPanelRemove',
            disabled: true,
            handler:'onAlterClick',
            itemId: 'orderGridPanelAlter'
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
                xtype: 'gridcolumn',
                width: 40,
                dataIndex: 'identifier',
                text: '#'
            },
            // {
            //     xtype: 'checkboxfield',
            //     checked: true
            // },
            {
                xtype: 'gridcolumn',
                // renderer: function(value) {
                //     return "<img src='resources/images/user-profile/" + value + "' alt='Profile Pic' height='40px' width='40px'>";
                // },
                width: 220,
                dataIndex: 'flname',
                text: '分类名称',
                listeners: {
                    linkclick: 'onEditClick'
                }
            },
            // {
            //     xtype: 'gridcolumn',
            //     cls: 'content-column',
            //     dataIndex: 'time',
            //     text: '起止日期',
            //     flex: 1
            // },
            // {
            //     xtype: 'gridcolumn',
            //     cls: 'content-column',
            //     dataIndex: 'publishman',
            //     text: '发布人',
            //     flex: 1
            // },
            {
                xtype: 'datecolumn',
                cls: 'content-column',
                //width: 180,
                flex: 1,
                dataIndex: 'remark',
                text: '备注'
            },
            // {
            //     xtype: 'gridcolumn',
            //     cls: 'content-column',
            //     dataIndex: 'subscription',
            //     text: 'Subscription',
            //     flex: 1
            // },
            // {
            //     xtype: 'actioncolumn',
            //     items: [
            //         {
            //             xtype: 'button',
            //             iconCls: 'x-fa fa-pencil'
            //         },
            //         {
            //             xtype: 'button',
            //             iconCls: 'x-fa fa-close'
            //         },
            //         {
            //             xtype: 'button',
            //             iconCls: 'x-fa fa-ban'
            //         }
            //     ],

            //     cls: 'content-column',
            //     width: 120,
            //     dataIndex: 'bool',
            //     text: 'Actions',
            //     tooltip: 'edit '
            // }
        ],

    }]
});