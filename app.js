Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    models: [
        'ProfileModel',
        'PhotosModel'
    ],
    stores: [
        'ProfileStore',
        'PhotosStore'
    ],
    views: [
        'Home',
        'ActivityView',
        'PhotosView',
        'ElementsView',
        'ProfileView'
    ],
    name: 'MyApp',
    controllers: [
        'HomeController',
        'ProfileController',
        'PhotosController',
        'ActivityController',
        'ElementsController'
    ],
	viewport: {
        autoMaximize: Ext.os.is.Phone ? true: false
    },

    launch: function() {

        Ext.create('MyApp.view.Home', {fullscreen: true});
    }

});
