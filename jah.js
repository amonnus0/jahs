function openCard(){

    document
    .getElementById("card")
    .classList.add("open");

}


function flipLetter(){

    document
    .getElementById("letter")
    .classList.toggle("flip");

}



document.getElementById("backButton").onclick = function(){

    document
    .getElementById("letter")
    .classList.add("flip");


    setTimeout(function(){

        document
        .getElementById("loveScreen")
        .classList.add("show");

    },1000);

}

function loveScreen(){

document
.getElementById("loveScreen")
.classList.add("show");

}

const backButton = document.getElementById("backButton");

if(backButton){

backButton.onclick = function(){

    document
    .getElementById("loveScreen")
    .classList.add("show");

};

}