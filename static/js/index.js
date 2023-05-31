let life1 = 3
let life2 = 3
let stronghit1 = 1
let stronghit2 = 1
let turno = 1
let weakhit_button1 = document.getElementById("1weakhit")
let stronghit_button1 = document.getElementById("1stronghit")
let weakhit_button2 = document.getElementById("2weakhit")
let stronghit_button2 = document.getElementById("2stronghit")
let p1heart = document.getElementById("p1heart")
let p1heart2 = document.getElementById("p1heart2")
let p1heart3 = document.getElementById("p1heart3")
let p2heart = document.getElementById("p2heart")
let p2heart2 = document.getElementById("p2heart2")
let p2heart3 = document.getElementById("p2heart3")

weakhit_button2.disabled = true
stronghit_button2.disabled = true

weakhit_button1.onclick = function(){
    life2 = life2 - 1
    switch(life2){
        case 2:
            p2heart3.style.mixBlendMode = "color-burn";
            break;
        case 1:
            p2heart3.style.mixBlendMode = "color-burn";
            p2heart2.style.mixBlendMode = "color-burn";
            break;
        case 0:
            p2heart3.style.mixBlendMode = "color-burn";
            p2heart2.style.mixBlendMode = "color-burn";
            p2heart.style.mixBlendMode = "color-burn";
            break;
    }
    if(life2 > 0){
        weakhit_button1.disabled = true
        stronghit_button1.disabled = true
        weakhit_button2.disabled = false
        stronghit_button2.disabled = false
    }
    else{
        alert("PLAYER 1 WINS!")
        life2 = 3
        life1 = 3
        p1heart.style.mixBlendMode = "unset";
        p1heart2.style.mixBlendMode = "unset";
        p1heart3.style.mixBlendMode = "unset";
        p2heart.style.mixBlendMode = "unset";
        p2heart2.style.mixBlendMode = "unset";
        p2heart3.style.mixBlendMode = "unset";
    }
}

stronghit_button1.onclick = function(){
    life2 = life2 - 2
    switch(life2){
        case 2:
            p2heart3.style.mixBlendMode = "color-burn";
            break;
        case 1:
            p2heart3.style.mixBlendMode = "color-burn";
            p2heart2.style.mixBlendMode = "color-burn";
            break;
        case 0:
            p2heart3.style.mixBlendMode = "color-burn";
            p2heart2.style.mixBlendMode = "color-burn";
            p2heart.style.mixBlendMode = "color-burn";
            break;
    }
    if(life2 > 0){
    weakhit_button1.disabled = true
    stronghit_button1.disabled = true
    weakhit_button2.disabled = false
    stronghit_button2.disabled = false
    }
    else{
        alert("PLAYER 1 WINS!")
        life2 = 3
        life1 = 3
        p1heart.style.mixBlendMode = "unset";
        p1heart2.style.mixBlendMode = "unset";
        p1heart3.style.mixBlendMode = "unset";
        p2heart.style.mixBlendMode = "unset";
        p2heart2.style.mixBlendMode = "unset";
        p2heart3.style.mixBlendMode = "unset";
    }
}


weakhit_button2.onclick = function(){
    life1 = life1 - 1
    switch(life1){
        case 2:
            p1heart3.style.mixBlendMode = "color-burn";
            break;
        case 1:
            p1heart3.style.mixBlendMode = "color-burn";
            p1heart2.style.mixBlendMode = "color-burn";
            break;
        case 0:
            p1heart3.style.mixBlendMode = "color-burn";
            p1heart2.style.mixBlendMode = "color-burn";
            p1heart.style.mixBlendMode = "color-burn";
            break;
    }
    if(life1 > 0){
        weakhit_button2.disabled = true
        stronghit_button2.disabled = true
        weakhit_button1.disabled = false
        stronghit_button1.disabled = false
    }
    else{
        alert("PLAYER 2 WINS!")
        life2 = 3
        life1 = 3
        p1heart.style.mixBlendMode = "unset";
        p1heart2.style.mixBlendMode = "unset";
        p1heart3.style.mixBlendMode = "unset";
        p2heart.style.mixBlendMode = "unset";
        p2heart2.style.mixBlendMode = "unset";
        p2heart3.style.mixBlendMode = "unset";
    }
}

stronghit_button2.onclick = function(){
    life1 = life1 - 2
    switch(life1){
        case 2:
            p1heart3.style.mixBlendMode = "color-burn";
            break;
        case 1:
            p1heart3.style.mixBlendMode = "color-burn";
            p1heart2.style.mixBlendMode = "color-burn";
            break;
        case 0:
            p1heart3.style.mixBlendMode = "color-burn";
            p1heart2.style.mixBlendMode = "color-burn";
            p1heart.style.mixBlendMode = "color-burn";
            break;
    }
    if(life1 > 0){
        weakhit_button2.disabled = true
        stronghit_button2.disabled = true
        weakhit_button1.disabled = false
        stronghit_button1.disabled = false
    }
    else{
        alert("PLAYER 2 WINS!")
        life1 = 3
        life2 = 3
        p1heart.style.mixBlendMode = "unset";
        p1heart2.style.mixBlendMode = "unset";
        p1heart3.style.mixBlendMode = "unset";
        p2heart.style.mixBlendMode = "unset";
        p2heart2.style.mixBlendMode = "unset";
        p2heart3.style.mixBlendMode = "unset";
    }
}


