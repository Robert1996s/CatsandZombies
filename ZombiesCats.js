

var x = Math.floor(Math.random() * 6);
var y = Math.floor(Math.random() * 6);

var catx = Math.floor(Math.random() * 6);
var caty = Math.floor(Math.random() * 6);

var zombiex = Math.floor(Math.random() * 6);
var zombiey = Math.floor(Math.random() * 6);

var catsfound = 0;
//Skapar random värde för spelare, katt och zombie

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
//Skapar spelplan och slumpar bild

startGame();
function startGame () {
    newCat();
    newZombie();
    insertNav();
    loadBackground();
    //Startar spelet med dess funktioner
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
    //Laddar bakgrundsbild i diven "spelplan"
    
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

    //Skapar alla knappar och ger dem ett id och en onclickfunktion
}

/*function disableLeft () {
    if (x = 0) {
    document.getElementById("left").disabled = true;
    } else {document.getElementById("left").disabled = false;

    }
}

function disableRight () {
    if (x = 6) {
    document.getElementById("right").disabled = true;
    } else {
        document.getElementById("right").disabled = false;
    }
    
}
funtion morepoints() {

    ++points;
    document.getElementById("catsfound").innerHTML = number;
}*/


function morex () {
    if (x <= 5) {
    ++x; 
    console.log(x,y);
    loadBackground();
    showCat();
    moveZombie();
    checkforzombie();
    //showTorch();
    console.log(caty,catx);
    //disableRight();
    }
}


function lessx () {
    if (x > 0) {
    --x; 
    console.log(x,y);
    loadBackground();
    showCat();
    moveZombie();
    checkforzombie();
    //showTorch();
    console.log(caty,catx);
    //disableLeft();
    }
}

function morey () {
    if (y <= 5) {
    ++y; 
    console.log(x,y);
    loadBackground();
    showCat();
    moveZombie();
    checkforzombie();
    //showTorch();
    console.log(caty,catx);
    }

}

function lessy () {
    if (y > 0) {
    --y; 
    console.log(x,y);
    loadBackground();
    showCat();
    moveZombie();
    checkforzombie();
    //showTorch();
    console.log(caty,catx);
    }

}
// Alla knappar var för sig, vilka funktioner som ska köras när knappen trycks på


function newCat() {
    catx = Math.floor(Math.random() * 7);
    caty = Math.floor(Math.random() * 7);

    //Skapar ny katt med random placering 
    
}


function newZombie() {

    let zombiex = randomxZombie();
    let zombiey = randomyZombie();

    //Skapar en zombie med randomplacering från funktionerna nedan
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
    alert("Zombie got you! Try again");
    //Visar bild på zombie när den för samma x och y värden som spelaren och ett alert kommer upp.
}


function checkforzombie () {
    if (zombiex == x && zombiey == y) {
        zombieFound();
        console.log('zombie has you');
        console.log(zombiey,zombiex);
        console.log(y,x);
    } else {
        console.log('no zombie here!');
    //En funktion som körs varje knapptryck, kollar om zombien är på samma plats
    }
}

function catFound () {
    let spelplan = document.getElementById('spelplan');
    let catImage = document.createElement("img");
    catImage.src = 'zombies/savecat.png';
    catImage.id = 'cat';
    spelplan.appendChild(catImage);
    //Visar bilden på en katt
}

function showCat () {
    if (catx == y && caty ==x) {
        catFound();
        console.log("Found cat, find next cat!");
        newCat ();
        catsfound++;
        console.log(catsfound + "" + " Cats Found");
        //Kollar om katten har samma plats som spelaren, samt logar hur många katter spelaren hittat. Vill skriva ut så användaren ser i diven om det finns tid kvar.
        
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
 //funktion som gör att zombien rör på sig efter spelaren, men inte varje gång utan slumpas vajre knapptryck.
}

/*function torchFound () {
    let spelplan = document.getElementById('spelplan');
    let torchImage = document.createElement("img");
    torchImage.src = 'zombies/torch.png';
    torchImage.id = 'candle';
    spelplan.appendChild(torchImage);
}


 function showTorch () {
    if (map == 0) {
        torchShow();

    }

    var map = [
        [0, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 1, 0],
        [0, 0, 1, 1, 0, 1, 1],
        [1, 0, 1, 0, 0, 1, 0],
        [0, 1, 0, 1, 1, 0, 1]
        [1, 0, 1, 0, 1, 1, 0]
        [0, 1, 0, 1, 1, 1, 0] ];
    }
*/


function showImage(x,y) {
    document.getElementById("spelplan").style.backgroundImage = "url('" + map[x][y] + "')";
    }

    //Visar bild från arrayen