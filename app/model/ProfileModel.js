Ext.define('MyApp.model.ProfileModel', {
    extend: 'Ext.data.Model',
    alias: 'model.profilemodel',
    config: {
        fields: [
            {
                name: 'title',
                type: 'string'
            },
            {
                name: 'text'
            },
            {
                name: 'profileimage'
            },
            {
                name: 'image'
            },
            {
                name: 'time'
            }
        ]
    }
});