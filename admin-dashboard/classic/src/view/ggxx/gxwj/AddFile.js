Ext.define('Admin.view.ggxx.gxwj.AddFile', {
    extend: 'Ext.window.Window',
    alias: 'widget.addFile',
    height: 450,
    minHeight: 100,
    // minWidth: 300,
    width: 800,
    scrollable: true,
    title: '新增文件',
    closable: true,
    constrain: true,
    defaultFocus: 'textfield',
    modal:true,
    layout: 'fit',
    items: [{
        xtype: 'form',
        layout: 'form',
        padding: '10px',
        items: [
        //     {
        //     xtype: 'textfield',
        //     fieldLabel: 'id',
        //     name:'id',
        //     hidden: true,
        //     readOnly: true
        // }, 
        {
            xtype: 'textfield',
            fieldLabel: '文件号',
            name:'fileid'
        }, {
            xtype: 'textfield',
            fieldLabel: '文件标题',
            name:'filename'
        }, {
            xtype: 'textfield',
            fieldLabel: '文件说明',
            name:'fileexplain'
        }, 
        {
            xtype:'combo',
            fieldLabel:'文件类型：',
            name: 'filetype',
            value:0,
            //hideLabel: true,
            store: Ext.create('Ext.data.Store', {
                fields: ["name", "value"],
                 data: [
                       { name: '行政类', value: 'xzl' },
                     { name: '办公类', value: 'bgl' }
                 ]
            }),
            forceSelection : true,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'value',
            triggerAction: 'all',
            listeners:{
                load:function(){
                    Ext.getCmp('name').setValue(0);
                    }
      
      
                // afterRender: function(combo) {
                //     　　var firstValue = store.reader.jsonData[0].value;
                //     　　combo.setValue(firstValue);
                // }
            }
        },{
            xtype: 'filefield',
            fieldLabel: '附件上传',
            labelWidth: 80,
            msgTarget: 'side',
            allowBlank: false,
            margin: '10,10,10,10',
            anchor: '100%',
            buttonText:'选择文件'
        }

    ]
    }],
	buttons: ['->',{
        xtype: 'button',
        text: '确定',
        handler: 'submitAddForm'
    },{
        xtype: 'button',
        text: '取消',
        handler: function(btn) {
            btn.up('window').close();
        }
    },'->']
});
