

function createParagraph() {
    console.log("create paragraph has been logged")
    var firstWord = document.getElementById("firstLine").value;
    var secondWord = document.getElementById("secondLine").value;
    var thirdWord = document.getElementById("thirdLine").value;
    var forthWord = document.getElementById("forthLine").value;
    var fifthWord = document.getElementById("fifthLine").value;
    var sixthWord = document.getElementById("sixthLine").value;
    var seventhWord = document.getElementById("seventhLine").value;
    
    console.log(firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord, seventhWord)

    var paragraph = "Deadly, when I play a "+ firstWord +" melody, Anything less than the "+ secondWord +" is a felony, Love it or "+ thirdWord +" it, you better gangway. You better hit the bullseye, the "+ forthWord +" don't play. If there was a problem, yo I'll "+ fifthWord +" it. Check out the "+ sixthWord +" while my DJ "+ seventhWord +" it."

    console.log(paragraph);

    document.getElementById("answer").innerHTML = paragraph;
    document.getElementById('answer').style.fontSize = '25px';
    document.getElementById('answer').style.color = "#ffffff";
}