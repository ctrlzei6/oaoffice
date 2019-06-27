// /**
//  * This view is an example list of people.
//  */
// Ext.define('Admin.view.ggl.List', {
//     extend: 'Ext.grid.Panel',
//     xtype: 'mainlist',

//     requires: [
//         'Admin.store.Ggdata'
//     ],

//     //title: 'Personnel',

//     store: {
//         type: 'ggdata'
//     },

//     columns: [
//             {
//                 //xtype: 'gridcolumn',
//                 width: 40,
//                 dataIndex: 'identifier',
//                 text: '#'
//             },
//             {
//                 //xtype: 'gridcolumn',
//                 // renderer: function(value) {
//                 //     return "<img src='resources/images/user-profile/" + value + "' alt='Profile Pic' height='40px' width='40px'>";
//                 // },
//                 width: 220,
//                 dataIndex: 'ggtheme',
//                 text: '公告主题'
//             },
//             {
//                 //xtype: 'gridcolumn',
//                 cls: 'content-column',
//                 dataIndex: 'time',
//                 text: '起止日期',
//                 flex: 1
//             },
//             {
//                 //xtype: 'gridcolumn',
//                 cls: 'content-column',
//                 dataIndex: 'publishman',
//                 text: '发布人',
//                 flex: 1
//             },
//             {
//                 //xtype: 'datecolumn',
//                 cls: 'content-column',
//                 width: 180,
//                 dataIndex: 'publishtime',
//                 text: '发布时间'
//             },
          
//         ],

//     listeners: {
//         select: 'onItemSelected'
//     }
// });
