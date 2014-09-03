Ext.define('MyApp.controller.HomeController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.homecontroller',
    config: {
        refs: {
            profileview: 'profileview',
            navigationview: 'panel[name=navigaionview]',
            profilebutton: 'button[name=profile]'
        }
    },

    launch: function() {
        var button = this.getProfilebutton();
        if(button.getCls().indexOf('active')){
            button.addCls('active');
        }

    }

});