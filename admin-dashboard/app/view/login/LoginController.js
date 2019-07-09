Ext.define('Admin.view.login.LoginController',{
    extend:'Ext.app.ViewController',
    alias:'controller.login',

    onLoginClick: function () {
        var me = this,
            view = me.getView(),
            form = view.down('form'),
            values = form.getValues();
        //请求登录接口
        util.ajaxB(Admin.view.login.Login, values, 'POST').then(function (response) {
            if (response.success) {
                me.keepUser(values);
                //登录成功
                me.loginSuccess(response.data);
            } else {
                //登录失败
                form.getForm().setValues({
                    password: ''
                });
            }
            //提示消息
            Ext.toast(response.message);
        });
    },
    //登录成功
    loginSuccess: function (data) {
        //全局变量写入用户信息
        config.userData = data;
        //关闭弹窗
        //this.getView().close();
        //触发路由
        //由核心控制器接收路由，处理登录成功流程
        this.redirectTo('main');
    },

    //点击登录
    onLoginClick: function() {
        //window.location.reload();
        // Set the localStorage value to true
        //localStorage.setItem("TutorialLoggedIn", true);

        // loginWindo.form.submit({
        //     clientValidation:true,
        //     waitMsg:'正在登录中。。。',//单击登录按钮后提示消息
        //     url:'',
        //     method:'POST',
        //     success:function(form,action){
        //     var jsontext = Ext.decode(action.response.responseText);
        //     Ext.Msg.alert('登录提示',"登录成功"+jsontext.msg);
        //     },
        //     failure:function(){
        //     Ext.Msg.alert('登录提示','登录失败');
        //     }
        // });

        var form = this.lookupReference("form");
        if(form.isValid()) {
			this.getView().destroy();
			Ext.create({
                xtype: 'main'
            });
        }
        
        // Remove Login Window
        // this.getView().destroy();

        // Add the main view to the viewport
        // Ext.create({
        //     xtype: 'main'
        // });

        // var loginvalues = Ext.util.JSON.encode(btn.up('window').down('form').getForm().getValues());
        // Ext.Ajax.request({
        //     url: '',
        //     params: loginvalues,
        //     method: 'post',
        //     useDefaultXhrHeader: false,
        
        //     //dataType:"application/x-www-form-urlencoded; charset=UTF-8",
        //     success: function (response) {
        //         var result = Ext.JSON.decode(response.responseText);
        //         if(result.Code == "0"){
        //             Ext.util.Cookies.set('username',result.Data.username);
        //             Ext.util.Cookies.set('password',result.Data.password);
        
        
        
        //             //btn.up('window').close();
        //            // window.location.href = "index.html";
        //         }else{
        //             Ext.Msg.alert("错误提示", '用户名或密码输入错误，请重新输入！');
        //         }
        //     },
        //     failure:function (response) {
        //         Ext.Msg.alert("错误提示", '用户名或密码输入错误，请重新输入！');
        //     }
        // });

    // },
    // onLoginClick: function(btn) {
        
    //     window.location.reload();
    //     localStorage.setItem("testLoggedIn", true);
    //     this.getView().destroy();
    //     //btn.up('window').close();
    //     Ext.create({
    //         xtype: 'main'
    //     });
    //     // var loginvalues = Ext.util.JSON.encode(btn.up('window').down('form').getForm().getValues());
    //     // Ext.Ajax.request({
    //     //     url: 'http://localhost:8080/ssh-demo/order/deletes',
    //     //     params: loginvalues,
    //     //     method: 'POST',
    //     //     useDefaultXhrHeader: false,
        
    //     //     //dataType:"application/x-www-form-urlencoded; charset=UTF-8",
    //     //     success: function (response) {
    //     //         var result = Ext.JSON.decode(response.responseText);
    //     //         if(result.Code == "0"){
    //     //             Ext.util.Cookies.set('username',Admin.store.user.Userdata.username);
    //     //             Ext.util.Cookies.set('password',Admin.store.user.Userdata.password);
        
        
        
    //     //             //btn.up('window').close();
    //     //            // window.location.href = "index.html";
    //     //         }else{
    //     //             Ext.Msg.alert("错误提示", '用户名或密码输入错误，请重新输入！');
    //     //         }
    //     //     },
    //     //     failure:function (response) {
    //     //         Ext.Msg.alert("错误提示", '用户名或密码输入错误，请重新输入！');
    //     //     }
    //     // });
    // },
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