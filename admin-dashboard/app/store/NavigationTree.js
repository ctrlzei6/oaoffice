
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
                iconCls: 'x-fa fa-bell',
                children: [
                    {
                        text: '公告栏',
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
                iconCls: 'x-fa fa-address-card-o',
                //rowCls: 'nav-tree-badge nav-tree-badge-new',
                //viewType: 'grbg',
                //leaf: true,
                children: [
                    {
                        text: '待办事宜',
                        iconCls: 'x-fa fa-dbsy',
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
                iconCls: 'x-fa  fa-flask',
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
                iconCls: 'x-fa fa-outdent',
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
            },
            {
                text: '客户管理',
                iconCls: 'x-fa   fa-male',
                //viewType: 'khgl',
                children: [
                    {
                        text: '客户档案',
                        iconCls: 'x-fa fa-address-card-o',
                        viewType: 'dagl',
                        routeId: 'dashboard', 
                        leaf: true
                    },

                    {
                        text: '我的客户',
                        iconCls: 'x-fa fa-address-book',
                        viewType: 'wdkh',
                        leaf: true
                    },
                    {
                        text: '客户分派',
                        iconCls: 'x-fa fa-handshake-o',
                        viewType: 'khfp',
                        leaf: true
                    }
                ]
            },

            {
                text: '合同管理',
                iconCls: 'x-fa   fa-file',
                //viewType: 'htgl',
                //expanded: false,
                //selectable: false,
                //leaf: true
                children: [
                    {
                        text: '合同管理',
                        iconCls: 'x-fa fa-file-o',
                        viewType: 'htgl',
                        leaf: true
                    },

                    {
                        text: '合同统计',
                        iconCls: 'x-fa fa-list-alt ',
                        viewType: 'httj',
                        leaf: true
                    }
                ]
            },
            
            {
                text: '采购管理',
                iconCls: 'x-fa   fa-table',
                //viewType: 'cggl',
                //expanded: false,
                //selectable: false,
                //leaf: true
                children: [
                    {
                        text: '采购订单',
                        iconCls: 'x-fa  fa-yelp',
                        viewType: 'cgdd',
                        leaf: true
                    },

                    {
                        text: '历史查询',
                        iconCls: 'x-fa  fa-tv',
                        viewType: 'lscx',
                        leaf: true
                    }
                ]
            },

            {
                text: '财务管理',
                iconCls: 'x-fa  fa-money',
                //viewType: 'cwgl',
                //expanded: false,
                //selectable: false,
                //leaf: true
                children: [
                    {
                        text: '支出账目',
                        iconCls: 'x-fa fa-long-arrow-left',
                        viewType: 'zczm',
                        leaf: true
                    },

                    {
                        text: '收入账目',
                        iconCls: 'x-fa  fa-long-arrow-right',
                        viewType: 'srzm',
                        leaf: true
                    }
                ]
            },

            {
                text: '系统管理',
                iconCls: 'x-fa  fa-bars',
                //viewType: 'xtgl',
                //expanded: false,
                //selectable: false,
                //leaf: true
                children: [
                    {
                        text: '员工管理',
                        iconCls: 'x-fa fa-user',
                        viewType: 'yggl',
                        leaf: true
                    },
                    {
                        text: '职务管理',
                        iconCls: 'x-fa fa-users',
                        viewType: 'zwgl',
                        leaf: true
                    },
                    {
                        text: '部门管理',
                        iconCls: 'x-fa fa-user-circle-o',
                        viewType: 'bmgl',
                        leaf: true
                    }
                ]
            }
        ]
    }
});
