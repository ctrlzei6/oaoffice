Ext.define('Admin.view.xzbg.gggl.BdflController',{
    extend:'Ext.app.ViewController',
    alias:'controller.bdfl',
    //xtype:'ggglPanel',
    addfl:function(grid, rowIndex, colIndex){
        var win = grid.up('container').add(Ext.widget('addFl')).show();
    },
    
    openEditWindow:function(grid, rowIndex, colIndex){
        var record = grid.getStore().getAt(rowIndex);
       //获取选中数据的字段值：console.log(record.get('id')); 或者 console.log(record.data.id);
       if (record ) {
           var win = grid.up('bdfl').add(Ext.widget('editBdfl'));
           win.show();
           win.down('form').getForm().loadRecord(record);
       }
   },
   lookWindow:function(grid, rowIndex, colIndex){
    var record = grid.getStore().getAt(rowIndex);
   //获取选中数据的字段值：console.log(record.get('id')); 或者 console.log(record.data.id);
   if (record ) {
       var win = grid.up('bdfl').add(Ext.widget('lookBdfl'));
       win.show();
       win.down('form').getForm().loadRecord(record);
        }
    },
   //删除文件	
   deleteOneRow:function(grid, rowIndex, colIndex){
        Ext.Msg.show({
            title: '提示',
            message: '是否确认删除？',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function (btn) {
                if (btn === 'yes') {
                    var key = grid.selModel.getLastSelected().get('id');    
                    Ext.Ajax.request({
                        url: URL + key,
                        success: function (response, opts) {
                            Ext.MessageBox.alert('提示', '删除成功');
                            grid.store.reload();
                        },
                        failure: function (response, opts) {
                            Ext.MessageBox.alert('提示', '删除异常');
                        }
                    });
                }
    
            }
        })

	},

    /*Add Submit*/	
	submitAddBdfl:function(btn){
		var win    = btn.up('window');
		var form = win.down('form');
		var record = Ext.create('Admin.model.BdflModel');
		var values  =form.getValues();//获取form数据
		record.set(values);
		record.save();
		Ext.data.StoreManager.lookup('bdflData').load();
		win.close();
    },
    //修改按钮
    submitEditBdfl:function(btn){
		var win    = btn.up('window');
		var store = Ext.data.StoreManager.lookup('bdflData');
		var values  = win.down('form').getValues();//获取form数据
		var record = store.getById(values.bdflId);//获取id获取store中的数据
		record.set(values);//rest put 
		//store.load();
		win.close();
	},

});