Ext.define('Admin.view.ggxx.gxwj.LookFile', {
    extend: 'Ext.window.Window',
    alias: 'widget.lookFile',
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
            fieldLabel: 'id',
            name:'id',
            hidden: true,
            readOnly: true
        }, {
            xtype: 'textfield',
            fieldLabel: '文件号',
            name:'fileId',
            readOnly:true
        }, {
            xtype: 'textfield',
            fieldLabel: '文件标题',
            name:'fileName',
            readOnly:true
        }, 
        {
            xtype: 'textfield',
            fieldLabel: '文件说明',
            name:'fileExplain',
            readOnly:true
        }, 
        {
            xtype:'combo',
            fieldLabel:'文件类型：',
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
            xtype: 'textfield',
            fieldLabel: '附件',
            labelWidth: 80,
            // msgTarget: 'side',
            // allowBlank: false,
            // margin: '10,10,10,10',
            // //anchor: '100%',
            // //buttonText:'选择文件',
            name:'fileUpload'
        }
    ]
    }]
});
