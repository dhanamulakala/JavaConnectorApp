//Form JS File
function frmKeywords_frmKeywords_init_seq0(eventobject, neworientation) {
    searchByHelpKeyword.call(this);
};

function frmKeywords_frmKeywords_preshow_seq0(eventobject, neworientation) {
    popupSrch.hbxKey.setEnabled(false);
    popupSrch.lblKey.skin = "lblTest";
    popupSrch.hbxCateg.setEnabled(true);
    popupSrch.lblCatge.skin = "lblPopup";
    frmKeywords.segHelpKeyword.widgetSkin = "sknSeg2NormalSampleApp";
    frmKeywords.segHelptopic.widgetSkin = "SegRoundWhite";
};

function frmKeywords_btnSearch_onClick_seq0(eventobject) {
    navPopupSrch.call(this);
};

function frmKeywords_segHelpKeyword_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    serviceHelpRelation.call(this);
};

function frmKeywords_segHelptopic_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    topicDescription.call(this);
};

function frmKeywords_vbxLeftFooter_onClick_seq0(eventobject) {
    paginationPrevious.call(this);
};

function frmKeywords_vbxRightFooter_onClick_seq0(eventobject) {
    paginationNext.call(this);
};

function addWidgetsfrmKeywords() {
    var label120775183569156 = new kony.ui.Label({
        "id": "label120775183569156",
        "isVisible": true,
        "text": " Keyword",
        "skin": "lblTitleWhite"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 87
    }, {});
    var btnSearch = new kony.ui.Button({
        "id": "btnSearch",
        "isVisible": true,
        "text": "Search",
        "skin": "btnSrch",
        "focusSkin": "btnSrchFocus",
        "onClick": frmKeywords_btnSearch_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 6, 0, 6],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 13
    }, {});
    var hbox120775183569059 = new kony.ui.Box({
        "id": "hbox120775183569059",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hbxtitle",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 7,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox120775183569059.add(
    label120775183569156, btnSearch);
    var lblInfo1 = new kony.ui.Label({
        "id": "lblInfo1",
        "isVisible": false,
        "text": "Select keyword for help topic : ",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 2, 4, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "containerWeight": 6
    }, {});
    var segHelpKeywordbox = new kony.ui.Box({
        "id": "segHelpKeywordbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 87
    }, {});
    var segHelpKeyword = new kony.ui.SegmentedUI2({
        "id": "segHelpKeyword",
        "isVisible": true,
        "retainSelection": true,
        "widgetDataMap": {
            "lblHelpKeyword": "lblHelpKeyword",
            "hbox121135654666954": "hbox121135654666954",
            "image2120775183568910": "image2120775183568910",
            "hk_id": "hk_id"
        },
        "rowTemplate": segHelpKeywordbox,
        "widgetSkin": "sknSeg2NormalSampleApp",
        "rowSkin": "seg2Normal",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "60606000",
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "groupCells": false,
        "screenLevelWidget": false,
        "onRowClick": frmKeywords_segHelpKeyword_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR
    }, {
        "margin": [0, 1, 0, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 87
    }, {});
    var lblHelpKeyword = new kony.ui.Label({
        "id": "lblHelpKeyword",
        "isVisible": true,
        "skin": "lblSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [2, 2, 0, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 94
    }, {
        "renderAsAnchor": false
    });
    var image2120775183568910 = new kony.ui.Image2({
        "id": "image2120775183568910",
        "isVisible": true,
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "src": "arrow.png"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var hbox121135654666954 = new kony.ui.Box({
        "id": "hbox121135654666954",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox121135654666954.add(
    lblHelpKeyword, image2120775183568910);
    segHelpKeywordbox.add(
    hbox121135654666954);
    var scrollbox121135654664768 = new kony.ui.ScrollBox({
        "id": "scrollbox121135654664768",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_VERTICAL,
        "showScrollbars": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "enableScrollByPage": false
    }, {
        "percent": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "containerHeight": 88,
        "containerHeightReference": constants.SCROLLBOX_HEIGHT_BY_FORM_REFERENCE,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "scrollArrowConfig": ["", "", "", ""]
    });
    scrollbox121135654664768.add(
    segHelpKeyword);
    var hbox121135654664762 = new kony.ui.Box({
        "id": "hbox121135654664762",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 78,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox121135654664762.add(
    scrollbox121135654664768);
    var imgLeftfooter = new kony.ui.Image2({
        "id": "imgLeftfooter",
        "isVisible": true,
        "src": "arwleftd.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 4, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": 40,
        "referenceHeight": 25,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var hbxLeftFooter = new kony.ui.Box({
        "id": "hbxLeftFooter",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxLeftFooter.add(
    imgLeftfooter);
    var vbxLeftFooter = new kony.ui.Box({
        "id": "vbxLeftFooter",
        "isVisible": true,
        "onClick": frmKeywords_vbxLeftFooter_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 29,
        "margin": [4, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxLeftFooter.add(
    hbxLeftFooter);
    var lblFrom = new kony.ui.Label({
        "id": "lblFrom",
        "isVisible": true,
        "text": null,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 10],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {});
    var lblOf = new kony.ui.Label({
        "id": "lblOf",
        "isVisible": true,
        "text": "of",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 10],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 31
    }, {});
    var lblTo = new kony.ui.Label({
        "id": "lblTo",
        "isVisible": true,
        "text": null,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 10],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 34
    }, {});
    var hbxIndexFooter = new kony.ui.Box({
        "id": "hbxIndexFooter",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxIndexFooter.add(
    lblFrom, lblOf, lblTo);
    var vbxIndexFooter = new kony.ui.Box({
        "id": "vbxIndexFooter",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 44,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxIndexFooter.add(
    hbxIndexFooter);
    var imgRightfooter = new kony.ui.Image2({
        "id": "imgRightfooter",
        "isVisible": true,
        "src": "arwrightd.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 4, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var hbxRightFooter = new kony.ui.Box({
        "id": "hbxRightFooter",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxRightFooter.add(
    imgRightfooter);
    var vbxRightFooter = new kony.ui.Box({
        "id": "vbxRightFooter",
        "isVisible": true,
        "onClick": frmKeywords_vbxRightFooter_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 27,
        "margin": [0, 0, 4, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxRightFooter.add(
    hbxRightFooter);
    var hbxFooterPage = new kony.ui.Box({
        "id": "hbxFooterPage",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hbxFooterSkin",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 22,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxFooterPage.add(
    vbxLeftFooter, vbxIndexFooter, vbxRightFooter);
    var vbox121135654664679 = new kony.ui.Box({
        "id": "vbox121135654664679",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 40,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox121135654664679.add(
    hbox121135654664762, hbxFooterPage);
    var lblInfo = new kony.ui.Label({
        "id": "lblInfo",
        "isVisible": false,
        "text": null,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 19
    }, {});
    var segHelptopicbox = new kony.ui.Box({
        "id": "segHelptopicbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 85
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
        "widgetSkin": "SegRoundWhite",
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
        "onRowClick": frmKeywords_segHelptopic_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR
    }, {
        "margin": [2, 1, 4, 5],
        "padding": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 85
    }, {});
    var lblHTName = new kony.ui.Label({
        "id": "lblHTName",
        "isVisible": true,
        "skin": "lblSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 26
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
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 26
    }, {
        "renderAsAnchor": false
    });
    segHelptopicbox.add(
    lblHTName, lblHTUrl);
    var scrollbox121135654665108 = new kony.ui.ScrollBox({
        "id": "scrollbox121135654665108",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_VERTICAL,
        "showScrollbars": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "enableScrollByPage": false
    }, {
        "percent": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "containerHeight": 90,
        "containerHeightReference": constants.SCROLLBOX_HEIGHT_BY_FORM_REFERENCE,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "scrollArrowConfig": ["", "", "", ""]
    });
    scrollbox121135654665108.add(
    lblInfo, segHelptopic);
    var hbox121135654665107 = new kony.ui.Box({
        "id": "hbox121135654665107",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 0, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox121135654665107.add(
    scrollbox121135654665108);
    var vbox121135654664680 = new kony.ui.Box({
        "id": "vbox121135654664680",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 60,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox121135654664680.add(
    hbox121135654665107);
    var hbox121135654664678 = new kony.ui.Box({
        "id": "hbox121135654664678",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 30,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox121135654664678.add(
    vbox121135654664679, vbox121135654664680);
    frmKeywords.add(
    hbox120775183569059, lblInfo1, hbox121135654664678);
};

function frmKeywordsGlobals() {
    var MenuId = [];
    frmKeywords = new kony.ui.Form2({
        "id": "frmKeywords",
        "title": "Search by keyword",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmFormBgImg",
        "init": frmKeywords_frmKeywords_init_seq0,
        "preShow": frmKeywords_frmKeywords_preshow_seq0,
        "addWidgets": addWidgetsfrmKeywords
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "outTransitionConfig": {
            "formTransition": "None"
        }
    });
};