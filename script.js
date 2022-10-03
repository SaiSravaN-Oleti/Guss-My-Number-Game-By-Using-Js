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
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
//handler function
document.querySelector('.check').addEventListener
   ('click', function () {
      const guess = document.querySelector('.guess').value;
      if (!guess) {
         document.querySelector('.message').textContent = '😂Enter some number !😂';
      } else if (guess == secretNumber) {
         document.querySelector('.message').textContent = '🎉Woow! Booutyful Nice Guess';
      } else if (guess > secretNumber) {
         document.querySelector('.message').textContent = '🛫Too High !!! ';
         score++;
         document.querySelector('.score').textContent = score;
      } else if (guess < secretNumber) {
         document.querySelector('.message').textContent = '😒😒Too Low...!!! ';
         score--;
         document.querySelector('.score').textContent = score;
      }
   });