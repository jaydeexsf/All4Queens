// import sercviceData from "./database/index.js";

// import sercviceData from "./database";
document.addEventListener('DOMContentLoaded', () => {
  const all = document.getElementById('All');
  
// for (let i = 0; i <10 ; i++) {
//   if (all) {
//   all.click();
//   console.log()
//   } else {
//     console.log('problem')
//   }
// }
// all.click();

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

