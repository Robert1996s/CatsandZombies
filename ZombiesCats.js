

var x = Math.floor(Math.random() * 6);
var y = Math.floor(Math.random() * 6);

var catx = Math.floor(Math.random() * 6);
var caty = Math.floor(Math.random() * 6);

var zombiex = Math.floor(Math.random() * 6);
var zombiey = Math.floor(Math.random() * 6);

var catsfound = 0;

var points = 0;

function startGame () {

    newCat();
    newZombie();
    
}

/*funtion morepoints() {

    ++points;
    document.getElementById("catsfound").innerHTML = number;
}*/


/*nopicture();
function nopicture () {

        document.getElementById('candle').style.display = "none";
        document.getElementById('cat').style.display = "none";
        document.getElementById('zombie').style.display = "none";
        
}*/

function morex () {
    if (x <= 5) {
    ++x; 
    console.log(x,y);
    checkforzombie();
    showCat();
    showTorch();
    moveZombie();
    showImage(x,y);
    }
}


function lessx () {
    if (x > 0) {
    --x; 
    console.log(x,y);
    checkforzombie();
    showCat();
    showTorch();
    moveZombie();
    showImage(x,y);
    }
}

function morey () {
    if (y <= 5) {
    ++y; 
    console.log(x,y);
    checkforzombie();
    showCat();
    showTorch();
    moveZombie();
    showImage(x,y);
    }

}

function lessy () {
    if (y > 0) {
    --y; 
    console.log(x,y);
    checkforzombie();
    showCat();
    showTorch();
    moveZombie();
    showImage(x,y);
    }

}



function newCat() {

    catx = Math.floor(Math.random() * 6);
    caty = Math.floor(Math.random() * 6);
    
}


function newZombie() {

    let zombiex = randomxZombie();
    let zombiey = randomyZombie();
}

function randomxZombie () {
    return Math.floor(Math.random() *6);
}

function randomyZombie () {
    return Math.floor(Math.random() *6);
}


function checkforzombie () {
    if (zombiex == x && zombiey == y) {
        console.log("dead");
        zombieImage();
        alert("Try again!");
    }
} 

function zombieImage () {
    document.getElementById('zombie');
    
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



function showCat () {
    if (catx == x && caty ==y) {
        console.log("Found cat, find next cat!");
        newCat ();
        /*morepoints();*/
        ++catsfound;
        console.log(catsfound + "" + " Cats Found");
    }
} 


 function showTorch () {
    if (x == 0 && y == 0) {
        document.getElementById('candle').style.display = "block";
    }
} 



  //if (x === 1 && y === 0) {
    document.getElementById('candle').style.left = "400px";

//}



function showImage(x,y) {
    document.getElementById("spelplan").style.backgroundImage = "url('" + map[x][y] + "')";
    }


var map = [
    ["Cave.jpg","Caveklipp1.jpg", "Cave.jpg", "Caveklipp1.jpg", "Cave.jpg", "Caveklipp1.jpg", "Cave.jpg"],
    ["Caveklipp1.jpg", "Cave.jpg", "Caveklipp1.jpg", "Cave.jpg", "Caveklipp1.jpg", "Cave.jpg", "Caveklipp1.jpg"],
    ["Cave.jpg", "Caveklipp1.jpg", "Cave.jpg", "Caveklipp1.jpg", "Cave.jpg", "Caveklipp1.jpg", "Cave.jpg"],
    ["Caveklipp1.jpg", "Cave.jpg", "Caveklipp1.jpg", "Cave.jpg", "Caveklipp1.jpg", "Cave.jpg", "Caveklipp1.jpg"],
    ["Cave.jpg", "Caveklipp1.jpg", "Cave.jpg", "Caveklipp1.jpg", "Cave.jpg", "Caveklipp1.jpg", "Cave.jpg"],
    ["Cave.jpg","Caveklipp1.jpg", "Cave.jpg", "Caveklipp1.jpg", "Cave.jpg", "Caveklipp1.jpg", "Cave.jpg"],
    ["Caveklipp1.jpg", "Cave.jpg", "Caveklipp1.jpg", "Cave.jpg", "Caveklipp1.jpg", "Cave.jpg", "Caveklipp1.jpg"] ]; 