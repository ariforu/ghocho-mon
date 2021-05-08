var _LTracker = _LTracker || [];
var compName =""

chrome.storage.sync.get(['apiKey','compName'], function(result) {
    compName = result.compName
    _LTracker.push({
        'logglyKey': result.apiKey,
        'sendConsoleErrors': true,
        'tag': 'ghochomon-' + result.compName
    });
});

chrome.runtime.sendMessage({action: "tabCount"}, function(response) {
    var message = {
        'url': response.tabURL,
        'title' : response.tabTitle,
        'details' : response.tabDetails,
        'compName' : compName
    }
    _LTracker.push(message);
});

