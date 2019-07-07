Ext.define('Admin.view.khgl.wdkh.WdkhPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'wdkhPanel',

    requires: [
        'Ext.grid.Panel',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Date',
        'Ext.ux.form.SearchField'
    ],
    //controller: 'searchresults',


    viewModel: {type: 'wdkhViewModel'},
    layout: 'fit',
    items: [
        {
            xtype: 'gridpanel',
            cls: 'cilent-grid',
            title: '我的客户', 
            //routeId: 'cilent',
            bind: '{cilentLists}',
            scrollable: false,

            selModel:{
                type:'checkboxmodel',
                checkOnly:true
            },
            
            columns: [
                {xtype: 'gridcolumn',width: 70,dataIndex: 'cilentId',text: 'ID'},
                {xtype: 'gridcolumn',width: 150, cls: 'content-column',dataIndex: 'cilentName',text: '客户姓名'},
                {xtype: 'gridcolumn',width: 75,cls: 'content-column',dataIndex: 'cilentGender',text: '客户性别'},
                {xtype: 'gridcolumn',cls: 'content-column',width: 300,hidden:true,dataIndex: 'intro',text: '客户介绍'},

                {xtype: 'actioncolumn',cls: 'content-column', width: 120,dataIndex: 'bool',text: '查看/编辑/删除',tooltip: 'edit ',
                    items: [
                        {xtype: 'button', iconCls: 'x-fa fa-search' ,handler: 'openCheckWindow'},
                        {xtype: 'button', iconCls: 'x-fa fa-pencil' ,handler: 'openEditWindow'},
                        {xtype: 'button',iconCls: 'x-fa fa-close'	,handler: 'onDeleteOneRow'}
                        // {xtype: 'button',iconCls: 'x-fa fa-ban'	 	,handler: 'onDisableButton'}
                    ]
                }
            ],
            // tbar:['->',{
            //     text:'add',
            //     tooltip:'Add a new row',
            //     iconCls:'fa fa-plus',
            //     handler:'openAddWindow'
            // }],

            tbar: [{
	            xtype: 'combobox',
	            reference:'searchFieldName',
	            hideLabel: true,
	            store:Ext.create("Ext.data.Store", {
				    fields: ["name", "value"],
				    data: [
				      	{ name: '客户ID', value: 'cilentId' },
						{ name: '客户姓名', value: 'cilentName' }
				    ]
				}),
	            displayField: 'name',
	            valueField:'value',
	            value:'cilentId',
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
            	name:'wdkhPanelSearchField'
            }, 
            // '-',{
			// 	xtype: 'datefield',
			// 	hideLabel: true,
			// 	hidden:true,
			// 	format: 'Y/m/d H:i:s',
			// 	reference:'searchDataFieldValue',
			// 	fieldLabel: 'From',
			// 	name: 'from_date'
			// 	//,id:'from_date',
			// 	//vtype: 'daterange',
			// 	//endDateField: 'to_date'
            // }, 
            // {
			// 	xtype: 'datefield',
			// 	hideLabel: true,
			// 	hidden:true,
			// 	format: 'Y/m/d H:i:s',
			// 	reference:'searchDataFieldValue2',
			// 	fieldLabel: 'To',
			// 	name: 'to_date'
			// 	//,id:'to_date',
			// 	//vtype: 'daterange',
			// 	//startDateField: 'from_date'
            // },
            '-',{
		        text: '查询',
		        iconCls: 'fa fa-search',
		        handler: 'quickSearch'
            }, 
            // '-',{
		    //     text: 'Search More',
		    //     iconCls: 'fa fa-search-plus',
		    //     handler: 'openSearchWindow'	
            // }, 
            '->',{
		        text: '添加',
		        tooltip: 'Add a new row',
		        iconCls: 'fa fa-plus',
		        handler: 'openAddWindow'	
            }
            // ,'-',{
		    //     text: 'Removes',
		    //     tooltip: 'Remove the selected item',
		    //     iconCls:'fa fa-trash',
		    //     //itemId: 'wdkhGridPanelRemove',
		    //     disabled: true,
		    //     handler: 'deleteMoreRows'	
            // }
            ],

            bbar:{
                xtype: 'pagingtoolbar',
                displayInfo:true,
                displayMsg:'页数 {0} - {1}  of {2}',
                emptyMsg:"无数据",
                bind: '{cilentLists}',
                // items:['-',{
                //     xtype:'button',
                //     text:'点击'
                // }
                // ]
            }
            // ,dockedItems: [{
            //     xtype: 'toolbar',
            //     dock: 'top',
            //     items: {   
            //         width: "25%",
            //         fieldLabel: 'Login Name:',
            //         labelWidth:100,
            //         xtype: 'searchfield',
            //         bind: '{cilentLists}'
            //    }
                
            // },{
            //     xtype: 'pagingtoolbar',
            //     bind: '{cilentLists}',
            //     dock: 'bottom',
            //     displayInfo: true
            // }]
        }]
});