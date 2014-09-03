Ext.define('MyApp.store.ProfileStore', {
    extend: 'Ext.data.Store',
    alias: 'store.profilestore',
    requires: [
        'MyApp.model.ProfileModel'
    ],

    config: {
        autoLoad: true,
        model: 'MyApp.model.ProfileModel',
        storeId: 'ProfileStore',
        proxy: {
            type: 'ajax',
            url: 'data.json',
            reader: {
                type: 'json'
            }
        }
    }
});