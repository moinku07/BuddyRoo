Ext.define('MyApp.view.PhotosView', {
    extend: 'Ext.Container',
    alias: 'widget.photosview',

    config: {
        layout: {
            type: 'vbox'
        },
        cls: [
            'photo-view'
        ],
        items: [
            {
                xtype: 'dataview',
                itemTpl: [
                    '<img src="{url}"  />'
                ],
                store: 'PhotosStore',
                flex: 1
            }
        ]
    }

});