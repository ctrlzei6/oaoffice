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
		Ext.MessageBox.confirm('提示', '确定要进行删除操作吗？',
  			function(btn, text){
            	if(btn=='yes'){
            		var store = grid.getStore();
					var record = store.getAt(rowIndex);
					store.remove(record);//DELETE //http://localhost:8081/wdkh/112
					//store.sync();

					Ext.Ajax.request({
                        url:"http://localhost:8080/ssh-demo/order/deletes",
                        params:{
                            "id":1
                        },
                        method:"POSt",
                        //type:
                        //url: URL + key,
                        success: function (response, opts) {
                            Ext.MessageBox.alert('提示', '删除成功');
                            //grid.store.reload();
                        },
                        failure: function (response, opts) {
                            Ext.MessageBox.alert('提示', '删除异常');
                        }
                    });
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
		Ext.apply(store.proxy.extraParams, {outAccountId:""});
		Ext.apply(store.proxy.extraParams, {outName:""});
		if(searchField==='outAccountId'){
			Ext.apply(store.proxy.extraParams, {outAccountId:searchValue});
		};
		if(searchField==='outName'){
			Ext.apply(store.proxy.extraParams, {outName:searchValue});
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
	// 	toolbar.up('grid').up('srzm').add(Ext.widget('srzmSearchWindow')).show();
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
		var record = Ext.create('Admin.model.glmodel.cwgl.srzm.SrzmModel');
		var values  =form.getValues();//获取form数据
		record.set(values);
		record.save();
		Ext.data.StoreManager.lookup('srzmGridStore').load();
		win.close();
	},

	//编辑确认
	submitEditForm:function(btn){
		var win    = btn.up('window');
		var store = Ext.data.StoreManager.lookup('srzmGridStore');
		var values  = win.down('form').getValues();//获取form数据
		var record = store.getById(values.id);//获取id获取store中的数据
		record.set(values);//rest put 
		store.load();
		win.close();
	}
});
