Ext.define('MyApp.view.Profile', {
    extend: 'Ext.Container',
    alias: 'widget.profile',
    requires: [
        'MyApp.view.ProfileView'
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
                items: [
                    {
                        xtype: 'button',
                        cls: 'nav-btn active',
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
                xtype: 'navigationview',
                cls: [
                    'navigation-container'
                ],
                height: '',
                flex: 1,
                navigationBar: {
                    hidden: true
                },
                items: [
                    {
                        xtype: 'profileview'
                    }
                ]
            }
        ]
    }

});