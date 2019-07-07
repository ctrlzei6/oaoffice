Ext.define('Admin.view.cwgl.srzm.SrzmPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'srzmPanel',

    requires: [
        'Ext.grid.Panel',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Date'
    ],
    //controller: 'searchresults',
    viewModel: {type: 'srzmViewModel'},
    layout: 'fit',
    items: [{
        xtype: 'gridpanel',
        cls: 'inAccount-grid',
        title: '收入账目',
        //routeId: 'inAccount',
        bind: '{inAccountLists}',
        scrollable: false,
        columns: [
            {xtype: 'gridcolumn',width: 70,dataIndex: 'inAccountId',text: 'ID'},
            {xtype: 'gridcolumn',width: 150, cls: 'content-column',dataIndex: 'inName',text: '收入项名'},
            {xtype: 'gridcolumn',width: 150, cls: 'content-column',dataIndex: 'inAmoubt',text: '收入数额'},
            {xtype: 'gridcolumn',width: 150,cls: 'content-column',dataIndex: 'inspecter',text: '账目检验员'},

            {xtype: 'actioncolumn',cls: 'content-column', width: 120,dataIndex: 'bool',text: '查看/编辑/删除',tooltip: 'edit ',
                items: [
                    {xtype: 'button', iconCls: 'x-fa fa-search' ,handler: 'openCheckWindow'},
                    {xtype: 'button',iconCls: 'x-fa fa-pencil'	,handler: 'openEditWindow'},
                    {xtype: 'button',iconCls: 'x-fa fa-close'	 	,handler: 'onDeleteOneRow'}
                ]
            }
        ]
        ,
        tbar: [{
            xtype: 'combobox',
            reference:'searchFieldName',
            hideLabel: true,
            store:Ext.create("Ext.data.Store", {
                fields: ["name", "value"],
                data: [
                    { name: '收入ID', value: 'inAccountId' },
                    { name: '收入项名', value: 'inName' }
                ]
            }),
            displayField: 'name',
            valueField:'value',
            value:'InAccountId',
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
            bind: '{inAccountLists}'
        }
    }]
});
