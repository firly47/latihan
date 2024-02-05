// firly74
// get the player chooise
loop   = true;
while (loop == true) {
var player = prompt ('keep your choise, rock, paper, or scisor and look who will win ?');
//  get the computer chooise
var comp = Math.random();
if (comp <= 0.34) {
    comp = 'rock';
} else if ( comp > 0.34 && comp <= 0.66) {
            comp = 'paper';
        } else {
            comp = 'scisor';
        }
        
        // make the rules
var result = '';
if (player == comp) {
    result = 'you tie';
} else if (player == 'rock' ) {
    // if (comp == paper) {
        //     result += 'sorry you lose';
        // } else {
            //     result += 'great you win';
            // }
            result = (comp == 'paper') ? 'sorry you lose' : 'congratulation you win !';
        } else if (player == 'paper') {
            result = (comp == 'rock') ? 'congratulation you win !' : 'sorry you lose';
} else if(player == 'scisor') {
    result = (comp == 'paper') ? 'congratulation you win !' : 'sorry you lose';
} else {
    result = 'please insert rock, paper or scisor !';
}

alert ('your chooise is '+ player +' and computer chooise '+ comp+ ' so the result is '+result);

loop = confirm ('you wanna try again ?');

}

alert ('thanks was try this game');
