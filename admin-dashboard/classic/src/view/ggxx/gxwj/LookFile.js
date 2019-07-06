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
            xtype: 'tbtext',
            cls:"gxwj-look",
            //text:'文件号：',
            html:'<div class="file-cls">这是一个显示文件详细信息的页面</div>',
        }, {
            xtype: 'tbtext',
            
            //fieldLabel: '文件标题',
            name:'filename'
        }, 
        {
            xtype:'tbtext',
            //fieldLabel:'文件类型：',
            name: 'filetype',
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
        },
    ]
    }]
});
