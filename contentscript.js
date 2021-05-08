var _LTracker = _LTracker || [];


chrome.storage.sync.get(['apiKey','compName'], function(result) {
    _LTracker.push({
        'logglyKey': result.apiKey,
        'sendConsoleErrors': true,
        'tag': 'ghochomon-' + result.compName
    });
});

chrome.runtime.sendMessage({action: "tabCount"}, function(response) {
    var message = {
        'url': response.tabURL,
        'title' : response.tabTitle
    }
    _LTracker.push(message);
});

