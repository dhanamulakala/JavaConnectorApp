//Form JS File
function frmTopic_segHelptopic_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    topicDescription.call(this);
};

function addWidgetsfrmTopic() {
    var lblInfo = new kony.ui.Label({
        "id": "lblInfo",
        "isVisible": false,
        "text": null,
        "skin": "lblWhite"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 0],
        "padding": [2, 4, 2, 4],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var segHelptopicbox = new kony.ui.Box({
        "id": "segHelptopicbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 45
    }, {});
    var segHelptopic = new kony.ui.SegmentedUI2({
        "id": "segHelptopic",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblHTUrl": "lblHTUrl",
            "lblHTName": "lblHTName"
        },
        "rowTemplate": segHelptopicbox,
        "widgetSkin": "SknSeg2NormalSamplApp2",
        "rowSkin": "seg2Normal",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646446",
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "groupCells": false,
        "screenLevelWidget": false,
        "onRowClick": frmTopic_segHelptopic_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR
    }, {
        "margin": [3, 3, 3, 3],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 45
    }, {});
    var lblHTName = new kony.ui.Label({
        "id": "lblHTName",
        "isVisible": true,
        "skin": "lblSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 2, 0, 2],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 14
    }, {
        "renderAsAnchor": false
    });
    var lblHTUrl = new kony.ui.Label({
        "id": "lblHTUrl",
        "isVisible": true,
        "skin": "lblUrlSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [2, 2, 2, 4],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 14
    }, {
        "renderAsAnchor": false
    });
    segHelptopicbox.add(
    lblHTName, lblHTUrl);
    frmTopic.add(
    lblInfo, segHelptopic);
};

function frmTopicGlobals() {
    var MenuId = [];
    frmTopic = new kony.ui.Form2({
        "id": "frmTopic",
        "title": "Topic Detail",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmFormBgImg",
        "addWidgets": addWidgetsfrmTopic
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "inTransitionConfig": {
            "formTransition": "none"
        },
        "outTransitionConfig": {
            "formTransition": "none"
        }
    });
};