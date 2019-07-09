Ext.define('Admin.view.xzbg.gggl.GglController',{
    extend:'Ext.app.ViewController',
    alias:'controller.gggl',
    //xtype:'ggglPanel',
    openAddWindow:function(grid, rowIndex, colIndex){
        var win = grid.up('container').add(Ext.widget('add')).show();

    },
    
    openEditWindow:function(grid, rowIndex, colIndex){
        var record = grid.getStore().getAt(rowIndex);
       //获取选中数据的字段值：console.log(record.get('id')); 或者 console.log(record.data.id);
       if (record ) {
           var win = grid.up('gggl').add(Ext.widget('edit'));
           win.show();
           win.down('form').getForm().loadRecord(record);
       }
   },
   lookWindow:function(grid, rowIndex, colIndex){
    var record = grid.getStore().getAt(rowIndex);
   //获取选中数据的字段值：console.log(record.get('id')); 或者 console.log(record.data.id);
   if (record ) {
       var win = grid.up('gggl').add(Ext.widget('look'));
       win.show();
       win.down('form').getForm().loadRecord(record);
        }
    },
   //删除文件	
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

    /*Add Submit*/	
	submitAddGg:function(btn){
		var win    = btn.up('window');
		var form = win.down('form');
		var record = Ext.create('Admin.model.Ggdata');
		var values  =form.getValues();//获取form数据
		record.set(values);
		record.save();
		Ext.data.StoreManager.lookup('ggData').load();
		win.close();
    },
    //编辑提交按钮
    submitAddGg:function(btn){
		var win    = btn.up('window');
		var store = Ext.data.StoreManager.lookup('ggData');
		var values  = win.down('form').getValues();//获取form数据
		var record = store.getById(values.id);//获取id获取store中的数据
		record.set(values);//rest put 
		//store.load();
		win.close();
    },
    //查询
    onSearch:function(btn){
		var searchField = this.lookupReference('searchFieldName').getValue();
		var searchValue = this.lookupReference('searchFieldValue').getValue();

		var store =	btn.up('gridpanel').getStore();
		//var store = Ext.getCmp('userGridPanel').getStore();// Ext.getCmp(）需要在OrderPanel设置id属性
		Ext.apply(store.proxy.extraParams, {ggTheme:"",ggContent:""});
		
		if(searchField==='ggTheme'){
			Ext.apply(store.proxy.extraParams, {ggTheme:searchValue});
		}
		if(searchField==='ggContent'){
			Ext.apply(store.proxy.extraParams, {ggContent:searchValue});
			// 	createTimeStart:Ext.util.Format.date(searchDataFieldValue, 'Y/m/d H:i:s'),
			// 	createTimeEnd:Ext.util.Format.date(searchDataFieldValue2, 'Y/m/d H:i:s')
			// });
		}
		//store.load({params:{start:0, limit:20, page:1}});
	},

});