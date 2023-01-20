console.log('javascript is running!');


/* longer js block comment
const is a type of variable - a bit of memory that can hold a value

JS uses (can use) ANY valid CSS selector to make a connection to any element on the page- it works the same way as CSS selectors do, because its using css selectors to find matching element(s)

the document is the DOM  - the web page and all of its elements

querySelector is the method (function) that makes the connection between JS and the DOM (the elements) */


// STEP 1- Make the connection to the element(s) you want to interact with
const jpgGraphic = document .querySelector ("#bitmap");

function logID() {
    consol.log ('clicked on this element;',this.id);
}

//STEP 2-decide how you want the user to interact with the object you created in step 1.

jpgGraphic.addEventListener('click', logID);