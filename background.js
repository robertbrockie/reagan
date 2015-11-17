chrome.browserAction.onClicked.addListener(function (tab) {
    if (tab.url.indexOf("slate.com/") != -1) {
        chrome.tabs.executeScript(tab.id, {
            "file": "main.js"
        }, function () {
            console.log("Reagan done!");
        });
    }
});