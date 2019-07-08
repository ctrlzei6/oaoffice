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
                dataIndex:'userId',
                fieldLabel: '用户号' ,
                readOnly: true
            }, {
                xtype: 'textfield', 
                fieldLabel: '用户名',
                name:'username',
                //bind:'{data.username}',
                //value:'Lisa',
                readOnly: true
            },{
                xtype:'combo',
                fieldLabel:'部门',
                name: 'departId',
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
                name:'roleId',
                fieldLabel: '职位',
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
                name: 'gender',
                fieldLabel:'性别',
                //value:'女',
                readOnly: true
            },{
                xtype: 'textfield',
                fieldLabel: '角色',
                name:'roleId',
                //bind:{data.roleId}
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