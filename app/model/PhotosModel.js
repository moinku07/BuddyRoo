Ext.define('MyApp.model.PhotosModel', {
    extend: 'Ext.data.Model',
    alias: 'model.photosmodel',
    config: {
        fields: [
            {
                name: 'name',
                type: 'string'
            },
            {
                name: 'url',
                type: 'string'
            }
        ]
    }
});