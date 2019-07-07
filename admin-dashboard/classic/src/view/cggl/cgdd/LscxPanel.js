Ext.define('Admin.view.cggl.cgdd.LscxPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'lscxPanel',

    requires: [
        'Ext.grid.Panel',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Date',
        'Ext.ux.form.SearchField'
    ],
    //controller: 'searchresults',
    viewModel: {type: 'cgddViewModel'},
    layout: 'fit',
    items: [{
        xtype: 'gridpanel',
        cls: 'order-grid',
        title: '采购订单',
        //routeId: 'order',
        bind: '{orderLists}',
        scrollable: false,
        columns: [
            {xtype: 'gridcolumn',width: 70,dataIndex: 'orderId',text: '订单ID'},
            {xtype: 'gridcolumn',width: 150, cls: 'content-column',dataIndex: 'orderName',text: '订单号'},
            {xtype: 'gridcolumn',width: 150, cls: 'content-column',hidden:true,dataIndex: 'orderTxt',text: '订单内容'},
            {xtype: 'datecolumn',width: 150,cls: 'content-column',dataIndex: 'orderDate',format: 'Y/m/d',text: '订单日期'},
            {xtype: 'gridcolumn',cls: 'content-column',width: 300,dataIndex: 'assePerson',text: '订单审批人'},

            {xtype: 'actioncolumn',cls: 'content-column', width: 120,dataIndex: 'bool',text: '查看',tooltip: 'edit ',
                items: [
                    {xtype: 'button', iconCls: 'x-fa fa-search' ,handler: 'openCheckWindow2'}
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
                    { name: '订单ID', value: 'orderId' },
                    { name: '订单号', value: 'orderName' }
                ]
            }),
            displayField: 'name',
            valueField:'value',
            value:'orderId',
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
            name:'orderPanelSearchField'
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
        }
        ],

        bbar:{
            xtype: 'pagingtoolbar',
            displayInfo:true,
            displayMsg:'页数 {0} - {1}  of {2}',
            emptyMsg:"无数据",
            bind: '{orderLists}'
        }
        // ,
        // dockedItems: [{
        //     xtype: 'pagingtoolbar',
        //     dock: 'bottom',
        //     itemId: 'userPaginationToolbar',
        //     displayInfo: true,
        //     bind: '{orderLists}'
        // }]
    }]
});
