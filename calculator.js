let button = document.getElementById('btn');
let opens = document.getElementById('side_bars');
let text = document.getElementById('text');
let newBtn = document.getElementById('newBtn');

button.addEventListener('click', ()=> {
  if (opens.style.width === '40%') {
    opens.style.width = '0%'
  } else {
    opens.style.width = '40%'
  }
})


const myArray = ['name', 'school', 'course', 'date'];

myArray.forEach((mas) => {
  newBtn.addEventListener('click', () => {
    let newElement = document.createElement('p')
  newElement.innerHTML = mas;
  text.appendChild(newElement)

  })
  
  
});

