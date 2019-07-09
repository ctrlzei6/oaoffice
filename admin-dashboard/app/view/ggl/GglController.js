Ext.define('Admin.view.ggl.GglController',{
    extend:'Ext.app.ViewController',
    alias:'controller.gglController',
	
	//查看详细信息
	lookWindow:function(grid, rowIndex, colIndex){
		var record = grid.getStore().getAt(rowIndex);
	   //获取选中数据的字段值：console.log(record.get('id')); 或者 console.log(record.data.id);
	   if (record ) {
		   var win = grid.up('ggl').add(Ext.widget('lookGgl'));
		   win.show();
		   win.down('form').getForm().loadRecord(record);
			}
		},
	
	//查询
    onSearch:function(btn){
		var searchField = this.lookupReference('searchFieldName').getValue();
		var searchValue = this.lookupReference('searchFieldValue').getValue();

		var store =	btn.up('gridpanel').getStore();
		//var store = Ext.getCmp('userGridPanel').getStore();// Ext.getCmp(）需要在OrderPanel设置id属性
		Ext.apply(store.proxy.extraParams, {ggTheme:"",ggContent:""});
		
		if(searchField==='ggTheme'){
			Ext.apply(store.proxy.extraParams, {ggTheme:searchValue});
		}
		if(searchField==='ggContent'){
			Ext.apply(store.proxy.extraParams, {ggContent:searchValue});
			// 	createTimeStart:Ext.util.Format.date(searchDataFieldValue, 'Y/m/d H:i:s'),
			// 	createTimeEnd:Ext.util.Format.date(searchDataFieldValue2, 'Y/m/d H:i:s')
			// });
		}
		//store.load({params:{start:0, limit:20, page:1}});
	},
	// onSearch: function () {
	// 	var form = this.getView().lookupReference('gglPanel').lookupReference('gglPanelSearchField');//取得查询条件form，getView得到引用了controller的页面，lookupReference方法下面说
    //     var data = {};
    //     form.getForm().getFields().each(function() {  //遍历form
    //         var name = this.getName();
    //         var value = this.getValue();           
    //         if(value instanceof Array && value != null){ //若value不为空 且是Array类型
    //            value = value.join(",");  //给value中的值用逗号隔开
    //         }
    //         data[this.getName()] = value;  //把value放到data里
    //     });

    //     var organizationGrid = this.getView().lookupReference('gglPanel').lookupReference('gridpanel');  //取得grid
    //     OrganizationListStore = organizationGrid.store; //取得store

    //     OrganizationListStore.on('beforeload', function (OrganizationListStore) {
    //         OrganizationListStore.getProxy().extraParams = data; //把data中的搜索条件传入store中
    //     });

	// },
	// onSearch:function(btn,event){
    //     var store=this.getStore('gglPanel');
    //     var form=btn.up('form[id=queryFormSL]');
    //     var grid=form.up('grid[id=StudentListGrid]');
    //     //var grid=Ext.getCmp('StudentListGrid');
    //     //var pageBar = grid.down('pagingtoolbar');                    
    //     var userNameORuserCode=form.getForm().getValues()['gglPanelSearchField']; //form.getForm.getValues()返回的是一个数组
    //     //var gradeCode = form.getForm().getValues()['gradeCode'];        
    //     store.setProxy({
    //         type:'ajax',
    //         actionMethods:{
    //             read:'POST'
    //         },
    //         url:'queryStudent.action',
    //         extraParams:{'gglPanelSearchField':userNameORuserCode,
    //                     //'gradeCode':gradeCode                        
    //                     },
    //         reader:{
    //             type:'json',
    //             root: 'rows',
    //             totalProperty: 'results'
    //         }            
    //     });
    //    // pageBar.moveFirst();
    // },
	searchComboboxSelectChuang:function(combo,record,index){
		//alert(record.data.name);
		var searchField = this.lookupReference('searchFieldName').getValue();
		// if(searchField==='ggTheme'){
		// 	this.lookupReference('searchFieldValue').hide();
		// 	this.lookupReference('searchDataFieldValue').show();
		// 	this.lookupReference('searchDataFieldValue2').show();
		// }else{
		// 	this.lookupReference('searchFieldValue').show();
		// 	this.lookupReference('searchDataFieldValue').hide();
		// 	this.lookupReference('searchDataFieldValue2').hide();
		// }
		
	},
});