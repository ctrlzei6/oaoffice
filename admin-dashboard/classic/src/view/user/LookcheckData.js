Ext.define('Admin.view.user.LookcheckData',{
    extend:'Ext.window.Window',
    requires:[
        //'Admin.view.ggl.List',
        'Admin.view.main.MainModel',
        'Admin.store.user.Userdata'
    ],
    alias: 'widget.lookcheckData',
    //viewModel: {type: 'userViewModel'},
    reference:"lookcheckData",
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
            //bind: '{userLists}',
            xtype: 'form',
            layout: 'form',
            padding: '10px',
            ariaLabel: 'check',
            items: [{
                xtype: 'textfield',
                width: 220,
                action:'look',
                dataIndex:'ggTheme',
                fieldLabel: '公告主题' ,
                readOnly: true
            }, {
                xtype: 'textfield', 
                fieldLabel: '姓名',
                dataIndex:'username',
                //value:'Lisa',
                readOnly: true
            },{
                xtype:'combo',
                fieldLabel:'部门',
                dataIndex: 'departId',
                //value:0,
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
                dataIndex: 'roleId',
                //value:0,
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
            {
                xtype: 'textfield',
                fieldLabel: '性别',
                dataIndex:'gender',
                //value:'女',
                readOnly: true
            },{
                xtype: 'textfield',
                fieldLabel: '角色',
                dataIndex:'roleId',
                //value:'1',
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