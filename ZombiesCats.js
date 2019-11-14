

var x = Math.floor(Math.random() * 6);
var y = Math.floor(Math.random() * 6);

var catx = Math.floor(Math.random() * 6);
var caty = Math.floor(Math.random() * 6);

var zombiex = Math.floor(Math.random() * 6);
var zombiey = Math.floor(Math.random() * 6);

var catsfound = 0;

let arrayMap = createMap(7,7);
function createMap(yaxel,xaxel){
    let arr = new Array(yaxel);
    for(let y = 0; y < yaxel; y++){
        arr[y]= new Array(xaxel);

        for(let x = 0; x < xaxel ;x++){
            
            for (j = 0 ; j < 2 ; j++){
                arr[y][x] = Math.floor(Math.random() * 2 +1);
            }
        }

    }
    return arr;
}

startGame();
function startGame () {
    newCat();
    newZombie();
    insertNav();
    loadBackground();
    
}
function clearImage(){
    document.getElementById('spelplan').innerHTML = "";
}
function loadBackground(){
    clearImage();
    insertNav();
    let spelplan = document.getElementById('spelplan');
    let background = document.createElement('img');
    background.src ="backgrounds/bgimage"+arrayMap[y][x]+".jpg";
    background.className = 'background-image';
    spelplan.appendChild(background);
    console.log(background);
    
}
function insertNav(){
    let spelplan = document.getElementById('spelplan');
    let navbttn = document.createElement("button");
    navbttn.innerHTML = "&#9658";
    navbttn.id = "up";
    navbttn.setAttribute("onclick","morey()");
    spelplan.appendChild(navbttn);
    
    navbttn = document.createElement("button");
    navbttn.innerHTML = "&#9658";
    navbttn.id = "down";
    navbttn.setAttribute("onclick","lessy()");
    spelplan.appendChild(navbttn);

    navbttn = document.createElement("button");
    navbttn.innerHTML = "&#9658";
    navbttn.id = "right";
    navbttn.setAttribute("onclick","morex()");
    spelplan.appendChild(navbttn);

    navbttn = document.createElement("button");
    navbttn.innerHTML = "&#9658";
    navbttn.id = "left";
    navbttn.setAttribute("onclick","lessx()");
    spelplan.appendChild(navbttn);

}
/*funtion morepoints() {

    ++points;
    document.getElementById("catsfound").innerHTML = number;
}*/


function morex () {
    if (x <= 5) {
    ++x; 
    console.log(x,y);
    loadBackground();
    showCat();
    showTorch();
    moveZombie();
    checkforzombie();
    console.log(caty,catx);
    }
}


function lessx () {
    if (x > 0) {
    --x; 
    console.log(x,y);
    loadBackground();
    showCat();
    showTorch();
    moveZombie();
    checkforzombie();
    console.log(caty,catx);
    }
}

function morey () {
    if (y <= 5) {
    ++y; 
    console.log(x,y);
    loadBackground();
    showCat();
    showTorch();
    moveZombie();
    checkforzombie();
    console.log(caty,catx);
    }

}

function lessy () {
    if (y > 0) {
    --y; 
    console.log(x,y);
    loadBackground();
    showCat();
    showTorch();
    moveZombie();
    checkforzombie();
    console.log(caty,catx);
    }

}



function newCat() {
    catx = Math.floor(Math.random() * 7);
    caty = Math.floor(Math.random() * 7);

    
}


function newZombie() {

    let zombiex = randomxZombie();
    let zombiey = randomyZombie();
}

function randomxZombie () {
    return Math.floor(Math.random() *7);
}

function randomyZombie () {
    return Math.floor(Math.random() *7);
}

function zombieFound(){
    let spelplan = document.getElementById('spelplan');
    let zombieImage = document.createElement("img");
    zombieImage.src = 'zombies/zombie.png';
    zombieImage.id = 'zombies';
    spelplan.appendChild(zombieImage);

}


function checkforzombie () {
    if (zombiex == x && zombiey == y) {
        zombieFound();
        console.log('zombie has you');
        console.log(zombiey,zombiex);
        console.log(y,x);
    } else {
        console.log('no zombie here!');
    
    }
}

function catFound () {
    let spelplan = document.getElementById('spelplan');
    let catImage = document.createElement("img");
    catImage.src = 'zombies/savecat.jpg';
    catImage.id = 'cat';
    spelplan.appendChild(catImage);
}

function showCat () {
    if (catx == y && caty ==x) {
        catFound();
        console.log("Found cat, find next cat!");
        newCat ();
        catsfound++;
        console.log(catsfound + "" + " Cats Found");
        
        
    }
} 



function moveZombie (){
    if (zombiex > x && Math.floor(Math.random() * 10 + 1) > 5) {

        --zombiex;
    }

    else if (zombiex < x && Math.floor(Math.random() * 10 + 1) > 5) {

        ++zombiex;
    }

    if (zombiey > y && Math.floor(Math.random() * 10 + 1 ) > 5)  {
        --zombiey;
    }

    if (zombiey < y && Math.floor(Math.random() * 10 + 1 ) > 5) {
        ++zombiey;
    }
 
}




 function showTorch () {
    if (x == 0 && y == 0) {
        document.getElementById('candle').style.display = "block";
    }
} 
function showImage(x,y) {
    document.getElementById("spelplan").style.backgroundImage = "url('" + map[x][y] + "')";
    }

