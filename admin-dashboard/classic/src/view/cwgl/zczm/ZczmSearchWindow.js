Ext.define('Admin.view.cwgl.zczm.ZczmSearchWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.zczmSearchWindow',
    height: 500,
    width: 500,
    scrollable: true,
    title: 'Search More Window',
    closable: true,
    constrain: true,
    defaultFocus: 'textfield',
    modal:true,
    layout: 'fit',
    items: [{
        xtype: 'form',
        layout: 'form',
        padding: '10px',
        ariaLabel: 'Enter your name',
        items: [{
            xtype: 'textfield',
            fieldLabel: 'id',
            name:'outAccountId',
            hidden: true,
            readOnly: true
        }, {
            xtype: 'textfield',
            fieldLabel: '支出项名',
            name:'outName'
        },{
            xtype: 'textfield',
            fieldLabel: '支出数额',
            name:'outAmoubt'
        },{
            xtype: 'textfield',
            fieldLabel: '账目检验员',
            name:'outspecter'
        }
        // ,{
		// 	xtype: 'datefield',
		// 	format: 'Y/m/d H:i:s',
		// 	fieldLabel: 'From',
		// 	name: 'createTimeStart'
		
		// }, {
		// 	xtype: 'datefield',
		// 	format: 'Y/m/d H:i:s',
		// 	fieldLabel: 'To',
		// 	name: 'createTimeEnd'
        // }
    ]
    }],
	buttons: ['->',{
        xtype: 'button',
        text: 'Submit',
        handler: 'submitSearchForm'
    },{
        xtype: 'button',
        text: 'Close',
        handler: function(btn) {
            btn.up('window').close();
        }
    },'->']
});