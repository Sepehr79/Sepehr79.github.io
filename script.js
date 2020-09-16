const text = ["Talk is cheap. Show me the code.",
    "Programs must be written for people to read, and only incidentally for machines to execute.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "I'm not a great programmer; I'm just a good programmer with great habits.",
    "Truth can only be found in one place: the code."]
var paper = null
var textIndex = 0
var sentenceIndex = 0
var wrote = ""


async function writeText(){
    paper = document.getElementById("paper")

    var t = setInterval(function (){
        wrote += text[sentenceIndex][textIndex]
        paper.innerText = wrote
        if (textIndex < text[sentenceIndex].length){
            textIndex += 1
        }else{
            wrote = ""
            textIndex = 0
            sentenceIndex++
            sleep(3000)
            if (sentenceIndex === text.length - 1){
                sentenceIndex = 0
            }
        }
    }, 100)
}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

