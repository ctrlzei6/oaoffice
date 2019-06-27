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
            xtype:'component',
            html:'性别：',
            //width:30
        },
        {
            xtype: 'combobox',
            //columnWidth: 0.56,
            //reference:'searchFieldName',
            hideLabel: true,
            store:Ext.create("Ext.data.Store", {
                //html:'<div class="main-logo">性别</div>',
                fields: ["name", "value"],
                data: [
                    { name: '男', value: 'man' },
                    { name: '女', value: 'woman' }
                ]
                
            }),
            forceSelection : true,
            displayField: 'name',
            valueField:'value',
            editable: false,
            queryMode: 'local',
            triggerAction: 'all',
            value:'allbill',//显示所有值
            allowBlank: false,
            width: 350,
            listeners:{
                load:function(){
                    Ext.getCmp('name').setValue(0);
                    }
      
      
                // afterRender: function(combo) {
                //     　　var firstValue = store.reader.jsonData[0].value;
                //     　　combo.setValue(firstValue);
                // }
            }
        
            //logTypeCombo.setValue( logTypeCombo.store.getAt(0).get('key') );
        },
        {
            xtype: 'datefield',
            fieldLabel: '出生日期',
            name:'birthday',
            format: 'Y/m/d H:i:s',
            columnWidth: 0.96
        },
        {
            fieldLabel: '电话',
            name: 'phone',
            columnWidth: 0.96
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