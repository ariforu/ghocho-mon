var tabURL = "nothing"
var tabTitle = "n/a"

function getLocation(href) {
    var match = href.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
    return match && {
        protocol: match[1],
        host: match[2],
        hostname: match[3],
        port: match[4],
        pathname: match[5],
        search: match[6],
        hash: match[7]
    }
}

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    tabURL = tab.url
    tabTitle = tab.title
});

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.action == "tabCount") {
            sendResponse({"tabURL": tabURL, "tabTitle": tabTitle, "tabDetails": getLocation(tabURL)});
        }
    });


