/*
 ****************************************************************
 *	Name    : helpTopicDetails
 *	Author  : Kony Solutions
 *	Purpose : This function is used to invoke the helptopic_mysql javaservice using appmiddlewareinvokerasync method  .
 ****************************************************************
 */
function helpTopicDetails() {
    var mysqlhelptopic_inputparam = {};
    mysqlhelptopic_inputparam["serviceID"] = "helptopic_mysql";
    mysqlhelptopic_inputparam["id"] = frmCategory["segHelpCategory"]["selectedItems"][0]["hc_id"];
    mysqlhelptopic_inputparam["httpheaders"] = {};
    mysqlhelptopic_inputparam["httpconfigs"] = {};
    kony.application.showLoadingScreen("loadskin", "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, null);
    var mysqlhelptopic = appmiddlewareinvokerasync(mysqlhelptopic_inputparam, helpTopicCallback);
};
/*
 ****************************************************************
 *	Name    : helpTopicCallback
 *	Author  : Kony Solutions
 *	Purpose : This function is used to get parameters status & resultTable i.e. called when appmiddlewareinvokerasync method executes.
 ****************************************************************
 */
function helpTopicCallback(status, mysqlHelpTopicData) {
    frmTopic.lblInfo.setVisibility(false);
    if (status == 400) {
        if (mysqlHelpTopicData["opstatus"] == 0) {
            if (mysqlHelpTopicData != null && mysqlHelpTopicData != undefined && mysqlHelpTopicData["helpTopic"] != null && mysqlHelpTopicData["helpTopic"] != undefined) {
                var htArray = [];
                if (mysqlHelpTopicData["helpTopic"].length == 1) {
                    alert("Topic detail is not available.");
                    kony.application.dismissLoadingScreen();
                    return;
                }
                for (var i = 0; i < mysqlHelpTopicData["helpTopic"].length; i++) {
                    htArray.push({
                        "lblHTName": mysqlHelpTopicData["helpTopic"][i]["name"],
                        "lblHTUrl": mysqlHelpTopicData["helpTopic"][i]["url"]
                    })
                }
                frmTopic.segHelptopic.setData(htArray);
            }
            frmTopic.show();
            kony.application.dismissLoadingScreen();
        } else {
            alert("Cannot find host on this network connection,Please check network & try again.");
            kony.application.dismissLoadingScreen();
            return;
        }
    }
}
// Configuring the request URL to get the Topic Description in browser widget. 
function topicDescription() {
    kony.application.showLoadingScreen("loadskin", "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, null);
    var URL = frmTopic.segHelptopic.selectedItems[0].lblHTUrl;
    frmDescription.brwserDesc.requestURLConfig = {
        "URL": URL,
        "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
    };
    frmDescription.show();
    kony.application.dismissLoadingScreen();
}