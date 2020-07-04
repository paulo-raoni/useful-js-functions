{
    const parentDiv = document.querySelector(".inputPanel > tbody > tr > td > table > tbody > tr > td > div > div");
    const txtInput = document.querySelector(".txtInput");
    let wordCount = 0;
    let text = "";

    parentDiv.childNodes.forEach(x => text += x.innerText);
    text = text.split(" ");

    txtInput.addEventListener("keydown", (e) => {

        if (e.code == "Space") {
            e.target.value = text[wordCount];
        }

        wordCount++;
    });

}


//Anticheat handler

const elements = (function(doc){
    const buttonSubmit = doc.querySelector(".gwt-Button");
    const timeDisplay = doc.querySelector(".timeDisplay");
    const timeSpan = doc.querySelector(".timeDisplay span");

    return {
        buttonSubmit: buttonSubmit,
        timeDisplay: timeDisplay,
        timeSpan : timeSpan
    }

}(document));

elements.timeDisplay.__listener.j = 500;

// delete elements.timeDisplay.__listener;