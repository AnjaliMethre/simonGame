let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let btns=["pink","blue","green","purple"];
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
   if(started==false){
    console.log("game started");
   }
   started=true;
   levelUp();
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let ranIdx=Math.floor(Math.random()*3);
    let ranColor=btns[ranIdx];
    let ranBtn=document.querySelector(`.${ranColor}`);
    //console.log(ranIdx);
   // console.log(ranColor);
    //console.log(ranBtn);
    gameSeq.push(ranColor);
    console.log(gameSeq);
    btnFlash(ranBtn); 
}
function checkAns(idx){
   // console.log("curr level:",level);
   if(userSeq[idx]===gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);
    }
   }
   else{
    h2.innerHTML=`Game Over! your score was<b> ${level}</b> <br> plz enter any key.`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },250);
    reset();
   }
}

function btnPress(){
  //  console.log(this);
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allbtnp=document.querySelectorAll(".btn");
for(btnp of allbtnp){
    btnp.addEventListener("click",btnPress);
}

function reset(){
    gameSeq=[];
    userSeq=[];
    started=false;
    level=0;
}
