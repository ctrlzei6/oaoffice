Ext.define('Admin.view.cwgl.srzm.Srzm', {
    extend: 'Ext.container.Container',
    xtype: 'srzm',
    //controller: 'srzm',				//viewController:代码与视图分离。声明视图绑定的事件，可以多个视图共享。
    //viewModel: {type: 'srzmlist'},	//viewModel：配置Stote数据源。多个视图共享Store。
    
    controller: 'srzmViewController',
    viewModel: {type: 'srzmViewModel'},
    	
    layout: 'fit',
    items: [{xtype:'srzmPanel'}],
    //html:'支出账目模块'
});