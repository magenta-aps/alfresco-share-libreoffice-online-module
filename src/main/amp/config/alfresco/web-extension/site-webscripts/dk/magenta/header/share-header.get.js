var header = widgetUtils.findObject(model.jsonModel.widgets, "id", "HEADER_TITLE_BAR");
var titleBar = widgetUtils.findObject(model.jsonModel.widgets, "id", "HEADER_TITLE_MENU");
var navMenu = widgetUtils.findObject(model.jsonModel.widgets, "id", "HEADER_NAVIGATION_MENU_BAR");

if (titleBar) {
    widgetUtils.deleteObjectFromArray(header.config.widgets, "id", "HEADER_TITLE_MENU");
    delete titleBar;

}

if (navMenu){
    logger.log('--- Found Nav menu ---');
    navMenu.config.widgets = [{
        id: "HEADER_NAVIGATION_BACK_TO_DOC_PREVIEW",
        name: "libreofficepage/AlfMenuBarItem",
        config: {
            id: "HEADER_NAVIGATION_BACK_TO_DOC_PREVIEW",
            label: msg.get("header.back.to.preview"),
            iconClass: "alf-back-icon",
            targetUrl: "#back",
            selected: false
        }
    }];

}