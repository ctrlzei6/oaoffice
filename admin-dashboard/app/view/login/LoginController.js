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
    //登录页面启动时
    // onLoginRender: function () {
    //     var me = this;
    //     app.model.User.load(1, {
    //         success: function (user) {
    //             //如果读取到本地用户信息，自动填充到表单
    //             me.getViewModel().setData(user.getData());
    //         }
    //     });
    // },

    onSpecialkey: function (f, e) {
        var me = this;
        if (e.getKey() == e.ENTER) {
            //按回车时自动提交数据
            me.onLoginClick();
        }
    },
    //保存用户信息
    keepUser: function (user) {
        if (!user.persist) {
            user.password = '';
        }
        //id必须为int类型，否则localstorage代理不能正确存储ids
        //感谢@纳新 提醒
        user.id = 1;
        var logUser = Ext.create('Admin.model.User', user);
        //储存到本地
        logUser.save();
    },
})