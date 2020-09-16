/*--------------------project plan--------------------- */
/*
---to do----1] prevent user from entering the same statement
        ----2] item numbers to be added to each item
        ----3] add date and time
        ----4] delete items
        ----5] confirm items
*/







// // selectors

// // selecting a single HTML element
// var mainCont= document.getElementById('main__cont');

// //selecting  a group of elements by thier class name
// var main=document.getElementsByClassName('main');

// //selecting a group of elements by thier tag name
// var mainEle=document.getElementsByTagName('div');

// console.log(mainCont)
// console.log(main)
// console.log(mainEle)

// // selecting a single element using the querySelector
// var mainCont02= document.querySelector('div')

// // selecting a group of elements
// var group=document.querySelectorAll('div')

// console.log(mainCont02)
// console.log(group)

// // to create a new HTML element

// var newEle=document.createElement('section');

// // to add a new element to the page

// mainCont.appendChild(newEle);

// console.log(newEle)

// // to add a text inside any element

// newEle.textContent="this is a new element!";

// // to add attributes
// newEle.setAttribute('id', 'new')
// newEle.setAttribute('class', 'new__ele')

// if(newEle.hasAttribute("id")){
//     console.log(newEle.getAttribute("id"))
// }
// // add new HTML element inside the target
// newEle.innerHTML= '<ul id="list"></ul>';

// // add classes

// newEle.className= "newClass";
// newEle.classList.add("new__class02");

// //remove classes
// newEle.classList.remove("new__class02");



/// to do list
// store the user input

var userInput=document.getElementById('user__input');
console.log(userInput)

// store the submit button
var submit=document.getElementById("butt");
console.log(submit)

// adding an event listener
submit.addEventListener('click', submitData);
// collecting all list items

var msgList=[];
var confirmedMsgs=[];
let msggAll=[];

//create the submit function
function submitData(event){
    event.preventDefault();
    var msg=userInput.value;
    console.log(msg);
    var msgCont=document.getElementById("msg__cont");
    // msgCont.textContent= msg;
    var item=document.createElement('li');

    if((msg !== "") && (!msgList.includes(msg))){
        // 
        msgList.push(msg);
        console.log(msgList);
        var list=document.createElement('ul');
        // var msgStyled=`<span class="num">${(msgList.indexOf(msg) + 1)}</span><span>${date()}</span>
        // <h4 class="txt">${msg}</h4><span class="close">x</span><span class="ok">ok</span>`;
        // item.innerHTML= msgStyled;
        let msgg= new MassegeGenerator((msgList.indexOf(msg) + 1), `${date()}`, `${time()}`, msg )
        msggAll.push(msgg);
        item.innerHTML=msgg.generateElement();
        console.log(msggAll)
        item.classList.add('item__ok');
        list.classList.add("list")
        list.appendChild(item)
        msgCont.appendChild(list); 
        ok(msg);   
        close();    
    }else if(msg === ""){
        var error=document.createElement('div');
        error.textContent= "Please Write Something To Be Added";
        error.classList.add("item__err");
        var errorCont=document.getElementById('err__cont');
        errorCont.appendChild(error);
    }


}

function ok(msg){
    var ok=document.getElementsByClassName("ok");
    if(ok){
        console.log(ok);
        var okArr=Array.from(ok)
        console.log(okArr);
       for(i=0; i<okArr.length; i++){
        console.log(okArr[i]);
        okArr[i].addEventListener('click', function(){
            if(!confirmedMsgs.includes(msg)){
                confirmedMsgs.push(msg);
                console.log(confirmedMsgs)
            }
            
        })
       }
    }else{
        console.log("not here")
    }
}

function close(){
    var close=document.getElementsByClassName("close");
    if(close){
        console.log(close);
        var closeArr=Array.from(close)
        console.log(closeArr);
       for(i=0; i<closeArr.length; i++){
        console.log(closeArr[i]);
        closeArr[i].addEventListener('click', function(){
            closeArr.forEach(function(item){
            console.log(item.parentElement);
            item.parentElement.remove();
            })
            
        })
       }
    }else{
        console.log("noot heeeere");
    }
}


function date(){
    var today= new Date();
    var month=today.getMonth()+ 1;
    var year=today.getFullYear();
    var date=today.getDate();
    
    var currentDate=`${date}/${month}/${year}`;
    return currentDate;
}

// create the time function
function time(){
    let today= new Date();
    let hours=today.getHours();
    let min=today.getMinutes();
    let sec=today.getSeconds();
    let currentTime=`${hours}:${min}:${sec}`;
    return currentTime;
}
time()
// testing the objects
function MassegeGenerator(msgId, msgDate, msgTime, msgContent){
    this.id=msgId
    this.content=msgContent
    this.date=msgDate
    this.time=msgTime
    this.generate= ()=>{
        console.log(`${msgId}- ${msgDate}>> ${msgContent} ${msgTime}`);
    }
    this.generateElement= ()=>{
        return `<span class="num">${msgId}</span><span>${msgDate} ${msgTime}</span>
        <h4 class="txt">${msgContent}</h4><span class="close">x</span><span class="ok">ok</span>`;
    }
}

