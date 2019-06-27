Ext.define('Admin.view.user.ModifiedController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.modifiedPassword',
    onWindowChange: function () {
        this.modelReject();
        this.onClose();
    },
    //关闭弹窗
    onClose: function () {
        this.getView().close();
    },
    modelReject: function () {
        var model = this.getViewModel().get('data');
        if (model && model.data) {
            //取消模型的更改
            model.reject();
        }
    },
    init:function(){
    // *********新建**********
        var editForm = new Ext.create('Admin.view.user.ModifiedPassword',{
            // buttons:[
            //     {
            //         text:'保存',
            //     },
            //     {
            //         text:'关闭',
            //         handler:function(){
            //                     EditWin.hide();
            //                 }
            //     }
            // ]
        });
       
        //获取到这个按钮
        var editBtn = Ext.ComponentManager.get('ModifiedPassword');
        //修改按钮点击事件
        editBtn.on('click', ModifiedPassword);
       
        //添加按钮单击事件
        function ModifiedPassword() {
            editForm.form.reset();
            EditWin.show();
        }
        
        //新增窗口
        var EditWin = new Ext.Window({
            title:'修改密码',
            modal: true,//遮罩层
            width:480,
            closeAction:'hide',//若不写这个，x只能点一次，然后就没有然后了
            resizable: false,//默认是true
            plain: true,
            //buttonAlign: 'center',
            items: editForm
        })
    }
});