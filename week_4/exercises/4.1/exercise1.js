// select empty div and assign it to a variable
const myEmptyDiv = document.querySelector('#myEmptyDiv');

// put h1 inside of div
// create new element
const heading = document.createElement('h1');
heading.innerHTML = 'Humming is one of the ways llamas communicate.';
heading.style.cursor = 'pointer' ;
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);
function handleHeadingClick () {
    console.log('heading has been clicked');
    document.body.style.backgroundColor = 'pink' ;
}
