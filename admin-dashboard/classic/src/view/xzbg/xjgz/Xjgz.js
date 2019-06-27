Ext.define('Admin.view.xzbg.xjgz.Xjgz', {
    extend: 'Ext.container.Container',
    xtype: 'xjgz',
    //requires: ['Ext.layout.container.Fit'],
    //controller: 'order',				//viewController:代码与视图分离。声明视图绑定的事件，可以多个视图共享。
    //viewModel: {type: 'orderlist'},	//viewModel：配置Stote数据源。多个视图共享Store。
    
    //controller: 'gglViewController',
    //viewModel: {type: 'gglViewModel'},
    	
    layout: 'fit',
    items: [{xtype:'xjgzPanel'}],
});