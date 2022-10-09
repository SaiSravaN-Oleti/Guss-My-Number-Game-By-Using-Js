'use strict';
//
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉Holly ! Molly ! Correct Number !🎊';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
//this is used to help read 

//generating the random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);
let score = 20;


//handler function
document.querySelector('.check').addEventListener
   ('click', function () {
      const guess = document.querySelector('.guess').value;
      //if there is no guess / no input
      if (!guess) {
         document.querySelector('.message').textContent = '😂Enter some number !😂';
      }
      //if the guess val is same!
      else if (guess == secretNumber) {
         document.querySelector('.message').textContent = '🎉Woow! Booutyful Nice Guess';
      document.querySelector('body').style.backgroundColor = '#2ebf91';
      document.querySelector('.number').style.width='60rem';
      document.querySelector('.number').textContent = '🎇🏅'+secretNumber+'🏅🎇';
      }
      //if guess val is high
      else if (guess > secretNumber) {
         if (score > 1) {
            document.querySelector('.message').textContent = '🛫Too High !!! ';
            score--;
            document.querySelector('.score').textContent = score;
         } else {
            document.querySelector('.message').textContent = '💣You Lost!💣';
            document.querySelector('.score').textContent = 0;
         }
      }
      //if guess val is low
      else if (guess < secretNumber) {
         if (score > 1) {
            document.querySelector('.message').textContent = '😒😒Too Low...!!! ';
            score--;
            document.querySelector('.score').textContent = score;
         } else {
            document.querySelector('.message').textContent = '💣You Lost!💣';
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
   document.querySelector('body').style.backgroundColor = '#222';
   document.querySelector('.number').style.width='15rem';
});