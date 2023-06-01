// const result = document.getElementById('result');
// console.log(result);

// const parent = document.querySelector('.second');
// const second = document.querySelector('p');
// let newElement = document.createElement('h3').innerHTML = 'i am here'
// parent.append(newElement);

let guess = 'Wisdom';

const input = document.getElementById('text');

const btn = document.getElementById('btn');
const text = document.querySelector('.text');
const form = document.getElementById('form');

// Adding element to the dom

let createNewElement = document.createElement('p');
createNewElement.classList.add('new')
let text1 = document.createTextNode( `` );
createNewElement.appendChild(text1);
form.append(createNewElement);
function grab(e){
    e.preventDefault()
    
    
    if (input.value == guess && input.value != '') {
        text1.textContent = `Hey you guessed ${input.value}, your guess is correct.`
        
    }else if(input.value != guess && input.value != '') {
        text1.textContent = `Hey you guessed ${input.value}, your guess is incorrect. Please try again`

    }else{
        text1.textContent = `Please make an input`

    }
    
}
form.addEventListener('submit', grab);
