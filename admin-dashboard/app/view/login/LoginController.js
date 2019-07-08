Ext.define('Admin.view.login.LoginController',{
    extend:'Ext.app.ViewController',
    alias:'controller.login',

    //点击登录
    onLoginClick: function() {
        window.location.reload();
        // Set the localStorage value to true
        localStorage.setItem("TutorialLoggedIn", true);

        // Remove Login Window
        this.getView().destroy();

        // Add the main view to the viewport
        Ext.create({
            xtype: 'main'
        });

    },
    // onLoginClick: function () {
    //     var me = this,
    //         //view = me.getView(),
    //         form = view.down('form'),
    //         values = form.getValues();
    //     //请求登录接口
    //     util.ajaxB(userData, values, 'POST').then(function (response) {
    //         if (response.success) {
    //             me.keepUser(values);
    //             //登录成功
    //             me.loginSuccess(response.userData);
    //             //this.redirectTo('main');
    //         } else {
    //             //登录失败
    //             form.getForm().setValues({
    //                 password: ''
    //             });
    //         }
    //         //提示消息
    //        // Ext.toast(response.message);
    //     });
    // },
    loginSuccess: function (data) {
        //全局变量写入用户信息
        // config.userData = data;
        // //关闭弹窗
        // this.getView().close();
        //触发路由
        //由核心控制器接收路由，处理登录成功流程
        this.redirectTo('main');
    },
    //登录页面启动时
    onLoginRender: function () {
        var me = this;
        Admin.model.User.load(1, {
            success: function (login) {
                //如果读取到本地用户信息，自动填充到表单
                me.getViewModel().setData(login.getData());
            }
        });
    },

    onSpecialkey: function (f, e) {
        var me = this;
        if (e.getKey() == e.ENTER) {
            //按回车时自动提交数据
            me.onLoginClick();
        }
    },
    //保存用户信息
    keepUser: function (login) {
        if (!login.persist) {
            login.password = '';
        }
        //id必须为int类型，否则localstorage代理不能正确存储ids
        //感谢@纳新 提醒
        user.id = 1;
        var logUser = Ext.create('Admin.model.User', login);
        //储存到本地
        logUser.save();
    },
})