Ext.define('Admin.view.khgl.htgl.HtglSearchWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.htglSearchWindow',
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
            name:'compactId',
            hidden: true,
            readOnly: true
        }, {
            xtype: 'textfield',
            fieldLabel: '合同名称',
            name:'compactName'
        },{
            xtype: 'textfield',
            fieldLabel: '合同内容',
            name:'compactTxt'
        },{
            xtype: 'datefield',
            fieldLabel: '签订日期',
            name:'compactqdrq',
            format: 'Y/m/d'
        },{
            xtype: 'datefield',
            fieldLabel: '合同期限',
            name:'compactqixian',
            format: 'Y/m/d'
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