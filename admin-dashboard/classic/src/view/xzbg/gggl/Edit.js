Ext.define('Admin.view.xzbg.gggl.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.edit',
    
    height: 600,
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
            name:'ggTheme'
        }, {
            xtype: 'htmleditor',
            
            // Make tips align neatly below buttons.
            buttonDefaults: {
                tooltip: {
                    align: 't-b',
                    anchor: true
                }
            },
            flex: 1,
            minHeight: 100,
            labelAlign: 'top',
            fieldLabel: '公告内容',
            name:'ggContent'
        },{
            xtype: 'textfield',
            fieldLabel: '发布人',
            name:'publishMan'
        },
        {
            xtype: 'textfield',
            fieldLabel: '发布单位',
            name:'publishPart'
        }, 
        {
            xtype: 'datefield',
            fieldLabel: '发布时间',
            name:'publishTime',
            format: 'Y/m/d H:i:s'
        },
        {
            xtype: 'datefield',
            fieldLabel: '开始时间',
            name:'creatTime',
            format: 'Y/m/d H:i:s'
        }, {
            xtype: 'datefield',
            fieldLabel: '结束时间',
            name:'stopTime',
            format: 'Y/m/d H:i:s'
        }]
    }],
	buttons: ['->',{
        xtype: 'button',
        text: '发布',
        handler: 'submitAddGg'
    },{
        xtype: 'button',
        text: '取消',
        handler: function(btn) {
            btn.up('window').close();
        }
    },'->']
});
