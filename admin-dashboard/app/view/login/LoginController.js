Ext.define('Admin.view.login.LoginController',{
    extend:'Ext.app.ViewController',
    alias:'controller.login',
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
    // onSpecialkey: function (f, e) {
    //     var me = this;
    //     if (e.getKey() == e.ENTER) {
    //         //按回车时自动提交数据
    //         me.onLoginClick();
    //     }
    // },
})