// selectors

// selecting a single HTML element
var mainCont= document.getElementById('main__cont');

//selecting  a group of elements by thier class name
var main=document.getElementsByClassName('main');

//selecting a group of elements by thier tag name
var mainEle=document.getElementsByTagName('div');

console.log(mainCont)
console.log(main)
console.log(mainEle)

// selecting a single element using the querySelector
var mainCont02= document.querySelector('div')

// selecting a group of elements
var group=document.querySelectorAll('div')

console.log(mainCont02)
console.log(group)

// to create a new HTML element

var newEle=document.createElement('section');

// to add a new element to the page

mainCont.appendChild(newEle);

console.log(newEle)

// to add a text inside any element

newEle.textContent="this is a new element!";

// to add attributes
newEle.setAttribute('id', 'new')
newEle.setAttribute('class', 'new__ele')

if(newEle.hasAttribute("id")){
    console.log(newEle.getAttribute("id"))
}
// add new HTML element inside the target
newEle.innerHTML= '<ul id="list"></ul>';

// add classes

newEle.className= "newClass";
newEle.classList.add("new__class02");

//remove classes
newEle.classList.remove("new__class02");



/// to do list
// store the user input

var userInput=document.getElementById('user__input');
console.log(userInput)

// store the submit button
var submit=document.getElementById("butt");
console.log(submit)

// adding an event listener
submit.addEventListener('click', submitData);


//create the submit function
function submitData(event){
    event.preventDefault();
    var msg=userInput.value;
    console.log(msg);
    var msgCont=document.getElementById("msg__cont");
    // msgCont.textContent= msg;
    var item=document.createElement('div');
    if(msg !== ""){
        item.textContent=msg;
        item.classList.add('item__ok');
        msgCont.appendChild(item);
    }else if(msg === ""){
        var error=document.createElement('div');
        error.textContent= "Please Write Something To Be Added";
        error.classList.add("item__err");
        var errorCont=document.getElementById('err__cont');
        errorCont.appendChild(error);

    }
    

}