Ext.define('MyApp.view.ElementsView', {
    extend: 'Ext.Container',
    alias: 'widget.elementsview',

    config: {
        layout: {
            type: 'vbox'
        },
        scrollable: 'vertical',
        cls: [
            'elements-view'
        ],
        items: [
            {
                xtype: 'panel',
                cls: [
                    'agenda-list-panel'
                ],
                html: '<div class="agenda-list">   <p><span>December 1</span>Day<span></span></p>   <p><span>Nov 25 - 30</span>Week<span></span></p>   <p><span>December</span>Month<span></span></p>   <p><span>December 1</span>Agenda<span></span></p> </div>',
                styleHtmlContent: true,
                width: '70%'
            },
            {
                xtype: 'panel',
                cls: [
                    'twt-slider-panel'
                ],
                margin: '20 0 0 0',
                padding: '0 0 0 10',
                items: [
                    {
                        xtype: 'fieldset',
                        items: [
                            {
                                xtype: 'sliderfield',
                                cls: 'twt-slider-disabled',
                                label: 'DISABLED',
                                labelWidth: '20%'
                            },
                            {
                                xtype: 'sliderfield',
                                cls: 'twt-slider-pressed',
                                label: 'PRESSED',
                                labelWidth: '20%'
                            },
                            {
                                xtype: 'sliderfield',
                                cls: 'twt-slider-focused',
                                label: 'FOCUSED',
                                labelWidth: '20%'
                            },
                            {
                                xtype: 'sliderfield',
                                cls: 'twt-slider-normal',
                                label: 'NORMAL',
                                labelWidth: '20%'
                            },
                            {
                                xtype: 'sliderfield',
                                cls: 'twt-slider-progress',
                                disabled: true,
                                label: '<p><span>35%</span>Loading...</p>',
                                labelAlign: 'top',
                                labelWidth: '20%'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        layout: {
                            align: 'start',
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'button',
                                cls: 'twt-button-normal',
                                height: 62,
                                margin: '0 2.5% 0 2.5%',
                                width: '45%',
                                text: 'Button'
                            },
                            {
                                xtype: 'button',
                                cls: 'twt-button-pressed',
                                height: 62,
                                margin: '0 2.5% 0 2.5%',
                                width: '45%',
                                text: 'Pressed'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});