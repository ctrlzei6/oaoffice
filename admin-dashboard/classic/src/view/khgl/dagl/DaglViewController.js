Ext.define('Admin.view.khgl.dagl.DaglViewController', {
    extend: 'Ext.app.ViewController',
	alias: 'controller.daglViewController',
	

	//查看
	openCheckWindow:function(grid, rowIndex, colIndex){
		var record = grid.getStore().getAt(rowIndex);
		if(record){
			var win = grid.up('dagl').add(Ext.widget('daglCheckWindow'));
			win.show();
			win.down('form').getForm().loadRecord(record);
		}else{
			Ext.Msg.alert("警告","请选择一条数据进行操作！")
		}
	},
	// submitEditForm:function(btn){
	// 	var form = btn.up('window').down('form');
	// 	//form.getValues();
	// 	//更新事件
	// },

	//搜索
	quickSearch:function(btn){
		//alert("quickSearch");
		var searchField = this.lookupReference('searchFieldName').getValue();
		var searchValue = this.lookupReference('searchFieldValue').getValue();
		//var searchDataFieldValue = this.lookupReference('searchDataFieldValue').getValue();
		//var searchDataFieldValue2 = this.lookupReference('searchDataFieldValue2').getValue();
		
		var store =	btn.up('gridpanel').getStore();
		//var store = Ext.getCmp('userGridPanel').getStore();// Ext.getCmp(）需要在userPanel设置id属性
		Ext.apply(store.proxy.extraParams, {cilentId:""});
		Ext.apply(store.proxy.extraParams, {cilentName:""});
		if(searchField==='cilentId'){
			Ext.apply(store.proxy.extraParams, {cilentId:searchValue});
		};
		if(searchField==='cilentName'){
			Ext.apply(store.proxy.extraParams, {cilentName:searchValue});
		}
		// if(searchField==='createTime'){
		// 	Ext.apply(store.proxy.extraParams,{
		// 		createTimeStart:Ext.util.Format.date(searchDataFieldValue, 'Y/m/d H:i:s'),
		// 		createTimeEnd:Ext.util.Format.date(searchDataFieldValue2, 'Y/m/d H:i:s')
		// 	});
		// }
		store.load({params:{start:0, limit:20, page:1}});
	},

	// openSearchWindow:function(toolbar,rowIndex,colIndex){
	// 	toolbar.up('grid').up('dagl').add(Ext.widget('daglSearchWindow')).show();
	// },

	submitSearchForm:function(btn){
		var form = btn.up('window').down('form');
		//form.getValues();
		//更新事件
	}

	// onDisableButton:function(grid, rowIndex, colIndex){
	// 	Ext.Msg.alert("Title","Click Disable Button");
	// }
});
