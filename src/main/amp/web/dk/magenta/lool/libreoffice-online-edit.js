/**
 * LibreOffice edit online component.
 *
 * @namespace Magenta
 * @class Magenta.LibreOfficeOnline
 */
// Ensure Magenta root object exists
if (typeof Magenta == "undefined" || !Magenta) {
    var Magenta = {};

}


(function () {

    /**
     * Alfresco.CustomisePages constructor.
     *
     * @param {string} htmlId The HTML id of the parent element
     * @return {Alfresco.CustomisePages} The new CustomisePages instance
     * @constructor
     */
    Magenta.LibreOfficeOnline = function (htmlId) {
        return Magenta.LibreOfficeOnline.superclass.constructor.call(this, "Magenta.LibreOfficeOnline", htmlId, ["container"]);
    };

    YAHOO.extend(Magenta.LibreOfficeOnline, Alfresco.component.Base, {
        /**
         * Object container for initialization options
         *
         * @property options
         * @type object
         */
        options: {
            access_token: '',
            firstName: '',
            lastName: '',
            iFrameURL: '',
            userId: '',
            wopiFileURL: ''
        },

        /**
         * Fired by YUILoaderHelper when required component script files have
         * been loaded into the browser.
         *
         * @method onReady
         */
        onReady: function MLO_onReady() {
            var me = this;
            require(["jquery"], (function ($) {
                var form = '<form id="loleafletform" name="loleafletform" target="loleafletframe" action="' + me.options.iFrameURL + '" method="post">' +
                    '<input name="access_token" value="' + encodeURIComponent(me.options.access_token) + '" type="hidden"/></form>';

                var frame = '<iframe id="loleafletframe" name= "loleafletframe" allowfullscreen style="width:100%;height:100%;position:absolute;"/>';

                $('#loolcontainer').remove();

                var container = '<div id="loolcontainer" style="position: fixed; bottom: 50px; width: 100%; top: 96px; left: 0; background: white;"></div>';
                $('#libreoffice-online').append(container);
                var loolContainer = $('#loolcontainer');

                loolContainer.append(form);
                loolContainer.append(frame);

                $('#loleafletframe').load(function () {
                    console.log("Loaded loleafletframe");
                });

                $('#loleafletform').submit();
            }));

        }
    });
})();