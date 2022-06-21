const mini = document.getElementById('minimum');
const maxi = document.getElementById('maximum');
const values = document.getElementById('values');
let numbers = []


// Adds numbers to the array
const btnAdd = document.getElementById('add');
btnAdd.addEventListener('click', (n) => {
    n = document.getElementById('numbers').value;
    
    // pushes to the end of the array
    numbers.push(parseInt(n))

    values.innerHTML = numbers;
    // clears input after value entered
    document.getElementById('numbers').value = '';
    document.getElementById('numbers').focus()
})

const btnCalc = document.getElementById('calculate');
btnCalc.addEventListener('click', (min, max) => {
  min = Math.min(...numbers);  
  max = Math.max(...numbers);
  
  mini.innerHTML = min + ' is the lowest number.';
  maxi.innerHTML = max + ' is the highest number.';
})

const btnClear = document.getElementById('clear');
btnClear.addEventListener('click', () => {
    document.getElementById('numbers').focus()
    document.getElementById('numbers').value = '';
    mini.innerHTML = '';
    maxi.innerHTML = '';
    values.innerHTML = '';
    numbers = [];
})

// copyright
const Year = new Date().getFullYear();
document.getElementById('footer').innerHTML = `
&copyAbdus-Samad Charles ${Year}
`;