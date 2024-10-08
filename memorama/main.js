addEventListener("load", () =>{

    let memory = [
        ["&#128525;", 1],
        ["&#128525;", 1],
        ["&#128520;", 2],
        ["&#128520;", 2],
        ["&#128526;", 3],
        ["&#128526;", 3],
        ["&#129398;", 4],
        ["&#129398;", 4],
        ["&#129321;", 5],
        ["&#129321;", 5],
        ["&#129297;", 6],
        ["&#129297;", 6],
        ["&#128564;", 7],
        ["&#128564;", 7],
        ["&#128557;", 8],
        ["&#128557;", 8],

    ]

    let interval

    let count = 59

    let cardsFound = 0

    let continueGame = false
    

    let checkCard = []

    const addZeros = n =>{
        return n.padStart(2,0);
    }

    const cards = document.querySelectorAll(".card")
    const sec = document.querySelector(".sec")
    const min = document.querySelector(".min")
    const btn = document.getElementById("start-btn")
    
    cards.forEach(div =>{
        const i = Math.floor((Math.floor(Math.random() * 100) ) / (100/memory.length))
        div.querySelector(".front").innerHTML = memory[i][0]
        let value = memory[i][1]
        memory.splice(i,1)
        // console.log(div)
        div.addEventListener("click", e =>{
            let turn = false
            let valueCard = value
            if (continueGame){

                if (checkCard.length < 2 && !div.classList.contains("flip")) {
                    // console.log(checkCard.length)
                    checkCard.push(value)
                    div.classList.add("flip")
                    console.log(div)
                    turn = true
                }

                if (checkCard.length == 2 ){
                    
                    if (checkCard[0] == checkCard[1]){

                        if (turn) cardsFound++

                        console.log(cardsFound)
                        
                        document.querySelectorAll(".flip")
                        .forEach(v => {
                            v.classList.add("keep-fliped")
                            v.classList.remove("flip")
                        }
                        )

                    } else{
                        setTimeout(()=>{

                            document.querySelectorAll(".flip").
                            forEach(v => v.classList.remove("flip"))
                            
                        },1000)
                    }

                    setTimeout(()=> checkCard = [], 700)

                    
                }

                if (cardsFound == 8){
                    clearInterval(interval)
                    alert("Ganaste, felicidades")
                    continueGame = false
                }

                turn = false

            }

        })

    })

    btn.addEventListener("click", startInterval)

    function startInterval(){
        continueGame = true
        min.textContent = "0:"
        sec.textContent = count--


        interval = setInterval(()=> {

            if (count >= 0) sec.textContent = addZeros(count-- + "")
            else {
                
                clearInterval(interval)
                continueGame = false
                alert("Perdiste")
            }
            
        }
        , 1000)

        btn.removeEventListener("click", startInterval)
    }



})
