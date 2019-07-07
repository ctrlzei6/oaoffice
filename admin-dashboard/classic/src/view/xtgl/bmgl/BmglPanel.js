Ext.define('Admin.view.xtgl.bmgl.BmglPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'bmglPanel',

    requires: [
        'Ext.grid.Panel',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Date'
    ],
    //controller: 'searchresults',
    viewModel: {type: 'bmglViewModel'},
    layout: 'fit',
    items: [{
            xtype: 'gridpanel',
            cls: 'depart-grid',
            title: '部门管理',
            //routeId: 'depart',
            bind: '{departLists}',
            scrollable: false,
            columns: [
                {xtype: 'gridcolumn',width: 70,dataIndex: 'departId',text: 'ID'},
                {xtype: 'gridcolumn',width: 150, cls: 'content-column',dataIndex: 'departName',text: '部门名称'},
                {xtype: 'gridcolumn',width: 150,cls: 'content-column',dataIndex: 'principalUser',text: '部门负责人'},
                {xtype: 'gridcolumn',width: 150,cls: 'content-column',dataIndex: 'connectTelNo',text: '联系电话'},
                {xtype: 'gridcolumn',width: 150,cls: 'content-column',dataIndex: 'faxes',text: '传真'},

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
                        { name: '部门ID', value: 'departId' },
                        { name: '部门名称', value: 'departName' }
                    ]
                }),
                displayField: 'name',
                valueField:'value',
                value:'departId',
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
                bind: '{departLists}'
            }
            // ,
            // dockedItems: [{
            //     xtype: 'pagingtoolbar',
            //     dock: 'bottom',
            //     itemId: 'userPaginationToolbar',
            //     displayInfo: true,
            //     bind: '{depart}'
            // }]
        }]
});
