const text1El = document.getElementById("text-area1")
const text2El = document.getElementById("text-area2")
const text3El = document.getElementById("text-area3")
const text4El = document.getElementById("text-area4")

let randomEl = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u",
"v","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z",
"0","1","2","3","4","5","6","7","8","9","-","#","%","&","^","/","?","/","!","@","$","*","(",")","_"]

//INITIALIZE THE PASS TO EMPTY STRING

function genpass(){
    let Pass1 = "" 
    let Pass2 = ""
    let Pass3 = ""
    let Pass4 = ""

    
    const charLenght = 12
    for(let i = 0; i < charLenght; i++){
        let randomPass1 = randomEl[Math.floor(Math.random() * randomEl.length)]
        let randomPass2 = randomEl[Math.floor(Math.random() * randomEl.length)]
        let randomPass3 = randomEl[Math.floor(Math.random() * randomEl.length)]
        let randomPass4 = randomEl[Math.floor(Math.random() * randomEl.length)]

        Pass1 += randomPass1
        Pass2 += randomPass2
        Pass3 += randomPass3
        Pass4 += randomPass4

    }
    text1El.textContent = Pass1
    text2El.textContent = Pass2
    text3El.textContent = Pass3
    text4El.textContent = Pass4
}


