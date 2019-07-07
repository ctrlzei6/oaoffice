Ext.define('Admin.view.xtgl.yggl.YgglPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'ygglPanel',

    requires: [
        'Ext.grid.Panel',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Date'
    ],
    //controller: 'searchresults',
    viewModel: {type: 'ygglViewModel'},
    layout: 'fit',
    items: [{
            xtype: 'gridpanel',
            cls: 'user-grid',
            title: '员工管理',
            //routeId: 'User',
            bind: '{userLists}',
            scrollable: false,
            columns: [
                {xtype: 'gridcolumn',width: 70,dataIndex: 'userId',text: 'ID'},
                {xtype: 'gridcolumn',width: 150, cls: 'content-column',dataIndex: 'userName',text: '员工名称'},
                {xtype: 'gridcolumn',width: 150, cls: 'content-column',hidden:true,dataIndex: 'passWord',text: '密码'},
                {xtype: 'gridcolumn',width: 150, cls: 'content-column',dataIndex: 'departId',text: '部门'},
                {xtype: 'gridcolumn',width: 150, cls: 'content-column',dataIndex: 'gender',text: '性别'},
                {xtype: 'gridcolumn',width: 150,cls: 'content-column',dataIndex: 'roleId',text: '角色'},

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
                        { name: '员工ID', value: 'userId' },
                        { name: '员工名称', value: 'userName' }
                    ]
                }),
                displayField: 'name',
                valueField:'value',
                value:'userId',
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
                bind: '{userLists}'
            }
            // ,
            // dockedItems: [{
            //     xtype: 'pagingtoolbar',
            //     dock: 'bottom',
            //     itemId: 'userPaginationToolbar',
            //     displayInfo: true,
            //     bind: '{userLists}'
            // }]
        }]
});
