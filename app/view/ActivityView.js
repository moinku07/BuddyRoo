Ext.define('MyApp.view.ActivityView', {
    extend: 'Ext.Container',
    alias: 'widget.activityview',

    config: {
        layout: {
            type: 'vbox'
        },
        cls: [
            'activity-view'
        ],
        items: [
            {
                xtype: 'list',
                cls: [
                    'twtlist'
                ],
                itemTpl: [
                    '<div class="twt-container-div clearfix">',
                    '<div class="twt-propic">',
                    '    <img src="{profileimage}" />',
                    '  </div> ',
                    ' <div class="twt-container">',
                    '    <h3><span style="float:right">{time}</span> {title}</h3>',
                    '    <p>{text}</p>',
                    '    <tpl if="image"><img src="{image}"  /></tpl>',
                    '  </div>',
                    '</div>'
                ],
                store: 'ProfileStore',
                flex: 1
            }
        ]
    }

});