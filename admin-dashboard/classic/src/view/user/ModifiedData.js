Ext.define('Admin.view.user.ModifiedData',{
    extend:'Ext.window.Window',
    xtype:'modifiedData',
    autoShow: true,
    controller:'seset',
    layout:'column',
    defaults:{
        style:'float:left;margin:4px;',
        columnWidth: 0.48
    },
    width:550,
    height:350,
    defaultType:'textfield',
    fieldDefaults:{
        labelAlign:'right',
        labelWidth:84                                 
    },
    items:[
        {
            xtype:'combo',
            fieldLabel:'性别',
            name: 'sex',
            value:'女',
            store: Ext.create('Ext.data.Store', {
                fields: ['name', 'val'],
                data: [
                    {name: '男',val: '男'},
                    {name: '女',val: '女'}
                ]
            }),
            queryMode: 'local',
            displayField: 'name',
            valueField: 'val',
            triggerAction: 'all',
        },
        
        {
            fieldLabel: '电话',
            name: 'phone',
            columnWidth: 0.96
        },
        {
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
            columnWidth: 0.51
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
            columnWidth: 0.51
        }
    ],
    buttons: [{
        text: '保存',
        handler: 'onSave'
    },
    {
        text: '取消',
        //关闭弹窗，需要重置模型数据
        handler: 'onWindowChange',
        ui: 'default-toolbar'
    }]
});