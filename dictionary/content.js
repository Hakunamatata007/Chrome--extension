function wordHighlighted() {
    let highlightedWord = window.getSelection().toString();
    console.log("highlightedWord ", highlightedWord);
    if (highlightedWord && highlightedWord.length > 0) {
        chrome.runtime.sendMessage({ word: highlightedWord })
    }
}

window.addEventListener('mouseup', wordHighlighted);