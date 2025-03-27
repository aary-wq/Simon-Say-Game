let start = 0; 
let level = 0;
let user_seq=[];
let game_seq=[];
let colors = ["red","blue","orange","lblue"]
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function()
{
   
    if(start==0)
    {
    h2.innerText = `Level ${level+1}`;
    start = 1;
    console.log("s: "+start);
    random();
    }
});

let div = document.querySelectorAll(".box");

// for(btn of div)
// {
//     console.log(start);
// btn.addEventListener("click", function()
// {
  
//     if(start==0)
//     {
//     h2.innerText = `Level ${level}`;   
//     console.log("Start");  
//     start = 1 ;
//     setTimeout(random,1300);
//     }
// });
// }
let timeCnt = 0;
function random()
{    
    let rdIdx = Math.floor(Math.random()*4);
    let rdBtn = document.querySelector("."+colors[rdIdx])
    if(game_seq.length > 0)
    flash_btn(...game_seq);
    game_seq.push(colors[rdIdx]);
    user_seq=[];
    console.log("Game Seq: "+game_seq);
    console.log("Time:",timeCnt);
    setTimeout(function(){flash(rdBtn)},timeCnt);
    start = 1;
}

function flash(rdBtn)
{ 
    if(rdBtn == document.body)
    {
    rdBtn.classList.add('rbg');
    setTimeout(function()
{
    rdBtn.classList.remove("rbg");
},400);
    h2.innerText = "Your Game is Over...!. You scored "+(level);
    return;
    }

    rdBtn.classList.add("flash");
    setTimeout(function()
{
    rdBtn.classList.remove("flash");
},400);
}


for(btn of div)
{
    console.log("S: "+start)
    btn.addEventListener("click",calc);
}

function calc()
{
    if(start==-1 || start ==0 )return;
        user_seq.push(this.classList[1]);
        let temp = 0;
        console.log(user_seq);
        flash(this);        
        for(let i = 0 ; i < user_seq.length ; i++)
        {
            if(user_seq[i]!=game_seq[i]){
                flash(document.body);
                start = -1;
                break;
            }
            else
            temp++;
        }
        if(start!=-1 && temp==game_seq.length)
        {
        level++;
        h2.innerText = `Level ${level+1}`;
        setTimeout(random,800);
        }
}


function flash_btn(...game_seq) {
    timeCnt+=800;
    game_seq.forEach((el, index) => {
        
        let rdBtn = document.querySelector("." + el);
        setTimeout(() => flash(rdBtn), index * 800); 
    });
}
