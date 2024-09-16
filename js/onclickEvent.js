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