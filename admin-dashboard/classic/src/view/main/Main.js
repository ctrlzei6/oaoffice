Ext.define('Admin.view.main.Main', {
    extend: 'Ext.Container',
     
    requires: [
        'Ext.button.Segmented',
        'Ext.list.Tree',
        'Admin.view.main.MainModel'
    ],
    xtype:'main',
    controller: 'main',
    viewModel: 'main',
    plugins: 'viewport',
    cls: 'sencha-dash-viewport',
    //itemId: 'mainView',
    //layout: 'vbox',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    listeners: {
        render: 'onMainViewRender'
    },

    items: [
        {
            xtype: 'toolbar',
            cls: 'sencha-dash-dash-headerbar shadow',
            height: 64,
            //itemId: 'headerBar',
            items: [
                {
                    xtype: 'component',
                    reference: 'senchaLogo',
                    cls: 'sencha-logo',
                    html: '<div class="main-logo"><img src="resources/images/company-logo.png">自动办公系统</div>',
                    width: 250
                },
                {
                    margin: '0 0 0 8',
                    ui: 'header',
                    iconCls:'x-fa fa-navicon',
                    id: 'main-navigation-btn',
                    handler: 'onToggleNavigationSize'
                },
                '->',
                {
                    xtype:'button',
                    text:'退出',
                    iconCls:'x-fa fa-power-off',
                    handler: 'onExit'
                },
                {
                    //items: [{xtype:'khglPanel'}],
                    xtype:'grxxButton'
                },
                {
                    
                    //相当于一个label
                    xtype: 'tbtext',
                    html:'欢迎您！',
                    bind: '{username}'
                    
                },
                {
                    xtype: 'image',
                    cls: 'header-right-profile-image',
                    height: 35,
                    width: 35,
                    alt:'current user image',
                    src: 'resources/images/user-profile/2.png'
                }
            ]
        },
        {
            xtype: 'maincontainerwrap',
            id: 'main-view-detail-wrap',
            reference: 'mainContainerWrap',
            flex: 1,
            items: [
                //页面左边导航栏
                {
                    xtype: 'treelist',
                    reference: 'navigationTreeList',
                    itemId: 'navigationTreeList',
                    ui: 'nav',
                    store: 'NavigationTree',
                    width: 250,
                    expanderFirst: false,
                    expanderOnly: false,
                    listeners: {
                        selectionchange: 'onNavigationTreeSelectionChange'
                    }
                },
                //页面中间内容
                {
                    xtype: 'container',
                    flex: 1,
                    reference: 'mainCardPanel',
                    cls: 'sencha-dash-right-main-container',
                    itemId: 'contentPanel',
                    layout: {
                        type: 'card',
                        anchor: '100%'
                    }
                }
            ]
        }
    ]
});
