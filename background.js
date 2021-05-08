var tabURL = "nothing"
var tabTitle ="n/a"
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    tabURL = tab.url
    tabTitle = tab.title
});

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.action == "tabCount"){
            sendResponse({"tabURL": tabURL,"tabTitle": tabTitle});
        }
    });


