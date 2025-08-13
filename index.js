var card=document.getElementById('card');

card.addEventListener('mouseover',function(){
    card.style.backgroundColor="green";
    card.innerHTML="You Hoverd";
});
card.addEventListener('mouseout',function(){
    card.style.backgroundColor="red";
    card.innerHTML="You Hovered out";
});
card.addEventListener('click',function(){
    card.style.backgroundColor="yellow";
    card.innerHTML="You Clicked Me!";
});


var card=document.getElementById('message');
card.addEventListener('mouseover',function(){
    card.style.backgroundColor="green";
    message.innerHTML="You are IN";
});
card.addEventListener('mouseout',function(){
    card.style.backgroundColor="red";
    message.innerHTML="You are OUT";
});
card.addEventListener('click',function(){
    card.style.backgroundColor="yellow";
    message.innerHTML="You Clicked Me!";
});
function updateClock(){
    var date=new Date();
    var hours=date.getHours().toString().padStart(2,'0');
    var mins=date.getMinutes().toString().padStart(2,'0');
    var secs=date.getSeconds().toString().padStart(2,'0');
    document.getElementById('clock').innerHTML=hours+":"+mins+":"+secs;
}

window.setInterval(updateClock,1000);
updateClock();