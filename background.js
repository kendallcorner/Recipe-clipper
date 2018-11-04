browser.browserAction.onClicked.addListener(function(tab) {
    var url = tab.url
    console.log("url of current tab is ", url)

    browser.tabs.executeScript({
      file: "clipper.js"
    });
});
