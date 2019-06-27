Ext.define('Admin.view.ggxx.gxwj.GxwjController',{
    extend:'Ext.app.ViewController',
    alias:'controller.gxwj',
    //xtype:'ggglPanel',
    addFile:function(grid, rowIndex, colIndex){
        var win = grid.up('container').add(Ext.widget('addFile')).show();
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