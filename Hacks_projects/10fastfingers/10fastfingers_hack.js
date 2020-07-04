// {
//     const wordList = Array.prototype.map.call(document.querySelectorAll("#words #row1 span"), (x => x.textContent));
//     const inputfield = document.querySelector("#inputfield");
//     let highlighted;

//     onkeyup = () => {
//         typing();
//     };


//     const typing = () => {
//         let wordCount = 0;
//         let letterCount = 0;

//         return () => {
//             highlighted = document.querySelector("#row1 .highlight").innerText.split("");

//             if (!highlighted[letterCount]) {

//             }
//             inputfield.value = hightlighted[letterCount];



//             wordCout++;
//         };

//     };

// }






//PASTE THE CODE INTO THE BROWSER'S CONSOLE, AND 

{
    const wordList = Array.prototype.map.call(document.querySelectorAll("#words #row1 span"), (x => x.textContent));
    const inputfield = document.querySelector("#inputfield");
    let highlighted;
    // wordList.forEach(x => inputfield.value = x);

    inputfield.addEventListener('keydown', (e) => {
        console.log(e.code);
        if (e.code == "Space") {
            highlighted = document.querySelector("#row1 .highlight").innerText;
            inputfield.value = highlighted;
        }
    });
}



setInterval(() => {
    backspace_counter = -1
}, 100);

cookieconsent.hasInitialised = false; cookieconsent.hasTransition = false;
setTimeout(()=>{cookieconsent.hasInitialised = true; cookieconsent.hasTransition = true;}, 5000);