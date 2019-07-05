Ext.define('Admin.view.cggl.cgdd.CgddSearchWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.cgddSearchWindow',
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
        ariaLabel: '查询',
        items: [{
            xtype: 'textfield',
            fieldLabel: '订单ID',
            name:'OrderId',
            hidden: true,
            readOnly: true
        }, {
            xtype: 'textfield',
            fieldLabel: '订单号',
            name:'OrderName'
        },{
            xtype: 'textfield',
            fieldLabel: '订单内容',
            name:'OrderTxt'
        },{
            xtype: 'datefield',
            fieldLabel: '订单日期',
            name:'OrderDate',
            format: 'Y/m/d'
        },{
            xtype: 'textfield',
            fieldLabel: '订单审批人',
            name:'AssePerson'
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