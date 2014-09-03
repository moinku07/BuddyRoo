Ext.define('MyApp.controller.PhotosController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.photoscontroller',
    config: {
        refs: {
            photosbutton: {
                selector: 'button[name=photos]',
                xtype: 'photosview',
                autoCreate: true
            },
            photosview: 'photosview',
            navigationview: 'panel[name=navigaionview]',
            panel: 'panel[name=btmnav]'
        },

        control: {
            "photosbutton": {
                tap: 'onPhotosButtonTap'
            }
        }
    },

    onPhotosButtonTap: function(button, e, options) {
        var navigationview = this.getNavigationview(),
        photosview = this.getPhotosview();
        var getactiveCls = Ext.get(this.getPanel().getId()).query('.active');
        getactiveCls.forEach(function(a, b, c) {
            Ext.get(a).removeCls('active');
        });
        var getactiveCls1 = Ext.get(this.getPanel().getId()).query('.active1');
        getactiveCls1.forEach(function(a, b, c) {
            Ext.get(a).removeCls('active1');
        });
        if (button.getCls().indexOf('active')) {
            button.addCls('active');
        }
        navigationview.getLayout().setAnimation({
            type: 'slide',
            direction : 'left',
            reverse : navigationview.getItems().indexOf(navigationview.getActiveItem()) > 2 ? true : false
        });
        navigationview.setActiveItem(2);
    }

});