'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMsg = function(message){
   document.querySelector('.message').textContent = message;
}

//handler function
document.querySelector('.check').addEventListener
   ('click', function () {
      const guess = document.querySelector('.guess').value;
      //if there is no guess / no input
      if (!guess) {
         displayMsg('😂Enter some number !😂');
      }
      //if the guess val is same!
      else if (guess == secretNumber) {
      displayMsg('🎉Woow! Booutyful Nice Guess');
      document.querySelector('body').style.backgroundColor = '#2ebf91';
      document.querySelector('.number').style.width='60rem';
      document.querySelector('.number').textContent = '🏅'+secretNumber+'🏅';
         if(score>highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
         }
      }
      else if(guess != secretNumber){
         if(score > 1 ){
            displayMsg(`${guess>secretNumber ? '📈 Too High!' : '📉 Too Low!'}`);
            score--;
            document.querySelector('.score').textContent = score;
         }else {
            displayMsg('You Lost!💣');
            document.querySelector('.score').textContent = 0;
         }
      }
});
//hangle again btn to reset the all values
document.querySelector('.again').addEventListener('click',function(){
   score = '20';
   secretNumber = Math.trunc(Math.random() * 20) + 1;
   document.querySelector('.score').textContent = score;
   document.querySelector('.number').textContent ='?';
   document.querySelector('.guess').textContent ='';
   displayMsg('Start guessing...');
   document.querySelector('body').style.backgroundColor = '#222';
   document.querySelector('.number').style.width='15rem';
});