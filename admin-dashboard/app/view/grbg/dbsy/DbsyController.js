Ext.define('Admin.view.grbg.dbsy.DbsyController',{
    extend:'Ext.app.ViewController',
    alias:'controller.dbsyController',
    dispose:function(grid, rowIndex, colIndex){
        var win = grid.up('dbsy').add(Ext.widget('dispose')).show();
    },

})