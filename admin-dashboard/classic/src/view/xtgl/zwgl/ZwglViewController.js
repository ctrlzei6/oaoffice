Ext.define('Admin.view.xtgl.zwgl.ZwglViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.zwglViewController',
    
	//添加
	openAddWindow:function(grid, rowIndex, colIndex){
		var win = grid.up('zwgl').add(Ext.widget('zwglAddWindow'));
		win.show();
	},
	zwglAddFormSubmit:function(btn){
		var form = btn.up('window').down('form');
		//form.getValues();
		//更新事件
	},

	//查看
	openCheckWindow:function(grid, rowIndex, colIndex){
		var record = grid.getStore().getAt(rowIndex);
		if(record){
			var win = grid.up('zwgl').add(Ext.widget('zwglCheckWindow'));
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
			var win = grid.up('zwgl').add(Ext.widget('zwglEditWindow'));
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
		Ext.MessageBox.confirm('提示', '确定要进行删除操作吗？',
  			function(btn, text){
            	if(btn=='yes'){
            		var store = grid.getStore();
					var record = store.getAt(rowIndex);
					store.remove(record);//DELETE //http://localhost:8081/zwgl/112
					//store.sync();
				}
        	}
        , this);
	}, 

	//搜索
	quickSearch:function(btn){
		//alert("quickSearch");
		var searchField = this.lookupReference('searchFieldName').getValue();
		var searchValue = this.lookupReference('searchFieldValue').getValue();
		//var searchDataFieldValue = this.lookupReference('searchDataFieldValue').getValue();
		//var searchDataFieldValue2 = this.lookupReference('searchDataFieldValue2').getValue();
		
		var store =	btn.up('gridpanel').getStore();
		//var store = Ext.getCmp('userGridPanel').getStore();// Ext.getCmp(）需要在userPanel设置id属性
		Ext.apply(store.proxy.extraParams, {roleId:""});
		Ext.apply(store.proxy.extraParams, {roleName:""});
		if(searchField==='roleId'){
			Ext.apply(store.proxy.extraParams, {roleId:searchValue});
		};
		if(searchField==='roleName'){
			Ext.apply(store.proxy.extraParams, {roleName:searchValue});
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
	// 	toolbar.up('grid').up('zwgl').add(Ext.widget('zwglSearchWindow')).show();
	// },

	submitSearchForm:function(btn){
		var form = btn.up('window').down('form');
		//form.getValues();
		//更新事件
	},

	//添加确认
	submitAddForm:function(btn){
		var win    = btn.up('window');
		var form = win.down('form');
		var record = Ext.create('Admin.model.glmodel.xtgl.zwgl.ZwglModel');
		var values  =form.getValues();//获取form数据
		record.set(values);
		record.save();
		Ext.data.StoreManager.lookup('zwglGridStore').load();
		win.close();
	},

	//编辑确认
	submitEditForm:function(btn){
		var win    = btn.up('window');
		var store = Ext.data.StoreManager.lookup('zwglGridStore');
		var values  = win.down('form').getValues();//获取form数据
		var record = store.getById(values.id);//获取id获取store中的数据
		record.set(values);//rest put 
		store.load();
		win.close();
	}
});
