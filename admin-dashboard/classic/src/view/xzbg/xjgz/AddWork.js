Ext.define('Admin.view.xzbg.xjgz.AddWork', {
    extend: 'Ext.window.Window',
    alias: 'widget.addWork',
    height: 550,
    minHeight: 100,
    // minWidth: 300,
    width: 1020,
    //scrollable: true,
    title: '新建工作',
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
            name:'identifier',
            hidden: true,
            readOnly: true
        }, {
            xtype: 'textfield',
            fieldLabel: '工作标题',
            name:'workTitle'
        },{
            xtype: 'textfield',
            fieldLabel: '发起人',
            name:'faqiMan'
        }, 
        {
            xtype:'combo',
            fieldLabel:'表单类型',
            name: 'bdType',
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
            }
        }, {
            xtype: 'textfield',
            fieldLabel: '当前步骤',
            name:'presentStep',
            border:'none',
            readOnly:true,
            value:0
        }]
    }],
	buttons: ['->',{
        xtype: 'button',
        text: '新建',
        handler: 'submitAddWork'
    },{
        xtype: 'button',
        text: '取消',
        handler: function(btn) {
            btn.up('window').close();
        }
    }]
});
