// Where to add
const mainContainer = document.getElementById('main-container');
// What to be add 
const newSection = document.createElement('section')
// append clild
mainContainer.appendChild(newSection)


const header = document.createElement('h1');
header.innerText = 'This is food restuarant';
newSection.append(header)

const createUl = document.createElement('ul');
newSection.appendChild(createUl);

const li1 = document.createElement('li')
li1.innerText = 'Briyani';
createUl.appendChild(li1)

const li2 = document.createElement('li')
li2.innerText = 'Burgar';
createUl.appendChild(li2)

const li3 = document.createElement('li')
li3.innerText = 'Piyazu';
createUl.appendChild(li3)


// another system of appenChild
const newSection1 = document.createElement('section')
mainContainer.appendChild(newSection1)

newSection1.innerHTML = `
    <h1>This is Cloth store</h1>
    <ul>
        <li>T-Shirt</li>
        <li>Pant</li>
        <li>Gengi</li>
        <li>Lungi</li>
    </ul>
`

