Ext.define('Admin.view.login.Login',{
    extend: 'Ext.window.Window',
    xtype: 'login',
    requires: [
        'Admin.view.login.LoginController',
        'Ext.form.Panel'

    ],
    // listeners: {
    //     //监听页面初始化事件
    //     render: 'onLoginRender'
    // },
    controller: 'login',
    title: '用户登录',
    plain: true,
    closable: false,
    autoShow: true,
    bodyStyle:"background-image:url('resources/images/back.jpg');padding:5px 5px 0",
    titleAlign: 'center',
    //最大化
    maximized: true,
    //滚动条
    scrollable: true,
    //自动显示
    autoShow: true,
    //竖向居中布局
    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },
    items: {
        width: 430,
        height: 240,
        bodyPadding: 10,
        xtype: 'form',

        reference: 'form',
        
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: '用户名',

            allowBlank: false

        }, {

            xtype: 'textfield',

            name: 'password',

            inputType: 'password',

            fieldLabel: '密&nbsp;&nbsp;&nbsp;码',

            allowBlank: false

        }, {

            xtype: 'displayfield',

            hideEmptyLabel: false,

            value: '用户名密码不能为空'

        },
        {
            xtype: 'container',
            layout: 'hbox',
            items: [{
                xtype: 'checkboxfield',
                flex: 1,
                cls: 'form-panel-font-color rememberMeCheckbox',
                height: 30,
                inputValue: 1,
                name: 'persist',
                bind: '{persist}',
                boxLabel: '记住我'
            }]
        }],
        
        buttons: [{

            text: '登录',
            
            formBind: true,

            listeners: {

                click: 'onLoginClick'

            }

        }]

    }

});