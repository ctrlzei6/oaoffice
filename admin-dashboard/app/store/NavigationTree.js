
Ext.define('Admin.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'NavigationTree',
    
    fields: [{
        name: 'text'
    }],

    
    root: {
        expanded: true,
        
        children: [
            {
                text: '公共信息',
                iconCls: 'x-fa fa-ggxx',
               // rowCls: 'nav-tree-badge nav-tree-badge-new',
                //viewType: 'ggxx',
                //routeId: 'ggxx', // routeId defaults to viewType
                //leaf: true,
                children: [
                    {
                        text: '公告栏',
                        //iconCls: 'x-fa fa-ggl',
                    // rowCls: 'nav-tree-badge nav-tree-badge-new',
                        viewType: 'ggl',
                        routeId: 'ggl', // routeId defaults to viewType
                        leaf: true,
                    },
                    {
                        text: '共享文件',
                        //iconCls: 'x-fa fa-gxwj',
                    // rowCls: 'nav-tree-badge nav-tree-badge-new',
                        viewType: 'gxwj',
                        //routeId: 'gxwj', // routeId defaults to viewType
                        leaf: true,
                    }
                ]
            },{
                text: '个人办公',
                iconCls: 'x-fa fa-grbg',
                //rowCls: 'nav-tree-badge nav-tree-badge-new',
                //viewType: 'grbg',
                //leaf: true,
                children: [
                    {
                        text: '待办事宜',
                        iconCls: 'x-fa fa-dbsy',
                    // rowCls: 'nav-tree-badge nav-tree-badge-new',
                        viewType: 'dbsy',
                        //routeId: 'dbsy', // routeId defaults to viewType
                        leaf: true,
                    },
                    {
                        text: '日程安排',
                        iconCls: 'x-fa fa-rcap',
                    // rowCls: 'nav-tree-badge nav-tree-badge-new',
                        viewType: 'rcap',
                        //routeId: 'rcap', // routeId defaults to viewType
                        leaf: true,
                    }
                ]
            },{
                text: '工作流管理',
                iconCls: 'x-fa fa-gzlc',
                //rowCls: 'nav-tree-badge nav-tree-badge-new',
               // viewType: 'gzlc',
                //leaf: true,
                children: [
                    {
                        text: '表单分类',
                        iconCls: 'x-fa fa-sqlc',
                    // rowCls: 'nav-tree-badge nav-tree-badge-new',
                        viewType: 'bdfl',
                       // routeId: 'sqlc', // routeId defaults to viewType
                        leaf: true,
                    },
                    {
                        text: '表单设计',
                        iconCls: 'x-fa fa-splc',
                    // rowCls: 'nav-tree-badge nav-tree-badge-new',
                        viewType: 'bdsj',
                       // routeId: 'splc', // routeId defaults to viewType
                        leaf: true,
                    }
                ]
            },{
                text: '行政办公',
                iconCls: 'x-fa fa-rsgl',
                //rowCls: 'nav-tree-badge nav-tree-badge-new',
                //viewType: 'xzbg',
                //leaf: true,
                children: [
                    {
                        text: '新建工作',
                        iconCls: 'x-fa fa-rsgl',
                    // rowCls: 'nav-tree-badge nav-tree-badge-new',
                        viewType: 'xjgz',
                       // routeId: 'rsgl', // routeId defaults to viewType
                        leaf: true,
                    },
                    {
                        text: '公告管理',
                        iconCls: 'x-fa fa-rsgl',
                    // rowCls: 'nav-tree-badge nav-tree-badge-new',
                        viewType: 'gggl',
                       // routeId: 'rsgl', // routeId defaults to viewType
                        leaf: true,
                    }
                ]
            },{
                text: '客户管理',
                iconCls: 'x-fa fa-khgl',
                //rowCls: 'nav-tree-badge nav-tree-badge-new',
                viewType: 'khgl',
                leaf: true
            },{
                text: '合同管理',
                iconCls: 'x-fa fa-htgl',
                //rowCls: 'nav-tree-badge nav-tree-badge-new',
                viewType: 'htgl',
                leaf: true
            },{
                text: '采购管理',
                iconCls: 'x-fa fa-cggl',
                //rowCls: 'nav-tree-badge nav-tree-badge-new',
                viewType: 'cggl',
                leaf: true
            },{
                text: '财务管理',
                iconCls: 'x-fa fa-cwgl',
                //rowCls: 'nav-tree-badge nav-tree-badge-new',
                viewType: 'cwgl',
                leaf: true
            },{
                text: '系统管理',
                iconCls: 'x-fa fa-xtgl',
                //rowCls: 'nav-tree-badge nav-tree-badge-new',
                viewType: 'xtgl',
                leaf: true
            },
        ]
    }
});
