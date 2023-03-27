

const $ = require('jquery');

function startTimer(number, targetElement) {
    let count = number;
  
    const interval = setInterval(() => {
      $(targetElement).text(count);
      count--;
  
      if (count < 0) {
        clearInterval(interval);
      }
    }, 1000);
  }
  
  module.exports = {
    startTimer
  };