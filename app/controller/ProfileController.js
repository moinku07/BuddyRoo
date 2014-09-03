Ext.define('MyApp.controller.ProfileController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.profilecontroller',
    config: {
        refs: {
            profilebutton: {
                selector: 'button[name=profile]',
                xtype: 'profileview',
                autoCreate: true
            },
            profileview: 'profileview',
            navigationview: 'panel[name=navigaionview]',
            panel: 'panel[name=btmnav]'
        },

        control: {
            "profilebutton": {
                tap: 'onProfileButtonTap'
            }
        }
    },

    onProfileButtonTap: function(button, e, options) {
        var navigationview = this.getNavigationview(),
        profileview = this.getProfileview();
        var getactiveCls = Ext.get(this.getPanel().getId()).query('.active');
        getactiveCls.forEach(function(a, b, c) {
            Ext.get(a).removeCls('active');
        });
        if (button.getCls().indexOf('active1')) {
            button.removeCls('active1');
        }
        if (button.getCls().indexOf('active')) {
            button.addCls('active');
        }
        navigationview.getLayout().setAnimation({
            type: 'slide',
            direction : 'right'
        });
        navigationview.setActiveItem(0);
    }

});