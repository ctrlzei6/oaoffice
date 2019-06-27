//视图控制器
//会员卡类型
//注意这个视图控制器不是唯一的
//在多视图中通过  controller: 'basisCard', 会创建多个视图控制器
//每个视图控制器都依赖与创建它的视图，视图销毁这个视图控制器也就随之销毁了
Ext.define('Admin.view.user.DataController', {
    //extend: 'Admin.view.main.MainController',
    extend:'Ext.app.ViewController',
    alias: 'controller.data',
    //点击文字进行编辑
    // onEditClick: function (t, rec) {
    //     this.createView(rec);
    // },
    //点击添加按钮
    // onAddClick: function () {
    //     this.createView();
    // },
    //创建视图
    onAddClick: function () {
        Ext.widget('modifiedData', {
            title:'修改资料'
            // viewModel: {
            //     data: {
            //         //根据rec判断是新增还是修改
            //         title: '修改会员卡类型: ' ,
            //         //新增则创建一个模型对象
            //         //编辑则直接赋值
            //         //用于新增编辑时操作数据，名称固定为data
            //         //data: rec ? rec : Ext.create('app.model.basis.Card')
            //     },
            //     // stores: {
            //     //     //用于新增编辑成功后保存数据，名称固定为store
            //     //     store: this.getStore('basisCardStore')
            //     // }
            // }
        });
    },
    onModifiedPassword: function(){
        Ext.widget('modifiedPassword', {
            title:'修改密码'
            // viewModel: {
            //     data: {
            //         //根据rec判断是新增还是修改
            //         title: '修改会员卡类型: ' ,
            //         //新增则创建一个模型对象
            //         //编辑则直接赋值
            //         //用于新增编辑时操作数据，名称固定为data
            //         //data: rec ? rec : Ext.create('app.model.basis.Card')
            //     },
            //     // stores: {
            //     //     //用于新增编辑成功后保存数据，名称固定为store
            //     //     store: this.getStore('basisCardStore')
            //     // }
            // }
        });
    }
    
});