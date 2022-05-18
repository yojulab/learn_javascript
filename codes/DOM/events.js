'use strict';

const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  console.log('Button Clicked');
});

const google = document.querySelector('#google');
google.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Google Clicked');
    });
    
