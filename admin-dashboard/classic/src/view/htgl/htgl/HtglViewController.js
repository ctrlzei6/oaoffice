Ext.define('Admin.view.htgl.htgl.HtglViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.htglViewController',
    
	//添加
	openAddWindow:function(grid, rowIndex, colIndex){
		var win = grid.up('htgl').add(Ext.widget('htglAddWindow'));
		win.show();
	},
	htglAddFormSubmit:function(btn){
		var form = btn.up('window').down('form');
		//form.getValues();
		//更新事件
	},

	//查看
	openCheckWindow:function(grid, rowIndex, colIndex){
		var record = grid.getStore().getAt(rowIndex);
		if(record){
			var win = grid.up('htgl').add(Ext.widget('htglCheckWindow'));
			win.show();
			win.down('form').getForm().loadRecord(record);
		}else{
			Ext.Msg.alert("警告","请选择一条数据进行操作！")
		}
	},
	
	//查看
	openCheckWindow2:function(grid, rowIndex, colIndex){
		var record = grid.getStore().getAt(rowIndex);
		if(record){
			var win = grid.up('httj').add(Ext.widget('htglCheckWindow'));
			win.show();
			win.down('form').getForm().loadRecord(record);
		}else{
			Ext.Msg.alert("警告","请选择一条数据进行操作！")
		}
	},

	//编辑
	openEditWindow:function(grid, rowIndex, colIndex){
		var record = grid.getStore().getAt(rowIndex);
		if(record){
			var win = grid.up('htgl').add(Ext.widget('htglEditWindow'));
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

	//删除
	onDeleteOneRow:function(grid, rowIndex, colIndex){

		Ext.Msg.alert("删除该条数据","Click Delete Button");
	}, 

	// onDeleteMoreRows:function(grid, rowIndex, colIndex){

	// 	Ext.Msg.alert("删除多条数据","Click Delete Button");
	// }, 


	//搜索
	quickSearch:function(btn){
		alert("quickSearch");
	},

	openSearchWindow:function(toolbar,rowIndex,colIndex){
		toolbar.up('grid').up('htgl').add(Ext.widget('htglSearchWindow')).show();
	},

	submitSearchForm:function(btn){
		var form = btn.up('window').down('form');
		//form.getValues();
		//更新事件
	}
});
