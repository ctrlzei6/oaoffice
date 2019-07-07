Ext.define('Admin.view.xzbg.gggl.Look', {
    extend: 'Ext.window.Window',
    alias: 'widget.look',
    
    height: 550,
    minHeight: 100,
    // minWidth: 300,
    width: 1020,
    //scrollable: true,
    title: '编辑公告',
    //closable: true,
    constrain: true,
    
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
            fieldLabel: '公告主题',
            name:'ggTheme',
            readOnly: true
        }, {
            xtype: 'textarea',
            fieldLabel: '公告内容',
            height:180,
            name:'ggContent',
            readOnly: true
        },{
            xtype: 'textfield',
            fieldLabel: '发布人',
            name:'publishMan',
            readOnly: true
        }, 
        {
            xtype: 'textfield',
            fieldLabel: '发布单位',
            name:'publishPart',
            readOnly: true
        }, {
            xtype: 'datefield',
            fieldLabel: '发布时间',
            name:'publishTime',
            //format: 'Y/m/d H:i:s',
            readOnly: true
        },{
            xtype: 'datefield',
            fieldLabel: '开始时间',
            name:'creatTime',
            //format: 'Y/m/d H:i:s',
            readOnly: true
        }, {
            xtype: 'datefield',
            fieldLabel: '结束时间',
            name:'stopTime',
            //format: 'Y/m/d H:i:s',
            readOnly: true
        }]
    }]
});
