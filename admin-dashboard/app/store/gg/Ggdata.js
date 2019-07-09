Ext.define('Admin.store.gg.Ggdata', {
    extend: 'Ext.data.Store',

    alias: 'store.ggData',
    storeId:'ggData',
    model: 'Admin.model.Ggdata',
   
    data: { items: [
        { 
            identifier: 1, 
            ggTheme: "我爱中国", 
            creatTime: "2019/06/21", 
            stopTime: "2099/09/09", 
            publishMan:'张三',
            ggContent:'五十六个民族五十六枝花',
            publishTime:'2019/06/21'
        },   
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },
    // proxy: {
	// 	type: 'rest',
	// 	url: '/order',
	// 	reader:{
	// 		type:'json',
	// 		rootProperty:'content',//对应后台返回的结果集名称
	// 		totalProperty: 'totalElements'//分页需要知道总记录数
	// 	},
	// 	writer: {
	// 		type: 'json'
	// 	},
		
	// 	simpleSortMode: true	//简单排序模式
	// },
    autoLoad: 'true',
});
