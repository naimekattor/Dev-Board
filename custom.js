function handleClick(){
alert("Board Updated Successfully") ;
let taskAssign=document.getElementById("task-assign").innerText;
document.getElementById("task-assign").innerText=Number(taskAssign)-1;
let completeBtn=event.target.setAttribute("disabled",true);
event.target.style.backgroundColor="#3752FD";
event.target.style.opacity="30%";
document.getElementById("total-completion").innerText=Number(document.getElementById("total-completion").innerText)+1;
let historyList=document.getElementById("history-list");
let history=document.createElement("p");
history.style.backgroundColor="#F4F7FF";
history.style.margin="10px";
history.style.padding="10px";
const card=event.target.closest("div");
const parentCard=card.parentElement;
const cardHead=parentCard.querySelector("h1").innerText;
let updateHistory=history.innerText=`You have Complete The Task ${cardHead} at ${new Date().toLocaleTimeString()}`;
historyList.appendChild(updateHistory);


if (Number(taskAssign)===1) {
  alert("Congrates!! You have completed all the task")
}

}

function handleHistory(){
  let historyList=document.getElementById("history-list");
historyList.innerHTML="";

}


function handleTheme(){
  const randomColor=`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,"0")}`;
  document.body.style.backgroundColor=randomColor;
  
}

function handlePage(){
  window.location.href="./blog.html";
  console.log("clicked");
  
}

function handleBackPage(){
  window.location.href="./index.html";

}