const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const number = document.querySelector('span');

let count = 0;
number.innerText = count;

const updateText = () => {
    number.innerText = count;
}

const handleAdd = () => {
    count = count + 1;
    updateText();
}

const handleSubtract = () => {
    count = count - 1;
    updateText();
}

add.addEventListener('click', handleAdd)
subtract.addEventListener('click', handleSubtract)