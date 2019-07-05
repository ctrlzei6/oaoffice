Ext.define('Admin.view.xtgl.bmgl.Bmgl', {
    extend: 'Ext.container.Container',
    xtype: 'bmgl',
    //controller: 'bmgl',				//viewController:代码与视图分离。声明视图绑定的事件，可以多个视图共享。
    //viewModel: {type: 'bmgllist'},	//viewModel：配置Stote数据源。多个视图共享Store。
    
    controller: 'bmglViewController',
    viewModel: {type: 'bmglViewModel'},
    	
    layout: 'fit',
    items: [{xtype:'bmglPanel'}],
    //html:'部门管理模块'
});