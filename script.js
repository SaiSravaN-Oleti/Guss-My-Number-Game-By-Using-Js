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

document.querySelector('.check').addEventListener
   ('click', function () {
      console.log(document.querySelector('.guess').value);
   });