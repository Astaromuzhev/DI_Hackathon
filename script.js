let pole = document.getElementById("pole")
let dropbtn = document.getElementById("drop")
let dropbtn2 = document.getElementById("drop2")

let ltrNum = 81

// Create game field -------------------------------------------------------------------------
function createField () {
    for(i=100; i > 0; i--) {
        let newkletka = document.createElement("div")
        // newkletka.style.background = "blue"
        newkletka.style.color = "#fff"
        newkletka.setAttribute("class", "kletka")
        //generete numbers in snake style
            if ((i - 1) % 20 < 10){ //     if ((i > 0 && i <= 10) || (i > 20 && i <= 30) || (i > 40 && i <= 50) || (i > 60 && i <= 70) || (i > 80 && i <= 90) ){
                newkletka.textContent = ltrNum  
                ltrNum++
                for(a=0; a<5; a++) {
                    if([91,71,51,31].includes(ltrNum)) {
                        ltrNum -= 30
                    }
                }
            } else {
                newkletka.textContent =  i
            }

        newkletka.setAttribute("id", newkletka.textContent) // add id to every block
        pole.appendChild(newkletka)
    }
}
createField ()

// Get random number  -------------------------------------------------------------------------
function getRandomNumber() {
    return Math.floor(Math.random() * 3) + 1;
  }


// Initiate players

let firstCell = document.getElementById("1")  // firstCell
let player1 = document.createElement("div")
let player2 = document.createElement("div")
player1.setAttribute("id", "player1")
player1.setAttribute("class", "player1")
player1.setAttribute("draggable", "true")
player2.setAttribute("id", "player2")
player2.classList.add("player1", "player2")
player2.setAttribute("draggable", "true")
pole.appendChild(player1)
pole.appendChild(player2)



dropbtn.addEventListener("click", action)

dropbtn2.addEventListener("click", action2)








mat = 1
let marginBot = 71.8
let randomnumber = getRandomNumber()
let positionbufferp1 = 1;
let positionbufferp2 = 1;
let activeplayer = 1;
let curplayer;
let p1 = document.getElementById("player1")
let p2 = document.getElementById("player2")

let checksnake = 0;


if (activeplayer === 1) {
    curplayer = p1
} else if (activeplayer === 2){
    curplayer = p2
}
// check current position---------------------
let currentposition = 0

function positionChecker (curplayer) {  
    const rect = p1.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const elementsUnderAbsolute = document.elementsFromPoint(x, y); 
    elementsUnderAbsolute.forEach(div => {
        if (div.classList.contains("kletka")) {
         currentposition = Number(div.id)
        }
    });
}



function action () {

let randomnumber = getRandomNumber() // создаем рандомное число
let dvalue = document.getElementById("drop-value")
dvalue.textContent = randomnumber // выводим рандомное число


    let move = setInterval(function(){   // начинаем повторение
         //получаем поизцию активного игрока
         positionChecker (curplayer)
         // moover
        if ([10,20,30,40,50,60,70,80,90].includes(currentposition)) {
            curplayer.style.marginBottom = marginBot+"px"
            marginBot += 71.8
        } else if ([11,12,13,14,15,16,17,18,19,31,32,33,34,35,36,37,38,39,51,52,53,54,55,56,57,58,59,71,72,73,74,75,76,77,78,79,91,92,93,94,95,96,97,98,99].includes(currentposition)) {
            curplayer.style.marginLeft = mat +"px"
            mat--
        } else {
            curplayer.style.marginLeft = mat +"px"
            mat++
        }
          // stoper
             if ( currentposition ===  randomnumber + positionbufferp1  || currentposition === 100 ) {

                if (activeplayer === 1) {
                    positionbufferp1 += randomnumber
                } else if (activeplayer === 2) {
                    positionbufferp1 += randomnumber
                }
                
                curplayer.style.marginLeft = mat + "px"
                clearInterval(move)
                checksnake = currentposition
                
        } 

        activeplayer++ 
        if (activeplayer > 2) {
            activeplayer = 1
        }
},1)

if (checksnake === 4 ){
    console.log("sssss")
    sneak (14)
}


}

let ctnnn = document.getElementById("drop3")

ctnnn.addEventListener("click", cons)
function cons () {
    console.log(checksnake)
    sneak (14)
}





function sneak (stop) {
    
    let snkk = setInterval(function(){ 
        positionChecker(curplayer);

    if ([10,20,30,40,50,60,70,80,90].includes(currentposition)) {
        console.log("aaaa")
        curplayer.style.marginBottom = marginBot+"px"
        marginBot += 71.8
    } else if ([11,12,13,14,15,16,17,18,19,31,32,33,34,35,36,37,38,39,51,52,53,54,55,56,57,58,59,71,72,73,74,75,76,77,78,79,91,92,93,94,95,96,97,98,99].includes(currentposition)) {
        curplayer.style.marginLeft = mat +"px"
        mat--
    } else {
        console.log("left", currentposition)
        curplayer.style.marginLeft = mat +"px"
        mat++
    }

    if ( currentposition ===  stop ) {
            positionbufferp1 += randomnumber
        curplayer.style.marginLeft = mat + "px"
        clearInterval(snkk)
        checksnake = currentposition       
} 
},1)
}







/// Дальше второй игрок  - копия первого игрока






mat2 = 1
let marginBot2 = 71.8
let randomnumber2 = getRandomNumber()
let positionbufferp122 = 1;
let positionbufferp222 = 1;
let activeplayer2 = 1;
let curplayer2;
let p12 = document.getElementById("player1")
let p22 = document.getElementById("player2")
if (activeplayer2 === 1) {
    curplayer2 = p12
} else if (activeplayer2 === 2){
    curplayer2 = p22
}
console.log(curplayer2)
// check current position---------------------
let currentposition2 = 0

function positionChecker2 (curplayer2) {  
    const rect = p22.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const elementsUnderAbsolute = document.elementsFromPoint(x, y); 
    elementsUnderAbsolute.forEach(div => {
        if (div.classList.contains("kletka")) {
         currentposition2 = Number(div.id)
        }
    });
    return currentposition2
}


function action2 () {

 

let randomnumber2 = getRandomNumber() // создаем рандомное число
let dvalue = document.getElementById("drop-value")
dvalue.textContent = randomnumber2 // выводим рандомное число

    let move = setInterval(function(){   // начинаем повторение
         //получаем поизцию активного игрока
         positionChecker2 (curplayer2)
         // moover
        if ([10,20,30,40,50,60,70,80,90].includes(currentposition2)) {
            p22.style.marginBottom = marginBot2+"px"
            marginBot2 += 71.8
        } else if ([11,12,13,14,15,16,17,18,19,31,32,33,34,35,36,37,38,39,51,52,53,54,55,56,57,58,59,71,72,73,74,75,76,77,78,79,91,92,93,94,95,96,97,98,99].includes(currentposition2)) {
            p22.style.marginLeft = mat2 +"px"
            mat2--
        }  else {
            p22.style.marginLeft = mat2 +"px"
            mat2++
            console.log(currentposition2)
        }

        
          // stoper
             if ( currentposition2 ===  randomnumber2 + positionbufferp122  || currentposition2 === 100 ) {

           
                    positionbufferp122 += randomnumber2
                
                p22.style.marginLeft = mat2 + "px"
                 clearInterval(move)
        }
        activeplayer2++ 
        if (activeplayer2 > 2) {
            activeplayer2 = 1
        }
},1)
console.log(currentposition2, randomnumber2, positionbufferp122)

}
