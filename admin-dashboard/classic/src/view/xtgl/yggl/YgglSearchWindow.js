Ext.define('Admin.view.xtgl.yggl.YgglSearchWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.ygglSearchWindow',
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
            name:'UserId',
            hidden: true,
            readOnly: true
        }, {
            xtype: 'textfield',
            fieldLabel: '员工名称',
            name:'UserName'
        },{
            xtype: 'textfield',
            fieldLabel: '密码',
            name:'PassWord'
        },{
            xtype: 'textfield',
            fieldLabel: '部门',
            name:'DepartId'
        },{
            xtype: 'textfield',
            fieldLabel: '性别',
            name:'Gender'
        },{
            xtype: 'textfield',
            fieldLabel: '角色',
            name:'RoleId'
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