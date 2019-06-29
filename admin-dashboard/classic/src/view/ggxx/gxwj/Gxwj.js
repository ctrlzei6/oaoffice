Ext.define('Admin.view.ggxx.gxwj.Gxwj', {
    extend: 'Ext.container.Container',
    xtype: 'gxwj',
    //requires: ['Ext.layout.container.Fit'],
    controller: 'gxwjController',				//viewController:代码与视图分离。声明视图绑定的事件，可以多个视图共享。
    viewModel: {type: 'gxwjViewModel'},	//viewModel：配置Stote数据源。多个视图共享Store。
    
    //controller: 'gglViewController',
    //viewModel: {type: 'gglViewModel'},
    
    layout: 'fit',
    items: [{xtype:'gxwjPanel'}],
});