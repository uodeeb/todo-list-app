/*--------------------project plan--------------------- */
/*
---to do----1] prevent user from entering the same statement
        ----2] item numbers to be added to each item
        ----3] add date and time
        ----4] delete items
        ----5] confirm items
*/

/*---------------------Global Variables ----------------- */
// store the user input
const userInput=document.getElementById('user__input');
// store the submit button
const submit=document.getElementById("butt");
// store the masseges
let msgList=[];
let msgObjList=[];

/*---------------------create the submit func------------- */
let submitData= (e)=>{
    e.preventDefault();
    let msg=userInput.value;
    if((msg !== "") && (!msgList.includes(msg))){
        pushToArr(msg, msgList);
        // use massege constructor
        let msgg= new MassegeGenerator((msgList.indexOf(msg) + 1), `${date()}`, `${time()}`, msg )
        pushToArr(msgg, msgObjList);
        let msgCont=document.getElementById("msg__cont");
        let item=document.createElement('li');
        let list=document.createElement('ul');
        item.innerHTML=msgg.generateElement();
        addClasss(item,'item__ok');
        addClasss(list, "list")
        list.appendChild(item)
        msgCont.appendChild(list); 
    }else if(msg === ""){
        var error=document.createElement('div');
        error.textContent= "Please Write Something To Be Added";
        error.classList.add("item__err");
        var errorCont=document.getElementById('err__cont');
        errorCont.appendChild(error);
    }    
}
/*---------------------create element func----------------- */
let createElement= (tagName, attr, value)=>{
    let newElement=document.createElement(tagName);
    newElement.setAttribute(attr, value);
}
/*---------------------create pussh to array func----------- */
let pushToArr=(pushedItem, arr)=>{
    arr.push(pushedItem); 
    console.log(arr);
}
/*---------------------create adding class func------------- */
let addClasss=(elem, clas)=>{
    elem.classList.add(clas);
}
/*----------------------generate date----------------------- */
let date=()=>{
    var today= new Date();
    var month=today.getMonth()+ 1;
    var year=today.getFullYear();
    var date=today.getDate();
    var currentDate=`${date}/${month}/${year}`;
    return currentDate;
}
/*----------------------generate time----------------------- */
let time=()=>{
    let today= new Date();
    let hours=today.getHours();
    let min=today.getMinutes();
    let sec=today.getSeconds();
    let currentTime=`${hours}:${min}:${sec}`;
    return currentTime;
}
/*---------------------generate massege constructor----------- */
function MassegeGenerator (msgId, msgDate, msgTime, msgContent){
    this.id=msgId
    this.content=msgContent
    this.date=msgDate
    this.time=msgTime
    this.generate= ()=>{
        console.log(`${this.id}- ${this.date}>> ${this.content} ${this.ime}`);
    }
    this.generateElement= ()=>{
        return `<span class="num">${this.id}</span><span>${this.date} ${this.time}</span>
        <h4 class="txt">${this.content}</h4><span class="close">x</span><span class="ok">ok</span>`;
    }
}
let x=()=>{
    for (msg of msgObjList){
       if(msg.date === userDate){
           
       }
    }
}
/*------------------------create main func-------------------- */
let init=()=>{
    submit.addEventListener('click', submitData);

}
init();












