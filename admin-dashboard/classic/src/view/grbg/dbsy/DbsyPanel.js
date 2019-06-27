Ext.define('Admin.view.grbg.dbsy.DbsyPanel',{    
        extend: 'Ext.tab.Panel',
        requires: [
            'Ext.layout.container.Card',
            'Admin.view.main.MainModel',
            'Admin.view.grbg.dbsy.Grid1',
            'Admin.view.grbg.dbsy.Grid2'
        ],
        xtype: 'dbsyPanel',
        title:'待办事宜',
        layout:'fit',
        items:[{
            title: '未办理',
            items:[{
                xtype:'grid1'
                
            }]
           
         },
            
        
        {
            title: '已办理',
            items:[{
                xtype:'grid2'
            }]
        },
            
        ]
});