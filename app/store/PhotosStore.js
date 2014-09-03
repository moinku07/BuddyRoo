Ext.define('MyApp.store.PhotosStore', {
    extend: 'Ext.data.Store',
    alias: 'store.photosstore',
    requires: [
        'MyApp.model.PhotosModel'
    ],

    config: {
        autoLoad: true,
        model: 'MyApp.model.PhotosModel',
        storeId: 'PhotosStore',
        proxy: {
            type: 'ajax',
            url: 'photos.json',
            reader: {
                type: 'json'
            }
        }
    }
});