const boxs = document.querySelectorAll(".box")
// const msg = document.querySelector("#msg")
// const message = document.querySelector(".message_contener")
const new_game_btn = document.querySelector(".new_game_btn")
const reset_btn = document.querySelector(".reset_btn")

let turnO = true;

 const winPatten = [
    [0,1,2],
    [0,3,6],
    [0,4,7],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
 ];

 boxs.forEach( (box) => {
    box.addEventListener("click",function(){
      
        if(turnO === true){
            box.innerHTML =`O`
            turnO =false;
        }
        else{
            box.innerHTML =`X`
            turnO =true;
        }
        box.disabled = true;
        checkWinner()
    })
 })


 const checkWinner = () => {
    for(let pattern of winPatten){
        let pos1Val = boxs[pattern[0]].innerText;
        let pos2Val = boxs[pattern[1]].innerText;
        let pos3Val = boxs[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "" ){
            if ( pos1Val === pos2Val === pos3Val) {
                // showwinner(pos1Val);
            }
        }
    }
 }

//  const showwinner = (winner) => {
//     msg.innerHTML = `And the winner is ${winner}`
//     message.classList.remove("hide");
//  }