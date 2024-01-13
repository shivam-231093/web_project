let  timer=60;
let score=0;
document.querySelector('#score').innerHTML=score;
let hit,flag=0;
function bubble(){
    let cluster="";
    for(let i=0;i<198;i++){
      cluster+=`<div id="bubble">${Math.floor(Math.random()*10+1)}</div>`;
}
document.querySelector("#pbtm").innerHTML=cluster;

}
function hitinc(){
    hit=Math.floor(Math.random()*10+1);
    document.querySelector('#hit').innerHTML=hit;
}
function scoreinc(){
    score+=10;
    document.querySelector('#score').innerHTML=score;
}
function runTimer(){
document.querySelector('#timer').innerHTML=timer;
let t =setInterval(function(){
        if(timer>0&&flag==0){
            timer--;
            document.querySelector('#timer').innerHTML=timer;
        }
        else{
            clearInterval(t);
            document.querySelector('#timer').innerHTML=0;
            document.querySelector("#pbtm").innerHTML=`<h1>GAME OVER<br>YOUR SCORE IS ${score}</h1>`;
            flag=0;
        }
    },1000);
}
document.querySelector('#pbtm').addEventListener("click",function(clk){
   let val=Number(clk.target.textContent);
   if(val==hit&&timer!=0){
    scoreinc();
    hitinc();
    bubble();
   }
   else{
    document.querySelector("#pbtm").innerHTML=`<h1>GAME OVER<br>YOUR SCORE IS ${score}</h1>`;
    flag=1;
   }
});
   
bubble();
runTimer();
hitinc();