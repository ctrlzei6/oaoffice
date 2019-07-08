
Ext.define('Admin.view.user.DataController', {
    //extend: 'Admin.view.main.MainController',
    extend:'Ext.app.ViewController',
    alias: 'controller.data',

    onCheckClick: function () {
        Ext.widget('lookcheckData', {
            title:'资料查看',
                viewModel: {
                    data: {
                        //根据rec判断是新增还是修改
                        //title: rec ? '修改会员卡类型: ' + rec.get('type') : '新增会员卡类型',
                        //新增则创建一个模型对象
                        //编辑则直接赋值
                        //用于新增编辑时操作数据，名称固定为data
                        data:Ext.create('Admin.model.User')
                    },
                    // stores: {
                    //     //用于新增编辑成功后保存数据，名称固定为store
                    //     store: this.getStore('basisCardStore')
                    // }
                }
            });
    },
    // onCheckClick:function(grid, rowIndex, colIndex){
    //     var record = grid.getStore().getAt(rowIndex);
    //    //获取选中数据的字段值：console.log(record.get('id')); 或者 console.log(record.data.id);
    //    if (record ) {
    //        var win = grid.up('gggl').add(Ext.widget('look'));
    //        win.show();
    //        win.down('form').getForm().loadRecord(record);
    //         }
    //     },
    onAddClick: function () {
        Ext.widget('modifiedData', {
            title:'修改资料'
           
        });
    },
    onModifiedPassword: function(){
        Ext.widget('modifiedPassword', {
            title:'修改密码'
            
        });
    }
    
});