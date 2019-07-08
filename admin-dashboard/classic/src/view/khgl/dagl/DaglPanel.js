Ext.define('Admin.view.khgl.dagl.DaglPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'daglPanel',

    requires: [
        'Ext.grid.Panel',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Date',
        'Ext.ux.form.SearchField'
    ],
    //controller: 'searchresults',
    viewModel: {type: 'daglViewModel'},
    layout: 'fit',
    items: [
        {
            xtype: 'gridpanel',
            cls: 'cilent-grid',
            title: '客户档案', 
            //routeId: 'cilent',
            bind: '{cilentLists}',
            scrollable: false,
            
            columns: [
                {xtype: 'gridcolumn',width: 70,dataIndex: 'cilentId',text: 'ID'},
                {xtype: 'gridcolumn',width: 150, cls: 'content-column',dataIndex: 'cilentName',text: '客户姓名'},
                {xtype: 'gridcolumn',width: 75,cls: 'content-column',dataIndex: 'cilentGender',text: '客户性别'},
                {xtype: 'gridcolumn',cls: 'content-column',width: 300,hidden:true,dataIndex: 'intro',text: '客户介绍'},
                {xtype: 'gridcolumn',cls: 'content-column',width: 200,dataIndex: 'departName',text: '对接职工'},
                {xtype: 'actioncolumn',cls: 'content-column', width: 120,dataIndex: 'bool',text: '查看',tooltip: 'edit ',
                    layout: 'vbox',
                    items: [
                        {xtype: 'button',iconCls: 'x-fa fa-search',handler: 'openCheckWindow'}
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
            	name:'daglPanelSearchField'
            }, 
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
                bind: '{cilentLists}',
                // items:['-',{
                //     xtype:'button',
                //     text:'点击'
                // }
                // ]
            }
        }]
});