// const listItem = document.getElementsByTagName('li')

// for ( const list of listItem){
//     console.log(list.innerText)
//     console.log(list)
// }

// document.getElementById('heading').innerText = 'Tour of js dom';

const sections = document.querySelectorAll('section')

for ( const section of sections ){
    section.style.backgroundColor = 'lightGreen';
    section.style.border = '3px solid blue';
    section.style.marginTop = '5px';
    section.style.borderRadius = '5px';
}


const addClass = document.getElementById('section3')
addClass.classList.add('bg-yellow')

const sakibian = document.getElementsByClassName('sakib')[0];
sakibian.classList.remove('sakib')

// append child 
const section1 = document.getElementById('section1');

const newLi = document.createElement('li')
newLi.innerText = 'Bangladesh Kriya Shiikah Protisthan'

section1.appendChild(newLi)

