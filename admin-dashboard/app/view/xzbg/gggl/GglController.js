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
	deleteOneRow:function(grid, rowIndex, colIndex){
		Ext.Msg.confirm('提示', '确定要进行删除操作吗？数据将无法还原！',
			function(btn, text){
				if(btn=='yes'){

					var store = grid.getStore();

					var record = store.getAt(rowIndex);
					
					store.remove(record);//DELETE//http://localhost:8081/order/id
					//store.sync();
				}
      }, this);

	},

    submitAddForm:function(btn){
        var form = btn.up('window').down('form');
        //form.getValues();
        //更新事件
    },
  
    //点击名字进行查看

});