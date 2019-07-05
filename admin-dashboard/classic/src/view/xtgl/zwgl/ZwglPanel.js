Ext.define('Admin.view.xtgl.zwgl.ZwglPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'zwglPanel',

    requires: [
        'Ext.grid.Panel',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Date'
    ],
    //controller: 'searchresults',
    viewModel: {type: 'zwglViewModel'},
    layout: 'fit',
    items: [{
            xtype: 'gridpanel',
            cls: 'role-grid',
            title: '职务管理',
            //routeId: 'role',
            bind: '{roleLists}',
            scrollable: false,
            columns: [
                {xtype: 'gridcolumn',width: 70,dataIndex: 'RoleId',text: 'ID'},
                {xtype: 'gridcolumn',width: 150, cls: 'content-column',dataIndex: 'RoleName',text: '角色名称'},
                {xtype: 'gridcolumn',width: 150,cls: 'content-column',dataIndex: 'RoleDesc',text: '角色描述'},

                {xtype: 'actioncolumn',cls: 'content-column', width: 120,dataIndex: 'bool',text: '查看/编辑/删除',tooltip: 'edit ',
                    items: [
                        {xtype: 'button', iconCls: 'x-fa fa-search' ,handler: 'openCheckWindow'},
                        {xtype: 'button',iconCls: 'x-fa fa-pencil'	,handler: 'openEditWindow'},
                        {xtype: 'button',iconCls: 'x-fa fa-close'	,handler: 'onDeleteOneRow'}
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
                        { name: '角色ID', value: 'RoleId' },
                        { name: '角色名称', value: 'RoleName' }
                    ]
                }),
                displayField: 'name',
                valueField:'value',
                value:'RoleId',
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
                bind: '{roleLists}'
            }
            // ,
            // dockedItems: [{
            //     xtype: 'pagingtoolbar',
            //     dock: 'bottom',
            //     itemId: 'userPaginationToolbar',
            //     displayInfo: true,
            //     bind: '{roleLists}'
            // }]
        }]
});
