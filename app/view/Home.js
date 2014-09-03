Ext.define('MyApp.view.Home', {
    extend: 'Ext.Container',
    alias: 'widget.home',
    requires: [
        'MyApp.view.ProfileView',
        'MyApp.view.ActivityView',
        'MyApp.view.PhotosView',
        'MyApp.view.ElementsView'
    ],

    config: {
        layout: {
            type: 'vbox'
        },
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                id: 'topNavBar',
                items: [
                    {
                        xtype: 'button',
                        height: 47,
                        id: 'logo-txt',
                        ui: 'plain',
                        width: 120,
                        name: 'logo'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        height: 47,
                        id: 'settings-img',
                        ui: 'plain',
                        width: 45.33,
                        name: 'settings'
                    },
                    {
                        xtype: 'button',
                        height: 47,
                        id: 'login-img',
                        ui: 'plain',
                        width: 60,
                        name: 'login'
                    }
                ]
            },
            {
                xtype: 'panel',
                cls: [
                    'btm-nav'
                ],
                height: 47,
                layout: {
                    type: 'hbox'
                },
                name: 'btmnav',
                items: [
                    {
                        xtype: 'button',
                        cls: 'nav-btn',
                        height: 47,
                        margin: 0,
                        padding: 0,
                        ui: 'plain',
                        width: '25%',
                        text: 'Profile',
                        name: 'profile'
                    },
                    {
                        xtype: 'button',
                        cls: 'nav-btn',
                        height: 47,
                        margin: 0,
                        padding: 0,
                        ui: 'plain',
                        width: '25%',
                        text: 'Activity',
                        name: 'activity'
                    },
                    {
                        xtype: 'button',
                        cls: 'nav-btn',
                        height: 47,
                        margin: 0,
                        padding: 0,
                        ui: 'plain',
                        width: '25%',
                        text: 'Photos',
                        name: 'photos'
                    },
                    {
                        xtype: 'button',
                        cls: 'nav-btn-no-borer',
                        height: 47,
                        margin: 0,
                        padding: 0,
                        ui: 'plain',
                        width: '25%',
                        text: 'Elements',
                        name: 'elements'
                    }
                ]
            },
            {
                xtype: 'panel',
                cls: [
                    'navigation-view'
                ],
                layout: {
                    type: 'card'
                },
                name: 'navigaionview',
                flex: 1,
                items: [
                    {
                        xtype: 'profileview'
                    },
                    {
                        xtype: 'activityview'
                    },
                    {
                        xtype: 'photosview'
                    },
                    {
                        xtype: 'elementsview'
                    }
                ]
            }
        ]
    }

});