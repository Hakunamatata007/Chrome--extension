window.word = 'Dictonary';

function receiver(request, sender, sendResponse) {
  console.log(request);
  setWord(request.word);
}

chrome.runtime.onMessage.addListener(receiver);


chrome.contextMenus.create({
  title: "Lookup: %s",
  contexts: ["selection"],
  onclick: getword
});

function setWord(word) {
  word = word;
}

function getword(info, tab) {
  console.log("Word " + info.selectionText + " was clicked.");
  word = info.selectionText;
  browser.menus.onClicked.addListener(() => {
    browser.browserAction.openPopup();
  });
}