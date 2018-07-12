var winner = false;
var number = Math.floor(Math.random() * 3);
var options = '';
var coin = 1;
var audio = document.getElementById('audio1');
document.getElementById("coin").innerHTML = "coin: 1";


/*
sort 0= paper
sort 1= rock
sort 2= scissor
*/
//value 5 = user want to play again
function get(value){
  if(value == 0){
    switch(number){
      case 0:
        winner = false;
        break;
      case 1:
        winner = true;
        break;
      case 2:
        winner = false;
        break;
    }//end switch
  }//end if
  if(value == 1){
    switch(number){
      case 0:
        winner = false;
        break;
      case 1:
        winner = false;
        break;
      case 2:
        winner = true;
        break;
      }//end switch
    }//end if
    if(value == 2){
      switch(number){
        case 0:
          winner = true;
          break;
        case 1:
          winner = false;
          break;
        case 2:
          winner = false;
          break;
        }//end switch
      }//end if
      switch(number){
        case 0:
          options = 'paper';
          break;
        case 1:
          options = 'rock';
          break;
        case 2:
          options = 'scissor';
          break;
      };
      if(winner === true){
        alert("you win!, the computer played " + options);
        audio.play();
      }//end if
    if(value != -3){
      document.getElementById("coin").innerHTML = "coin: 0";
      coin = 0;
    }

}//end function get
