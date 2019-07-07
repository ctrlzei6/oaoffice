Ext.define('Admin.view.gzlgl.bdfl.AddBd', {
    extend: 'Ext.window.Window',
    alias: 'widget.addBd',
    height: 550,
    minHeight: 100,
    // minWidth: 300,
    width: 1020,
    //scrollable: true,
    title: '新建表单类型',
    //closable: true,
    constrain: true,
    autoShow: true,
    defaultFocus: 'textfield',
    modal:true,

    layout: 'fit',
    items: [{
        xtype: 'form',
        layout: 'form',
        padding: '10px',
        ariaLabel: 'Enter your name',
        items: [
        {
            xtype: 'textfield',
            fieldLabel: '#',
            name:'bdId',
            hidden: true,
            readOnly: true
        }, {
            xtype: 'textfield',
            fieldLabel: '表单名称',
            name:'flName'
        }, 
        {
            xtype:'combo',
            fieldLabel:'表单分类',
            name: 'bdflId',
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
        },
        {
            xtype: 'textarea',
            fieldLabel: '表单内容',
            height:120,
            name:'bdContent'
        }]
    }],
	buttons: ['->',{
        xtype: 'button',
        text: '添加',
        handler: 'submitAddBdfl'
    },{
        xtype: 'button',
        text: '取消',
        handler: function(btn) {
            btn.up('window').close();
        }
    }]
});
