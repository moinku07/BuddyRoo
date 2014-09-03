Ext.define('MyApp.controller.ActivityController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.activitycontroller',
    config: {
        refs: {
            panel: 'panel[name=btmnav]',
            navigationview: 'panel[name=navigaionview]',
            activitybutton: 'button[name=activity]',
            activityview: 'activityview'
        },

        control: {
            "activitybutton": {
                tap: 'onActivityButtonTap'
            }
        }
    },

    onActivityButtonTap: function(button, e, options) {
        var navigationview = this.getNavigationview(),
        activityview = this.getActivityview();
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
            reverse : navigationview.getItems().indexOf(navigationview.getActiveItem()) > 1 ? true : false
        });
        navigationview.setActiveItem(1);
    }

});