Ext.define('Admin.view.ggxx.gxwj.GxwjController',{
    extend:'Ext.app.ViewController',
    alias:'controller.gxwjController',
    //xtype:'ggglPanel',
    addFile:function(grid, rowIndex, colIndex){
        var win = grid.up('gxwj').add(Ext.widget('addFile')).show();
    },
    //编辑文件
    openEditWindow:function(grid, rowIndex, colIndex){
        var record = grid.getStore().getAt(rowIndex);
       //获取选中数据的字段值：console.log(record.get('id')); 或者 console.log(record.data.id);
       if (record ) {
           var win = grid.up('gxwj').add(Ext.widget('editFile'));
           win.show();
           win.down('form').getForm().loadRecord(record);
       }
   },
   //查看文件
   lookWindow:function(grid, rowIndex, colIndex){
    var record = grid.getStore().getAt(rowIndex);
   //获取选中数据的字段值：console.log(record.get('id')); 或者 console.log(record.data.id);
   if (record ) {
       var win = grid.up('gxwj').add(Ext.widget('lookFile'));
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
    //查询
    onSearch:function(btn){
		var searchField = this.lookupReference('searchFieldName').getValue();
		var searchValue = this.lookupReference('searchFieldValue').getValue();

		var store =	btn.up('gridpanel').getStore();
		//var store = Ext.getCmp('userGridPanel').getStore();// Ext.getCmp(）需要在OrderPanel设置id属性
		Ext.apply(store.proxy.extraParams, {fileId:"",fileName:""});
		
		if(searchField==='fileId'){
			Ext.apply(store.proxy.extraParams, {ggTheme:searchValue});
		}
		if(searchField==='fileName'){
			Ext.apply(store.proxy.extraParams, {ggContent:searchValue});
			// 	createTimeStart:Ext.util.Format.date(searchDataFieldValue, 'Y/m/d H:i:s'),
			// 	createTimeEnd:Ext.util.Format.date(searchDataFieldValue2, 'Y/m/d H:i:s')
			// });
		}
		//store.load({params:{start:0, limit:20, page:1}});
    },
    //新建提交按钮
    // submitAddForm:function(btn){
    //     var form = btn.up('window').down('form');
    //     form.getValues();
    //     //更新事件
    // },

    submitAddForm:function(btn){
		var win    = btn.up('window');
		var form = win.down('form');
		var record = Ext.create('Admin.model.FileModel');
		var values  =form.getValues();//获取form数据
		record.set(values);
		record.save();
		Ext.data.StoreManager.lookup('fileData').load();
		win.close();
    },
    //编辑提交按钮
    submitEditForm:function(btn){
		var win    = btn.up('window');
		var store = Ext.data.StoreManager.lookup('fileData');
		var values  = win.down('form').getValues();//获取form数据
		var record = store.getById(values.id);//获取id获取store中的数据
		record.set(values);//rest put 
		//store.load();
		win.close();
	},
    // onDeleteClick: function () {
    //     //获取待删除项
    //     var rec = this.getView().getSelectionModel().getSelection()[0];
    //     Ext.widget('ggglDel', {
    //         viewModel: {
    //             data: {
    //                 data: rec,
    //                 //title: '删除课程: ' + rec.get('name')
    //             },
    //             // stores: {
    //             //     store: this.getStore('ggglStore')
    //             // }
    //         }
    //     });
    // },
    // //点击名字进行查看
    // onEditClick: function (t, rec) {
    //     this.createView(rec);
    // }

});