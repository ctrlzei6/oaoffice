Ext.define('Admin.view.user.SesetController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.seset',
    onWindowChange: function () {
        this.modelReject();
        this.onClose();
    },
    //关闭弹窗
    onClose: function () {
        this.getView().close();
    },
    modelReject: function () {
        var model = this.getViewModel().get('data');
        if (model && model.data) {
            //取消模型的更改
            model.reject();
        }
    },

    onSave:function(btn){
		var win    = btn.up('window');
		var store = Ext.data.StoreManager.lookup('Lookcheckmodel');
		var values  = win.down('form').getValues();//获取form数据
		var record = store.getById(values.userId);//获取id获取store中的数据
		record.set(values);//rest put 
		//store.load();
		win.close();
    },
});