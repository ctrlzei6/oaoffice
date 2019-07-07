Ext.define('Admin.view.xzbg.xjgz.XjgzPanel',{
    extend:'Ext.panel.Panel',
    xtype:'xjgzPanel',
    requires:[
        //'Admin.view.ggl.List',
        'Admin.view.main.MainModel',
        'Admin.store.dbsy.Dbsydata'
    ],
    controller:'xjgz',//映射到控制层
    //reference: 'ggglPanel',
    viewModel: {type: 'xjgzViewModel'},
    laypout:'fit',
    items:[{
        xtype:'gridpanel',
        title:'新建工作',
        bind: '{dbsyLists}',
        tbar: [
            {
            text: '新建',
            //tooltip: 'Add a new gg',
            iconCls: 'fa fa-plus',
            handler: 'openAddWindow' 
        }],
        columns: [
            {
                //xtype: 'gridcolumn',
                width: 100,
                dataIndex: 'liushuiId',
                text: '流水号'
            },
            {
                //xtype: 'gridcolumn',
                // renderer: function(value) {
                //     return "<img src='resources/images/user-profile/" + value + "' alt='Profile Pic' height='40px' width='40px'>";
                // },
                width: 260,
                dataIndex: 'workTitle',
                text: '工作标题',
                

            },
            {
                //xtype: 'gridcolumn',
                cls: 'content-column',
                dataIndex: 'faqiMan',
                text: '发起人',
                flex: 1
            },
            {
                //xtype: 'gridcolumn',
                cls: 'content-column',
                dataIndex: 'bdflId',
                text: '表单类型',
                flex: 1
            },
            {
                //xtype: 'datecolumn',
                cls: 'content-column',
                dataIndex: 'presentStep',
                text: '当前步骤',
                flex: 1
            },
            {
                xtype: 'actioncolumn',
                cls: 'content-column',
                width: 180,
                //dataIndex: 'action',
                text: '相关操作',
                tooltip: 'edit ',
                items: [
                    {xtype: 'button',tooltip:"删除",iconCls: 'x-fa fa-close',handler: 'deleteOneRow'},
                    
                ]
            }
            
        ]

    }]
});