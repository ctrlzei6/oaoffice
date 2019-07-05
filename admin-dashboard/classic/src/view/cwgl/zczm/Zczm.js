Ext.define('Admin.view.cwgl.zczm.Zczm', {
    extend: 'Ext.container.Container',
    xtype: 'zczm',
    //controller: 'zczm',				//viewController:代码与视图分离。声明视图绑定的事件，可以多个视图共享。
    //viewModel: {type: 'zczmlist'},	//viewModel：配置Stote数据源。多个视图共享Store。
    
    controller: 'zczmViewController',
    viewModel: {type: 'zczmViewModel'},
    	
    layout: 'fit',
    items: [{xtype:'zczmPanel'}],
    //html:'支出账目模块'
}); 