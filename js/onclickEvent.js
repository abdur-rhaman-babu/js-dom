function makeYellow (){
    document.body.style.backgroundColor = 'yellow'
}

const makeBlue = document.getElementById('makeBlue')
makeBlue.onclick = makeBlueButton;

function makeBlueButton (){
    document.body.style.backgroundColor = 'blue'
}


const makePurple = document.getElementById('makePurple')
makePurple.onclick = function makePurpleButton (){
    document.body.style.backgroundColor = 'purple'
}


const makeGreenButton = document.getElementById('make-green')
makeGreenButton.addEventListener('click', makeGreen);

function makeGreen(){
    document.body.style.backgroundColor = 'green'
}


const makePinkButton = document.getElementById('make-pink');
makePinkButton.addEventListener('click', function makePink(){
    document.body.style.backgroundColor = 'pink'
})


document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod'
})

