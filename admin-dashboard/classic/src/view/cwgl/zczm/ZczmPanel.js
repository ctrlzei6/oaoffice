Ext.define('Admin.view.cwgl.zczm.ZczmPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'zczmPanel',

    requires: [
        'Ext.grid.Panel',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Date'
    ],
    //controller: 'searchresults',
    viewModel: {type: 'zczmViewModel'},
    layout: 'fit',
    items: [{
            xtype: 'gridpanel',
            cls: 'outAccount-grid',
            title: '支出账目',
            //routeId: 'outAccount',
            bind: '{outAccountLists}',
            scrollable: false,
            columns: [
                {xtype: 'gridcolumn',width: 70,dataIndex: 'outAccountId',text: 'ID'},
                {xtype: 'gridcolumn',width: 150, cls: 'content-column',dataIndex: 'outName',text: '支出项名'},
                {xtype: 'gridcolumn',width: 150, cls: 'content-column',dataIndex: 'outAmoubt',text: '支出数额'},
                {xtype: 'gridcolumn',width: 150,cls: 'content-column',dataIndex: 'outspecter',text: '账目检验员'},

                {xtype: 'actioncolumn',cls: 'content-column', width: 120,dataIndex: 'bool',text: '查看/编辑/删除',tooltip: 'edit ',
                    items: [
                        {xtype: 'button', iconCls: 'x-fa fa-search' ,handler: 'openCheckWindow'},
                        {xtype: 'button',iconCls: 'x-fa fa-pencil'	,handler: 'openEditWindow'},
                        {xtype: 'button',iconCls: 'x-fa fa-close'	 	,handler: 'onDeleteOneRow'}
                    ]
                }
            ],
            tbar: [{
                xtype: 'combobox',
                reference:'searchFieldName',
                hideLabel: true,
                store:Ext.create("Ext.data.Store", {
                    fields: ["name", "value"],
                    data: [
                        { name: '支出ID', value: 'outAccountId' },
                        { name: '支出项名', value: 'outName' }
                    ]
                }),
                displayField: 'name',
                valueField:'value',
                value:'outAccountId',
                editable: false,
                queryMode: 'local',
                triggerAction: 'all',
                emptyText: 'Select a state...',
                width: 135,
                // listeners:{
                // 	select: 'searchComboboxSelectChuang'
                // }
            }, '-',{
                xtype:'textfield',
                reference:'searchFieldValue',
                //name:'orderPanelSearchField'
            }, 
            '-',{
                text: '查询',
                iconCls: 'fa fa-search',
                handler: 'quickSearch'
            }, 
            '->',{
                text: '添加',
                tooltip: 'Add a new row',
                iconCls: 'fa fa-plus',
                handler: 'openAddWindow'	
            }
            ],
    
            bbar:{
                xtype: 'pagingtoolbar',
                displayInfo:true,
                displayMsg:'页数 {0} - {1}  of {2}',
                emptyMsg:"无数据",
                bind: '{OutAccountLists}'
            }
            // ,
            // dockedItems: [{
            //     xtype: 'pagingtoolbar',
            //     dock: 'bottom',
            //     itemId: 'userPaginationToolbar',
            //     displayInfo: true,
            //     bind: '{outAccountLists}'
            // }]
        }]
});
