import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");
  const numbersArray = [1, 3, 4, 5, 6, 7];
  const isEven = (n) => n % 2 === 0;
  

  numbersArray.filter(i => {
    if (isEven(i)) {
      if (i == 4) {
        let a = document.createElement('li')
        a.innerText = 'four';
        ul.appendChild(a)
      }
      if (i == 6) {
        let a = document.createElement('li')
        a.innerText = 'six';
        ul.appendChild(a)
      }

    }
  })

});