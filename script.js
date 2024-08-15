// import sercviceData from "./database/index.js";

// import sercviceData from "./database";
// document.addEventListener('DOMContentLoaded', () => {
//   const all = document.getElementById('All');
//   const category_btn = document.querySelectorAll('.category-btn');

//   category_btn.forEach((btn)=> {
//     btn.addEventListener('click', () => {
//       const category = btn.getAttribute('data-category');
//     if (btn.getAttribute('data-category') === category) {
//       btn.style.backgroundColor = 'red';
//     } else {
//       btn.style.backgroundColor = "gray";
//       btn.style.color = 'black';
//     }
//   })
// });
// })

document.addEventListener('DOMContentLoaded', () => {
  const all = document.getElementById('All');
  const category_btn = document.querySelectorAll('.category-btn');

  category_btn.forEach((btn) => {
    btn.classList.add('transition');
    btn.classList.add('duration-[0.5s]');
    btn.classList.add('hover:shadow-lg');
    btn.addEventListener('click', () => {  
      const category = btn.getAttribute('data-category'); 
      category_btn.forEach((button) => {  // Looping through all buttons to rese styles
        
        if (button.getAttribute('data-category') === category) {
          button.style.backgroundColor = '#be185d';
          button.style.color = 'white';
        } else {
          button.style.backgroundColor = '#ec4899';
          button.style.color = '#111827';
        }
      });
    });
  });
});



  //   setInterval(function(){
  //     all.click();
  // },9000); 


  // class Node {
  //   constructor (data) {
  //     this.data.next = '',
  //     data.head = ''
  //   }
  // }

  

  const cancel = document.getElementById('cancel');

  function add() {
  cancel.style.display = 'flex';

  setTimeout(()=>{
  window.document.addEventListener('click', () =>{
    remove();
  }, 100)
})
}

  function remove () {
    cancel.style.display = 'none';
  }

