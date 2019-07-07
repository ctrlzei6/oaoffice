Ext.define('Admin.view.user.LookcheckData',{
    extend:'Ext.window.Window',
    xtype:'lookcheckData',
    title:'查看资料',
    autoShow: true,
    controller:'seset',
    layout:'fit',
    width:550,
    height:450,
    defaultType:'textfield',
    items:[
        {
            xtype: 'form',
            layout: 'form',
            padding: '10px',
            ariaLabel: 'check',
            items: [{
                xtype: 'textfield',
                fieldLabel: 'id',
                name:'userId',
                value:'001',
                hidden: true,
                readOnly: true
            }, {
                xtype: 'textfield', 
                fieldLabel: '姓名',
                name:'userName',
                value:'Lisa',
                readOnly: true
            },{
                xtype:'combo',
                fieldLabel:'部门',
                name: 'departId',
                value:0,
                store: Ext.create('Ext.data.Store', {
                    fields: ['name', 'val'],
                    data: [
                        {name: '部门1',val: 0},
                        {name: '部门2',val: 1}
                    ]
                }),
                queryMode: 'local',
                displayField: 'name',
                valueField: 'val',
                triggerAction: 'all',
                columnWidth: 0.51,
                readOnly: true
            },
            {
                xtype:'combo',
                fieldLabel:'职位',
                name: 'roleId',
                value:0,
                store: Ext.create('Ext.data.Store', {
                    fields: ['name', 'val'],
                    data: [
                        {name: '职位1',val: 0},
                        {name: '职位2',val: 1}
                    ]
                }),
                queryMode: 'local',
                displayField: 'name',
                valueField: 'val',
                triggerAction: 'all',
                columnWidth: 0.51,
                readOnly: true
            },
            // {
            //     xtype: 'datefield',
            //     fieldLabel: '出生日期',
            //     name:'birthday',
            //     format: 'Y/m/d',
            //     columnWidth: 0.96,
            //     readOnly: true
            // },
            {
                xtype: 'textfield',
                fieldLabel: '性别',
                name:'gender',
                value:'女',
                readOnly: true
            },{
                xtype: 'textfield',
                fieldLabel: '角色',
                name:'roleId',
                value:'1',
                readOnly: true
            }
        ]
        }
        
    ],
    buttons: ['->',
    {
        text: '关闭',
        //关闭弹窗，需要重置模型数据
        handler: 'onWindowChange',
        ui: 'default-toolbar'
    },'->']
});