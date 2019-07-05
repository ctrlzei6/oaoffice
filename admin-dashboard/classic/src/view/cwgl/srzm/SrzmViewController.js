Ext.define('Admin.view.cwgl.srzm.SrzmViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.srzmViewController',
    
	//添加
	openAddWindow:function(grid, rowIndex, colIndex){
		var win = grid.up('srzm').add(Ext.widget('srzmAddWindow'));
		win.show();
	},
	srzmAddFormSubmit:function(btn){
		var form = btn.up('window').down('form');
		//form.getValues();
		//更新事件
	},

	//查看
	openCheckWindow:function(grid, rowIndex, colIndex){
		var record = grid.getStore().getAt(rowIndex);
		if(record){
			var win = grid.up('srzm').add(Ext.widget('srzmCheckWindow'));
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
			var win = grid.up('srzm').add(Ext.widget('srzmEditWindow'));
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

	//搜索
	quickSearch:function(btn){
		alert("quickSearch");
	},

	openSearchWindow:function(toolbar,rowIndex,colIndex){
		toolbar.up('grid').up('srzm').add(Ext.widget('srzmSearchWindow')).show();
	},

	submitSearchForm:function(btn){
		var form = btn.up('window').down('form');
		//form.getValues();
		//更新事件
	}
});
