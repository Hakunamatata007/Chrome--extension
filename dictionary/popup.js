function setup() {
    noCanvas();
    let page = chrome.extension.getBackgroundPage();
    let word = page.word.trim();

    let url = `https://api.dictionaryapi.dev/api/v1/entries/en/${word}`;
    loadJSON(url, gotData, error);

    function gotData(data) {
        console.log(url);
        console.log(data);
        if (data && data[0] && data[0].meaning) {
            if (data[0].meaning["noun"])
                createP(data[0].meaning["noun"][0].definition);
            else if (data[0].meaning["adjective"])
                createP(data[0].meaning["adjective"][0].definition);
        }
    }

    function error(data) {
        createP("Sorry pal, we couldn't find definitions for the word you were looking for.")
    }
}
