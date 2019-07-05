Ext.define('Admin.view.khgl.wdkh.Wdkh', {
    extend: 'Ext.container.Container',
    xtype: 'wdkh',
    //controller: 'wdkh',				//viewController:代码与视图分离。声明视图绑定的事件，可以多个视图共享。
    //viewModel: {type: 'wdkhlist'},	//viewModel：配置Stote数据源。多个视图共享Store。
    
    controller: 'wdkhViewController',
    viewModel: {type: 'wdkhViewModel'},
    	
    layout: 'fit',
    items: [{xtype:'wdkhPanel'}],
    //html:'档案管理模块'
});