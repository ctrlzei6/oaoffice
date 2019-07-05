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
	submitEditForm:function(btn){
		var form = btn.up('window').down('form');
		//form.getValues();
		//更新事件
	},

	//搜索
	quickSearch:function(btn){
		alert("quickSearch");
	},

	openSearchWindow:function(toolbar,rowIndex,colIndex){
		toolbar.up('grid').up('dagl').add(Ext.widget('daglSearchWindow')).show();
	},

	submitSearchForm:function(btn){
		var form = btn.up('window').down('form');
		//form.getValues();
		//更新事件
	}

	// onDisableButton:function(grid, rowIndex, colIndex){
	// 	Ext.Msg.alert("Title","Click Disable Button");
	// }
});
