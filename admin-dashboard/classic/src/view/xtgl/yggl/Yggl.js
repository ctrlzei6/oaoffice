Ext.define('Admin.view.xtgl.yggl.Yggl', {
    extend: 'Ext.container.Container',
    xtype: 'yggl',
    //controller: 'yggl',				//viewController:代码与视图分离。声明视图绑定的事件，可以多个视图共享。
    //viewModel: {type: 'yggllist'},	//viewModel：配置Stote数据源。多个视图共享Store。
    
    controller: 'ygglViewController',
    viewModel: {type: 'ygglViewModel'},
    	
    layout: 'fit',
    items: [{xtype:'ygglPanel'}]
    //html:'员工模块'
});