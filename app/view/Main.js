Ext.define('MyApp.view.Main', {
    extend: 'Ext.Container',
    alias: 'widget.main',

    config: {
        layout: {
            type: 'vbox'
        },
        scrollable: 'vertical',
        items: [
            {
                xtype: 'panel',
                height: 260,
                hidden: true,
                html: '<div id="qrOutput"></div>',
                margin: '20px 0 20px 0',
                scrollable: false,
                name: 'qrpanel'
            },
            {
                xtype: 'formpanel',
                layout: {
                    type: 'vbox'
                },
                scrollable: false,
                items: [
                    {
                        xtype: 'fieldset',
                        instructions: 'Enter URL. Ex: http://durlov.com',
                        items: [
                            {
                                xtype: 'textfield',
                                label: 'Enter URL',
                                name: 'qrtxt'
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        text: 'QR Generate',
                        name: 'qrbtn'
                    }
                ]
            }
        ]
    }

});