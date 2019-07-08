Ext.define('Admin.view.ggl.GglController',{
    extend:'Ext.app.ViewController',
    alias:'controller.gglController',

	lookWindow:function(grid, rowIndex, colIndex){
		var record = grid.getStore().getAt(rowIndex);
	   //获取选中数据的字段值：console.log(record.get('id')); 或者 console.log(record.data.id);
	   if (record ) {
		   var win = grid.up('ggl').add(Ext.widget('lookGgl'));
		   win.show();
		   win.down('form').getForm().loadRecord(record);
			}
		},
	

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
});