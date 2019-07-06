Ext.define('Admin.view.ggl.GglController',{
    extend:'Ext.app.ViewController',
    alias:'controller.gglController',

    look:function(grid, rowIndex, colIndex){
        var win = grid.up('ggl').add(Ext.widget('lookGgl')).show();
    },
});