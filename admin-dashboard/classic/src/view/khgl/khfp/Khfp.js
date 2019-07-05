Ext.define('Admin.view.khgl.khfp.Khfp', {
    extend: 'Ext.container.Container',
    xtype: 'khfp',
    //controller: 'khfp',				//viewController:代码与视图分离。声明视图绑定的事件，可以多个视图共享。
    //viewModel: {type: 'khfplist'},	//viewModel：配置Stote数据源。多个视图共享Store。
    
    controller: 'khfpViewController',
    viewModel: {type: 'khfpViewModel'},
    	
    layout: 'fit',
    items: [{xtype:'khfpPanel'}],
    //html:'客户分派模块'
});