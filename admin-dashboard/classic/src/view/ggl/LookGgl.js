Ext.define('Admin.view.ggl.LookGgl', {
    extend: 'Ext.window.Window',
    alias: 'widget.lookGgl',
    height: 650,
    //minHeight: 100,
    // minWidth: 300,
    width: 800,
    scrollable: true,
    title: '公告详情', 
    closable: true,
    constrain: true,
    defaultFocus: 'textfield',
    modal:true,
    layout: 'fit',
    items: [{
        xtype: 'form',
        layout: 'form',
        padding: '10px',
        //ariaLabel: 'Enter your name',
        readOnly: true,
        items: [
            {
               html:'GgDetail'
            }
        // {
        //     xtype: 'textfield',
        //     fieldLabel: 'identifier',
        //     name:'identifier',
        //     hidden: true,
        //     readOnly: true
        // }, {
        //     xtype: 'textfield',
        //     fieldLabel: '公告主题',
        //     name:'ggtheme'
        // }, {
        //     xtype: 'textfield',
        //     fieldLabel: '起止日期',
        //     name:'time'
        // }, {
        //     xtype: 'textfield',
        //     fieldLabel: '发布人',
        //     name:'publishman'
        // }, {
        //     xtype: 'textfield',
        //     fieldLabel: '发布时间',
        //     name:'publishtime'
        // }, 

    ]
    }]
});
