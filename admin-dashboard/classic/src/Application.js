Ext.define('Admin.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Admin',

    stores: [
        'NavigationTree'
    ],
    // quickTips: false,
    // platformConfig: {
    //     desktop: {
    //         quickTips: true
    //     }
    // },
    defaultToken : 'ggl',
    views: [
        'Admin.view.login.Login',
        'Admin.view.main.Main'
    ],
    // quickTips: false,
    // platformConfig: {
    //     desktop: {
    //         quickTips: true
    //     }
    // },
    launch: function () {
        var loggedIn;
        loggedIn = localStorage.getItem("TutorialLoggedIn");
        //window.location.reload();
        Ext.create({
            xtype: loggedIn ? 'main' : 'login',
            //viewType: 'login'
        });
    },
    // views: [
    //     'Admin.view.login.Login',
    //     'Admin.view.main.Main'
    // ],
    

    // //mainView: 'Admin.view.login.Login',
    // //mainView: 'Admin.view.main.Main',
    // launch: function () {
    //     // TODO - Launch the application

    //     var loggedIn;

    //     // Check to see the current value of the localStorage key
    //     loggedIn = localStorage.getItem("TutorialLoggedIn");

    //     // This ternary operator determines the value of the TutorialLoggedIn key.
    //     // If TutorialLoggedIn isn't true, we display the login window,
    //     // otherwise, we display the main view
    //     Ext.create({
    //         xtype: loggedIn ? 'main' : 'login'
    //     });
    // },
    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
