Ext.define('Admin.view.ggl.GglController',{
    extend:'Ext.app.ViewController',
    alias:'controller.gglController',

    look:function(grid, rowIndex, colIndex){
        var win = grid.up('ggl').add(Ext.widget('lookGgl')).show();
    },
    onSearch:function(btn){
		var searchField = this.lookupReference('searchFieldName').getValue();
		var searchValue = this.lookupReference('searchFieldValue').getValue();

		var store =	btn.up('gridpanel').getStore();
		//var store = Ext.getCmp('userGridPanel').getStore();// Ext.getCmp(）需要在OrderPanel设置id属性
		Ext.apply(store.proxy.extraParams, {orderNumber:"",createTimeStart:"",createTimeEnd:""});
		
		if(searchField==='orderNumber'){
			Ext.apply(store.proxy.extraParams, {orderNumber:searchValue});
		}
		if(searchField==='createTime'){
			Ext.apply(store.proxy.extraParams,{
				createTimeStart:Ext.util.Format.date(searchDataFieldValue, 'Y/m/d H:i:s'),
				createTimeEnd:Ext.util.Format.date(searchDataFieldValue2, 'Y/m/d H:i:s')
			});
		}
		store.load({params:{start:0, limit:20, page:1}});
	},
});