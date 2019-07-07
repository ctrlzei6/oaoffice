Ext.define('Admin.view.grbg.dbsy.LookWork', {
    extend: 'Ext.window.Window',
    alias: 'widget.lookWork',
    height: 450,
    minHeight: 100,
    // minWidth: 300,
    width: 800,
    scrollable: true,
    title: '文件详情',
    closable: true,
    constrain: true,
    //defaultFocus: 'textfield',
    modal:true,
    layout: 'fit',
    items: [{
        xtype: 'form',
        layout: 'form',
        padding: '10px',
        //ariaLabel: 'Enter your name',
        readOnly: true,
        items: [{
            xtype: 'textfield',
            fieldLabel: 'liushuiId',
            name:'流水号',
            hidden: true,
            readOnly: true
        }, {
            xtype: 'textfield',
            fieldLabel: '工作标题',
            name:'workTitle',
            readOnly:true
        }, 
        {
            xtype: 'textfield',
            fieldLabel: '发起人',
            name:'faqiMan',
            readOnly:true
        }, 
        {
            xtype:'combo',
            fieldLabel:'表单类型',
            name: 'bdflId',
            value:0,
            store: Ext.create('Ext.data.Store', {
                fields: ["name", "value"],
                 data: [
                       { name: '行政类', value: 'xzl' },
                     { name: '办公类', value: 'bgl' }
                 ]
            }),
            queryMode: 'local',
            displayField: 'name',
            valueField: 'val',
            triggerAction: 'all',
            readOnly:true
        },
        {
            xtype: 'textarea',
            fieldLabel: '表单内容',
            height: 100,
            name:'bdContent'
        }
    ]
    }]
});
