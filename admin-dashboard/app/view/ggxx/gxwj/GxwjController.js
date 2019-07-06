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
                var key = grid.selModel.getLastSelected().get('fileId');    
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
    // submitAddForm:function(btn){
    //     var form = btn.up('window').down('form');
    //     //form.getValues();
    //     //更新事件
    // },
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