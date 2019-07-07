Ext.define('Admin.view.cggl.cgdd.CgddViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.cgddViewController',
    
	//添加
	openAddWindow:function(grid, rowIndex, colIndex){
		var win = grid.up('cgdd').add(Ext.widget('cgddAddWindow'));
		win.show();
	},
	cgddAddFormSubmit:function(btn){
		var form = btn.up('window').down('form');
		//form.getValues();
		//更新事件
	},

	//查看
	openCheckWindow:function(grid, rowIndex, colIndex){
		var record = grid.getStore().getAt(rowIndex);
		if(record){
			var win = grid.up('cgdd').add(Ext.widget('cgddCheckWindow'));
			win.show();
			win.down('form').getForm().loadRecord(record);
		}else{
			Ext.Msg.alert("警告","请选择一条数据进行操作！")
		}
	},
	openCheckWindow2:function(grid, rowIndex, colIndex){
		var record = grid.getStore().getAt(rowIndex);
		if(record){
			var win = grid.up('lscx').add(Ext.widget('cgddCheckWindow'));
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
			var win = grid.up('cgdd').add(Ext.widget('cgddEditWindow'));
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
		toolbar.up('grid').up('cgdd').add(Ext.widget('cgddSearchWindow')).show();
	},

	submitSearchForm:function(btn){
		var form = btn.up('window').down('form');
		//form.getValues();
		//更新事件
	}
});
