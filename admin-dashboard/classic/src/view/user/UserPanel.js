// Ext.define('Admin.view.ggl.UserPanel',{
//     extend:'Ext.panel.Panel',
//     xtype:'userPanel',
//     requires:[
//         //'Admin.view.ggl.List',
//         'Admin.view.main.MainModel',
//         'Admin.store.user.Userdata'
//     ],
//     reference:"userPanel",
//     controller:'data',
//     viewModel: {type: 'userViewModel'},
//     laypout:'fit',
//     items:[{
//         xtype:'gridpanel',
//         title:'公告栏',
//         bind: '{userLists}',
//         columns: [
//             {
//                 xtype: 'gridcolumn',
//                 width: 40,
//                 dataIndex: 'userId',
//                 text: '用户号',
//                 //hidden
//             },
//             {
//                 xtype: 'gridcolumn',
//                 width: 220,
//                 action:'look',
//                 dataIndex:'username',
//                 text: '用户名' 
//             },
//             {
//                 xtype: 'datecolumn',
//                 cls: 'content-column',
//                 dataIndex: 'password',
//                 text: '密码',
//                 flex: 1
//             },
//             {
//                 xtype: 'datecolumn',
//                 cls: 'content-column',
//                 dataIndex: 'departId',
//                 text: '部门号',
//                 flex: 1
//             },
//             {
//                 xtype: 'gridcolumn',
//                 cls: 'content-column',
//                 dataIndex: 'gender',
//                 text: '性别',
//                 flex: 1
//             },
//             {
//                 xtype: 'gridcolumn',
//                 cls: 'content-column',
//                 width: 180,
//                 dataIndex: 'roleId',
//                 text: '职位号'
//             },
            
//         ]
//         // listeners: {
//         //     select: 'onItemSelected'
//         // }

//     }]
// });