Ext.define('MyApp.controller.ElementsController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.elementscontroller',
    config: {
        refs: {
            panel: 'panel[name=btmnav]',
            navigationview: 'panel[name=navigaionview]',
            elementsview: 'elementsview',
            elementsbutton: 'button[name=elements]',
            profilebutton: 'button[name=profile]'
        },

        control: {
            "elementsbutton": {
                tap: 'onElementsButtonTap'
            }
        }
    },

    onElementsButtonTap: function(button, e, options) {
        var navigationview = this.getNavigationview(),
        elementsview = this.getElementsview();
        var getactiveCls = Ext.get(this.getPanel().getId()).query('.active');
        getactiveCls.forEach(function(a, b, c) {
            Ext.get(a).removeCls('active');
        });
        this.getProfilebutton().addCls('active1');
        console.log(button.getCls());
        if (button.getCls().indexOf('active')) {
            button.addCls('active');
        }
        navigationview.getLayout().setAnimation({
            type: 'slide',
            direction : 'left'
        });
        navigationview.setActiveItem(3);
    }

});