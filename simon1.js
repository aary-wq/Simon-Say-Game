let high =0;
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
    level++;
    h2.innerText = `Level ${level}`;
    start = 1;
    console.log("s: "+start);
    random();
    }
});

function random()
{    
    let rdIdx = Math.floor(Math.random()*4);
    let rdBtn = document.querySelector("."+colors[rdIdx])
    game_seq.push(rdBtn.classList[1]);
    console.log(game_seq);
    flash(rdBtn);
}

function flash(rdBtn)
{
    rdBtn.classList.add("flash");
    setTimeout(function()
{
    rdBtn.classList.remove("flash");
},400);
}

let btns = document.querySelectorAll(".box");

for(btn of btns)
{
btn.addEventListener("click",press);
}

function press()
{
    flash(this);
    user_seq.push(this.classList[1]);
    console.log(user_seq);
    checkAns();
}

function checkAns()
{
    let idx = user_seq.length-1 ;
    if(game_seq[idx]=== user_seq[idx])
    {
        if(game_seq.length===user_seq.length)
        {
            level++;
            if(level > high)
                high = level;
            user_seq = [];
            h2.innerText = "Level "+level;
            setTimeout(random,500);
        }
    }
    else{
        document.body.style.backgroundColor = "red";
        setTimeout(()=>{
        document.body.style.backgroundColor = "white";
        },500);
        h2.innerHTML = `Game over. You passed <b>${level-1}</b> level(s) and Yr high Score is <b>${high-1}</b>`;
        start = 0; 
        level = 0;
        user_seq=[];
        game_seq=[];
    }
}