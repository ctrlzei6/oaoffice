Ext.define('Admin.view.khgl.dagl.Dagl', {
    extend: 'Ext.container.Container',
    xtype: 'dagl',
    //controller: 'dagl',				//viewController:代码与视图分离。声明视图绑定的事件，可以多个视图共享。
    //viewModel: {type: 'dagllist'},	//viewModel：配置Stote数据源。多个视图共享Store。
    
    controller: 'daglViewController',
    viewModel: {type: 'daglViewModel'},
    	
    layout: 'fit',
    items: [{xtype:'daglPanel'}],
    //html:'档案管理模块'
});