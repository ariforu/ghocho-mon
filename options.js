
// Reacts to a button click by marking the selected button and saving
// the selection
function savePreference(event) {
    apiKey = document.getElementById("api_key")
    compName = document.getElementById("comp_name")
    chrome.storage.sync.set({"apiKey": apiKey.value,"compName": compName.value}, function() {
        document.getElementById("messageDiv").innerText = "Preferences saved"
    });
}

let button = document.getElementById("btn_submit");
button.addEventListener("click", savePreference);

chrome.storage.sync.get(['apiKey','compName'], function(result) {
    document.getElementById("api_key").value = result.apiKey
    document.getElementById("comp_name").value = result.compName
    var _LTracker = _LTracker || [];
    _LTracker.push({
        'logglyKey': result.apiKey,
        'sendConsoleErrors': true,
        'tag': 'ghochomon-' + result.compName
    });
});

