Ext.define('MyApp.view.ProfileView', {
    extend: 'Ext.Container',
    alias: 'widget.profileview',

    config: {
        layout: {
            type: 'vbox'
        },
        scrollable: 'vertical',
        cls: [
            'profile-view'
        ],
        items: [
            {
                xtype: 'panel',
                height: 150,
                width: '100%',
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'panel',
                        margin: '17 0 0 0',
                        width: '34%',
                        items: [
                            {
                                xtype: 'image',
                                cls: [
                                    'twt-prof-img'
                                ],
                                margin: '0 0 0 20',
                                style: 'border: 4px solid  #fff; box-shadow: 0px 0px 6px 2px  #CCC;',
                                src: 'resources/images/emily.jpg'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        html: '',
                        margin: '17 17 0 17',
                        styleHtmlContent: true,
                        layout: {
                            type: 'vbox'
                        },
                        flex: 1,
                        items: [
                            {
                                xtype: 'panel',
                                height: 50,
                                html: '<div class="twt-profile_cont"><h3>Virgil Pana</h3><p><span class="marker"></span>Bucherest</p></div>',
                                styleHtmlContent: true
                            },
                            {
                                xtype: 'panel',
                                cls: [
                                    'twt-btn-gorup-panel'
                                ],
                                width: '100%',
                                layout: {
                                    type: 'hbox'
                                },
                                items: [
                                    {
                                        xtype: 'button',
                                        cls: 'btn-twt-group fst-btn',
                                        height: 50,
                                        html: '<p class="num-count">23</p><p class="twt-grouping">FOLLOWERS</p>',
                                        margin: 0,
                                        padding: 0,
                                        styleHtmlContent: true,
                                        ui: 'plain',
                                        width: '37%',
                                        name: 'followers'
                                    },
                                    {
                                        xtype: 'button',
                                        cls: 'btn-twt-group snd-btn',
                                        height: 50,
                                        html: '<p class="num-count">23</p><p class="twt-grouping">FOLLOWING</p>',
                                        margin: 0,
                                        padding: 0,
                                        styleHtmlContent: true,
                                        ui: 'plain',
                                        width: '37%',
                                        name: 'following'
                                    },
                                    {
                                        xtype: 'button',
                                        cls: 'btn-twt-group lst-btn',
                                        height: 50,
                                        html: '<p class="num-count">23</p><p class="twt-grouping">UPDATES</p>',
                                        margin: 0,
                                        padding: 0,
                                        styleHtmlContent: true,
                                        ui: 'plain',
                                        width: '26%',
                                        name: 'updates'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'panel',
                height: 150,
                width: '100%',
                layout: {
                    type: 'vbox'
                },
                items: [
                    {
                        xtype: 'panel',
                        height: 40,
                        html: '<div class="bio-container"><h4>Top Friends</h4></div>',
                        styleHtmlContent: true
                    },
                    {
                        xtype: 'panel',
                        height: 100,
                        layout: {
                            type: 'hbox'
                        },
                        scrollable: false,
                        flex: 1,
                        items: [
                            {
                                xtype: 'dataview',
                                height: 100,
                                margin: '0 0 0 20',
                                style: 'overflow:hidden',
                                ui: '',
                                layout: {
                                    align: 'start',
                                    type: 'hbox'
                                },
                                scrollable: {
                                    direction: 'horizontal',
                                    directionLock: true
                                },
                                inline: {
                                    wrap: false
                                },
                                itemTpl: [
                                    '<img src="{url}"  />'
                                ],
                                store: 'PhotosStore',
                                flex: 1
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'panel',
                html: '<div class="bio-container"><h4>Bio</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p></div>',
                margin: '0 0 20 0',
                styleHtmlContent: true,
                layout: {
                    type: 'vbox'
                }
            }
        ]
    }

});