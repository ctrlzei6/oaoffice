Ext.define('Admin.view.xtgl.bmgl.BmglSearchWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.bmglSearchWindow',
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
            name:'departId',
            hidden: true,
            readOnly: true
        }, {
            xtype: 'textfield',
            fieldLabel: '部门名称',
            name:'departName'
        },{
            xtype: 'textfield',
            fieldLabel: '部门负责人',
            name:'principalUser'
        },{
            xtype: 'textfield',
            fieldLabel: '联系电话',
            name:'connectTelNo'
        },{
            xtype: 'textfield',
            fieldLabel: '传真',
            name:'faxes'
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