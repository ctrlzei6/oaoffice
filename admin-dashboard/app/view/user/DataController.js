
Ext.define('Admin.view.user.DataController', {
    //extend: 'Admin.view.main.MainController',
    extend:'Ext.app.ViewController',
    alias: 'controller.data',

    onCheckClick: function (rec) {
        Ext.widget('lookcheckData', {
            title:'资料查看'
            
        });

    },
   
    onAddClick: function () {
        Ext.widget('modifiedData', {
            title:'修改资料'
           
        });
    },
    onModifiedPassword: function(){
        Ext.widget('modifiedPassword', {
            title:'修改密码'
            
        });
    }
    
});