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

let player1 = new Object();
    player1.life = 3;
    player1.weakhit = 1;
    player1.stronghit = 2;

let player2 = new Object()
    player2.life = 3
    player2.weakhit = 1
    player2.stronghit = 2

console.log(player1.life)

weakhit_button1.onclick = function(){
    player2.life = player2.life - player1.weakhit;
    switch(player2.life){
        case 2:
            p2heart3.style.mixBlendMode = "luminosity";
            break;
        case 1:
            p2heart3.style.mixBlendMode = "luminosity";
            p2heart2.style.mixBlendMode = "luminosity";
            break;
        case 0:
            p2heart3.style.mixBlendMode = "luminosity";
            p2heart2.style.mixBlendMode = "luminosity";
            p2heart.style.mixBlendMode = "luminosity";
            break;
    }
    if(player2.life > 0){
        weakhit_button1.disabled = true
        stronghit_button1.disabled = true
        weakhit_button2.disabled = false
        stronghit_button2.disabled = false
    }
    else{
        alert("PLAYER 1 WINS!")
        player2.life = 3
        player1.life = 3
        p1heart.style.mixBlendMode = "unset";
        p1heart2.style.mixBlendMode = "unset";
        p1heart3.style.mixBlendMode = "unset";
        p2heart.style.mixBlendMode = "unset";
        p2heart2.style.mixBlendMode = "unset";
        p2heart3.style.mixBlendMode = "unset";
    }
}

stronghit_button1.onclick = function(){
    player2.life = player2.life - player1.stronghit;
    switch(player2.life){
        case 2:
            p2heart3.style.mixBlendMode = "luminosity";
            break;
        case 1:
            p2heart3.style.mixBlendMode = "luminosity";
            p2heart2.style.mixBlendMode = "luminosity";
            break;
        case 0:
            p2heart3.style.mixBlendMode = "luminosity";
            p2heart2.style.mixBlendMode = "luminosity";
            p2heart.style.mixBlendMode = "luminosity";
            break;
    }
    if(player2.life > 0){
    weakhit_button1.disabled = true
    stronghit_button1.disabled = true
    weakhit_button2.disabled = false
    stronghit_button2.disabled = false
    }
    else{
        alert("PLAYER 1 WINS!")
        player2.life = 3
        player1.life = 3
        p1heart.style.mixBlendMode = "unset";
        p1heart2.style.mixBlendMode = "unset";
        p1heart3.style.mixBlendMode = "unset";
        p2heart.style.mixBlendMode = "unset";
        p2heart2.style.mixBlendMode = "unset";
        p2heart3.style.mixBlendMode = "unset";
    }
}


weakhit_button2.onclick = function(){
    player1.life = player1.life - player2.weakhit
    switch(player1.life){
        case 2:
            p1heart3.style.mixBlendMode = "luminosity";
            break;
        case 1:
            p1heart3.style.mixBlendMode = "luminosity";
            p1heart2.style.mixBlendMode = "luminosity";
            break;
        case 0:
            p1heart3.style.mixBlendMode = "luminosity";
            p1heart2.style.mixBlendMode = "luminosity";
            p1heart.style.mixBlendMode = "luminosity";
            break;
    }
    if(player1.life > 0){
        weakhit_button2.disabled = true
        stronghit_button2.disabled = true
        weakhit_button1.disabled = false
        stronghit_button1.disabled = false
    }
    else{
        alert("PLAYER 2 WINS!")
        player1.life = 3
        player2.life = 3
        p1heart.style.mixBlendMode = "unset";
        p1heart2.style.mixBlendMode = "unset";
        p1heart3.style.mixBlendMode = "unset";
        p2heart.style.mixBlendMode = "unset";
        p2heart2.style.mixBlendMode = "unset";
        p2heart3.style.mixBlendMode = "unset";
    }
}

stronghit_button2.onclick = function(){
    player1.life = player1.life - player2.stronghit
    switch(player1.life){
        case 2:
            p1heart3.style.mixBlendMode = "luminosity";
            break;
        case 1:
            p1heart3.style.mixBlendMode = "luminosity";
            p1heart2.style.mixBlendMode = "luminosity";
            break;
        case 0:
            p1heart3.style.mixBlendMode = "luminosity";
            p1heart2.style.mixBlendMode = "luminosity";
            p1heart.style.mixBlendMode = "luminosity";
            break;
    }
    if(player1.life > 0){
        weakhit_button2.disabled = true
        stronghit_button2.disabled = true
        weakhit_button1.disabled = false
        stronghit_button1.disabled = false
    }
    else{
        alert("PLAYER 2 WINS!")
        player1.life = 3
        player2.life = 3
        p1heart.style.mixBlendMode = "unset";
        p1heart2.style.mixBlendMode = "unset";
        p1heart3.style.mixBlendMode = "unset";
        p2heart.style.mixBlendMode = "unset";
        p2heart2.style.mixBlendMode = "unset";
        p2heart3.style.mixBlendMode = "unset";
    }
}


