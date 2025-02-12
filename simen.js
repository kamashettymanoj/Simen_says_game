let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let score=0;
let hScore=0;
let h3=document.querySelector('h3');
let btns=["red","green","orange","gray"];
document.addEventListener('keypress',function(){
    if(started==false){
        console.log("gamestart");
        started=true;
        levelUp();
    }
    
})

function btnFlash(btn){
    btn.classList.add('white');
    setTimeout(function (){
        btn.classList.remove('white');
    },550);
}
function userFlash(btn){
    btn.classList.add('greem');
    setTimeout(function (){
        btn.classList.remove('greem');
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    score=score+1;
    h3.innerHTML=`Level ${level}`;
    let button=document.querySelectorAll('button');
   let randInd=Math.floor(Math.random()*3);
   let randColr=btns[randInd];
   let randBtn=document.querySelector(`.${randColr}`);
   btnFlash(randBtn);
  gameSeq.push(randColr);
  console.log(gameSeq);
}

function check (idx){
   
    

    if(gameSeq[idx]==userSeq[idx]){
        if(gameSeq.length==userSeq.length){
            setTimeout(levelUp(),2000);
     }
    
    }else{
        if(level > hScore){               
            hScore=level;
           }
       h3.innerHTML=`gameOver!  your score : ${score}
       <br>High SCORE :${hScore}<br>
       press any key to Restart`;
       dangerFlash();
       resetTo();
    }
}

function dangerFlash (){
let body =document.querySelector('body');
body.classList.add('danger');
setTimeout(function (){
    body.classList.remove('danger');
},250);
}
function resetTo(){
   userSeq=[];
    level=0;
    gameSeq=[];
    started=false;
    score=0;
}
function   btnPress(){
let btn=this;
userFlash(btn);
userSeq.push(btn.getAttribute('id'));
check(userSeq.length-1);


}
let allbtns=document.querySelectorAll('.btn');
for(bton of allbtns){
    bton.addEventListener('click',btnPress);
}




