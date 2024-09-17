// system no 1
function massage(){
    const myMassage = document.getElementById('massage-here');
    myMassage.innerText = 'I love Bangladesh'
}

// system no 2
document.getElementById('massage2').addEventListener('click',function(){
    const myMassage = document.getElementById('massage-here');
    myMassage.innerText = 'Bangladesh is my birthland';
})

// system no 3

document.getElementById('update-text').addEventListener('click', function(){
    const updateInput = document.getElementById('update-input')
    // const inputText = updateInput.value;
    
    const inputUpdate = document.getElementById('input-update')
    inputUpdate.innerText = updateInput.value;
    updateInput.value = ''
})