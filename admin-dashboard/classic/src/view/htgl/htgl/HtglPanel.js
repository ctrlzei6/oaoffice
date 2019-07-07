Ext.define('Admin.view.Htgl.htgl.HtglPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'htglPanel',

    requires: [
        'Ext.grid.Panel',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Date',
        'Ext.ux.form.SearchField'
    ],
    //controller: 'searchresults',
    viewModel: {type: 'htglViewModel'},
    layout: 'fit',
    items: [{
        xtype: 'gridpanel',
        cls: 'compact-grid',
        title: '合同管理',
        //routeId: 'compact',
        bind: '{compactLists}',
        scrollable: false,

        selModel:{
            type:'checkboxmodel',
            checkOnly:true
        },

        columns: [
            {xtype: 'gridcolumn',width: 70,dataIndex: 'compactId',text: '合同ID'},
            {xtype: 'gridcolumn',width: 150,dataIndex: 'compactName',text: '合同名称'},
            {xtype: 'gridcolumn',width: 150, cls: 'content-column',hidden:true,dataIndex: 'compactTxt',text: '合同内容'},
            {xtype: 'datecolumn',width: 150,cls: 'content-column',dataIndex: 'compactqdrq',format: 'Y/m/d',text: '签订日期'},
            {xtype: 'datecolumn',width: 150,cls: 'content-column',dataIndex: 'compactqixian',format: 'Y/m/d',text: '合同期限'},

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
                    { name: '合同ID', value: 'compactId' },
                    { name: '合同名称', value: 'compactName' }
                ]
            }),
            displayField: 'name',
            valueField:'value',
            value:'compactId',
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
        // '-',{
        // 	xtype: 'datefield',
        // 	hideLabel: true,
        // 	//hidden:true,
        // 	format: 'Y/m/d',
        // 	reference:'searchDataFieldValue',
        // 	fieldLabel: 'From',
        // 	name: 'from_date'
        // 	,id:'Compactqdrq',
        // 	//vtype: 'daterange',
        // 	//endDateField: 'to_date'
        // }, 
        // {
        // 	xtype: 'datefield',
        // 	hideLabel: true,
        // 	//hidden:true,
        // 	format: 'Y/m/d',
        // 	reference:'searchDataFieldValue2',
        // 	fieldLabel: 'To',
        // 	name: 'to_date'
        // 	//,id:'Compactqixian',
        // 	//vtype: 'daterange',
        // 	//startDateField: 'from_date'
        // },
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
            bind: '{compactLists}'
        }
    }]

});
