Ext.define('Admin.view.grbg.dbsy.DbsyController',{
    extend:'Ext.app.ViewController',
    alias:'controller.dbsyController',
    // dispose:function(grid, rowIndex, colIndex){
    //     var win = grid.up('dbsy').add(Ext.widget('dispose')).show();
    // },

    //批准
    approve:function(grid, rowIndex, colIndex){
        Ext.Msg.show({
            title: '提示',
            message: '是否批准？',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function (btn) {
                if (btn === 'yes') {
                    var key = grid.selModel.getLastSelected().get('liushuiId');    
                    Ext.Ajax.request({
                        url: URL + key,
                        success: function (response, opts) {
                            Ext.MessageBox.alert('提示', '已批准');
                            grid.store.reload();
                        },
                        failure: function (response, opts) {
                            Ext.MessageBox.alert('提示', '未通过');
                        }
                    });
                }
    
            }
        })
    
    },
    look:function(grid, rowIndex, colIndex){
            var record = grid.getStore().getAt(rowIndex);
           //获取选中数据的字段值：console.log(record.get('id')); 或者 console.log(record.data.id);
           if (record ) {
               var win = grid.up('dbsy').add(Ext.widget('lookWork'));
               win.show();
               win.down('form').getForm().loadRecord(record);
           }
        },

})