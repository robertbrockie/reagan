chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
    //if (tab.url.indexOf("https://www.google.co.in/") != -1) { // Inspect whether the place where user clicked matches with our list of URL
        chrome.tabs.executeScript(tab.id, {
            "file": "main.js"
        }, function () { // Execute your code
            console.log("Script Executed .. "); // Notification on Completion
        });
    //}
});