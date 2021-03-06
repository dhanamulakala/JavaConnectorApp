//startup.js file
var globalhttpheaders = {};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
var appConfig = {
    appId: "javaconnector",
    appName: "JavaConnector",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "sampleapps.konylabs.net",
    serverPort: null,
    secureServerPort: null,
    isDebug: false,
    middlewareContext: "middleware"
};
sessionID = "";
skinsInit();

function appInit(params) {
    initializekeywordPageFooter();
    kony.application.setAppFooters([hbxFooterPage]);
    frmCategoryGlobals();
    frmHomeGlobals();
    frmKeywordsGlobals();
    frmSearchOptionGlobals();
    frmTopicGlobals();
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("KonyTheme", themeCallBack, themeCallBack);
};
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
kony.print = function() {
    return;
};