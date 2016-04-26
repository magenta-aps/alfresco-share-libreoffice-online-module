YAHOO.Bubbling.fire("registerAction", {
  actionName : "onActionEditInLibreOfficeOnline",
  fn : function (node) {
    console.log("hurra3");

    var LOOL_GET_TOKEN = Alfresco.constants.PROXY_URI + "libreoffice-online/wopi/token";

    Alfresco.util.Ajax.jsonGet(
        {
          url: LOOL_GET_TOKEN + "?nodeRef=" + encodeURIComponent(node.nodeRef) + "&action=edit",
          successCallback: {
            fn: function(response) {
              var access_token = response.json.access_token;
              var wopi_src_url = response.json.wopi_src_url;
              console.log(access_token, wopi_src_url);

              // Get fileId from nodeRef (just use the uuid part)
              var fileId = Alfresco.util.NodeRef(node.nodeRef).id;

              var wopiFileURL = Alfresco.constants.PROXY_URI + "libreoffice-online/wopi/files/" + fileId;
              var frameSrcURL = wopi_src_url + "WOPISrc=" + encodeURIComponent(wopiFileURL);

              (function ($) {
                var form = '<form id="loleafletform" name="loleafletform" target="loleafletframe" action="' + frameSrcURL + '" method="post">' +
                    '<input name="access_token" value="' + encodeURIComponent(access_token) + '" type="hidden"/></form>';
                var frame = '<iframe id="loleafletframe" name= "loleafletframe" allowfullscreen style="width:100%;height:100%;position:absolute;"/>';

                $('body').append(form);
                $('body').append(frame);

                $('#loleafletframe').load(function() {
                  console.log("Loaded loleafletframe");
                });

                $('#loleafletform').submit();
              })(jQuery);
              // TODO: Load WOPI URL in iframe
            },
            scope: this
          },
          failureMessage: "Server error - could not lookup token!"
        }
    );
  }
});