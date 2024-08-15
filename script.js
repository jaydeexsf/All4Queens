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

// const menu = document.querySelectorAll('#menu li');

// function navtoggle(menu) {
//   if (menu.classList.contains('underline') ) {
//     menu.classList.remove('underline')
//   } else {
//     menu.classList.add('underline');
//   }
// }

// menu.forEach((menu) => {
//   menu.addEventListener('click', ()=> {
//     console.log("yeppp");
//   navtoggle(menu)
//    })
//   })
// })
  
const menuItems = document.querySelectorAll('#menu li');
let currentlyUnderlined = null; // To keep track of the currently underlined item

function navToggle(item) {
  if (currentlyUnderlined) {
    currentlyUnderlined.classList.remove('underline'); // Remove underline from the previously selected item
  }
  item.classList.add('underline'); 
  item.classList.add('underline-offset-4')
  item.classList.add('decoration-4')
  currentlyUnderlined = item; // Update the reference to the currently underlined item
}

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    console.log("yeppp");
    navToggle(item);
  });
});


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

