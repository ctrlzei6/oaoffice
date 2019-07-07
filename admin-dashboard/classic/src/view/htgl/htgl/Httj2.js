Ext.define('Admin.view.htgl.htgl.Httj2', {
    extend: 'Ext.container.Container',
    xtype: 'httj',
    //controller: 'httj',				//viewController:代码与视图分离。声明视图绑定的事件，可以多个视图共享。
    //viewModel: {type: 'htgllist'},	//viewModel：配置Stote数据源。多个视图共享Store。
    
    controller: 'htglViewController',
    viewModel: {type: 'htglViewModel'},
    	
    layout: 'fit',
    items: [{xtype:'httjPanel'}],
    //html:'合同管理模块'
});