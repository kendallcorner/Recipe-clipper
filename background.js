browser.contextMenus.create({
  id: "eat-page",
  title: "Eat this page"
});

browser.browserAction.onClicked.addListener(function(tab) {
    browser.tabs.executeScript({
      file: "clipper.js"
    });
});
