Ext.define('Admin.view.cggl.cgdd.Lscx', {
    extend: 'Ext.container.Container',
    xtype: 'lscx',
    //controller: 'cgdd',				//viewController:代码与视图分离。声明视图绑定的事件，可以多个视图共享。
    //viewModel: {type: 'cgddlist'},	//viewModel：配置Stote数据源。多个视图共享Store。
    
    controller: 'cgddViewController',
    viewModel: {type: 'cgddViewModel'},
    	
    layout: 'fit',
    items: [{xtype:'lscxPanel'}],
    //html:'采购订单模块'
});