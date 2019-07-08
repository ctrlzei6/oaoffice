
Ext.define('Admin.view.user.DataController', {
    //extend: 'Admin.view.main.MainController',
    extend:'Ext.app.ViewController',
    alias: 'controller.data',

    onCheckClick: function (rec) {
        Ext.widget('lookcheckData', {
            //title:'资料查看'
            // viewModel:{
            //     data:{
            //         'userId':'001', 'userName':"Lisa", 'passWord':"123456",'departId':"1",'gender':"女",'roleId':"1"
            //     },
            //     // stores:{
            //     //     store:this.getStore('ygglGridStore')
            //     // }
            // }





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