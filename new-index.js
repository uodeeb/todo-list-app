/*______________________________ Project Plan_________________________________________ */
/*
1. collect the user input
--a. user input value
--b. store the "add item" button
--c. add event listener
--d. initiate a function to save the to do item
2. generate the to do list UI
--a. build a function to generate the date
--b. build a function to generate the time
--c. append the item to the container
3. implement the item functionalities
--a. add a remove functionality
--b. add a complete mark
--c. add edit functionality
4. build a notification system for reminders
*/
// store all messages
let allMsgs=[];
let testArr=[];
console.log(allMsgs)
// build a function to store the user input value
function storeUserInput(){
    const userInput=document.getElementById("user__input").value;
    // console.log(userInput.value);
    return userInput;
}
// storeUserInput();
// setTimeout(storeUserInput, 10000)

// build a function to store the user input value on a add item button click
function addItem(){
    const button=document.getElementById("butt");
    console.log(button)
    button.addEventListener("click", handle);
}
addItem();
console.log(allMsgs)

function getArrMsgs(arr){
    for(item of arr){
        console.log(item)

    }

}
// build a function to handle the messages
function handle(event){
    event.preventDefault();
    let msg=storeUserInput();
    if(msg !== ""){
    console.log(msg)
    let newMsg=new MsgGenerator(msg, getDate(), getTime())
    console.log(newMsg)
    allMsgs.push(newMsg)
    for(item of allMsgs){
        if(allMsgs.includes(item)){
            let msg=item.msg
            let time=item.time
            let date=item.date
            console.log(msg, time, date)
            generateUI(msg, time, date)
        } else {
            const err=document.getElementById("err__cont")
            err.textContent="Add a New Item Please!"
        }

    }
}else {
    const err=document.getElementById("err__cont")
    err.textContent="Add a New Item Please!"
}
    console.log(allMsgs)
}

// build a function to get the date
function getDate(){
    var today= new Date();
    var month=today.getMonth()+ 1;
    var year=today.getFullYear();
    var date=today.getDate();
    var currentDate=`${date}/${month}/${year}`;
    return currentDate;
}

getDate();

// build a function to get time
function getTime(){
    let today= new Date();
    let hours=today.getHours();
    let min=today.getMinutes();
    let sec=today.getSeconds();
    // console.log(today.toTimeString())
    min= min<10?`0${min}`:`${min}`
    // console.log(`${hours}:${min}:${sec}`)
    return `${hours}:${min}:${sec}`
}

getTime()

// build a constructor to generate the UI
function MsgGenerator(msg, date, time){
    this.msg=msg,
    this.date=date,
    this.time=time

}




// function generateMsgObj(){
//     console.log()
// }

// generateMsgObj()


// build a function to generate the UI
function generateUI(msg, time, date){
    const cont=document.getElementById("msg__cont");
    console.log(cont)
    let msgg=document.createElement("h3")
    let timee=document.createElement("p")
    let datee=document.createElement("p")
    msgg.textContent=msg
    timee.textContent=time
    datee.textContent=date
    let newDiv=document.createElement("div")
    newDiv.append(msgg, timee, datee)
    newDiv.setAttribute("id", "msgDiv")
    newDiv.classList.add("msg__div")
    cont.appendChild(newDiv)

}
