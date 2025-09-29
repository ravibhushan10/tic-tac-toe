let turn = 'O';
let total_turn=0;

let winner = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
]

// this is for checking the winner for every click 
let board_array=new Array(9).fill('E');

function checkwinner(){
    for(let [index0,index1,index2] of winner)
    {
        // console.log(i); [1,2,3]
       if(board_array[index0]!='E'&&board_array[index0]===board_array[index1] &&board_array[index1]===board_array[index2])
       return 1;
    }
    return 0;
}


const printer=(event) => {
    

    const element = event.target;
    
    if(board_array[element.id]==='E')   //avoid dubble writing of same box
    {
      total_turn++;
        
        if (turn == 'O') {
        element.innerHTML = 'O';
        board_array[element.id]='O';
            
        if(checkwinner())
            {
                document.getElementById('winningMessage').innerText="Winner is O";
                board.removeEventListener('click',printer);
                return;
            }
            turn = 'X';
        }
        else {
            
            element.innerHTML = 'X';
            board_array[element.id]='X';
            if(checkwinner())
                {
                    document.getElementById('winningMessage').innerText="Winner is X";
                    board.removeEventListener('click',printer);
                    return ;
            }
            
            turn = 'O';
        }
        
        if(total_turn===9)
            {
            document.getElementById('winningMessage').innerText="Match is Draw";
        }
    }

}





const board = document.querySelector('.board');

board.addEventListener('click',printer);



const button=document.getElementById('restartButton');
button.addEventListener('click',()=>{
   const cell=document.getElementsByClassName('cell');
   Array.from(cell).forEach((value)=>{
      value.innerHTML="";
   })
   

    turn = 'O';
    total_turn=0;
    board_array=new Array(9).fill('E'); 
    board.addEventListener('click',printer);
    document.getElementById('winningMessage').innerText="";
})