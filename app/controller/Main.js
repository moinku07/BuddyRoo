Ext.define('MyApp.controller.Main', {
    extend: 'Ext.app.Controller',
    alias: 'controller.main',
    config: {
        refs: {
            qrbtn: 'button[name=qrbtn]',
            qrtxt: 'textfield[name=qrtxt]',
            qrpanel: 'panel[name=qrpanel]'
        },

        control: {
            "qrbtn": {
                tap: 'onButtonTap'
            }
        }
    },

    onButtonTap: function(button, e, options) {
        var qrtxt = this.getQrtxt().getValue();
        if(qrtxt.length && /http/gi.test(qrtxt)){
            this.getQrpanel().show();
            setTimeout(function(){$('#qrOutput').qrcode(qrtxt);},260);
        }else{
            Ext.Msg.alert('Error','Please enter a valid URL.');
        }
    }

});