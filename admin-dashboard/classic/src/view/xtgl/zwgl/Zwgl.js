Ext.define('Admin.view.xtgl.zwgl.Zwgl', {
    extend: 'Ext.container.Container',
    xtype: 'zwgl',
    //controller: 'zwgl',				//viewController:代码与视图分离。声明视图绑定的事件，可以多个视图共享。
    //viewModel: {type: 'zwgllist'},	//viewModel：配置Stote数据源。多个视图共享Store。
    
    controller: 'zwglViewController',
    viewModel: {type: 'zwglViewModel'},
    	
    layout: 'fit',
    items: [{xtype:'zwglPanel'}]
    //html:'职务模块'
});