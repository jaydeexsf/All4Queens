import sercviceData from "./database/index.js";

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.category-btn');
    const serviceItems = document.querySelectorAll('.service-item');
    const servicelist = document.getElementById('service-item');

    servicelist.innerHTML = 'yeag';
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
  
        serviceItems.forEach(item => {
          if (category === 'all' || item.getAttribute('data-category') === category) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
        });
      });
    });

   servicelist.innerHTML = sercviceData.map((data) => {
          `
              <div class="service-item bg-white p-6 rounded-lg shadow-lg" data-category="${data.category}"}>
                <img src="${data.imgPath}" alt="${data.service } Service}" class="w-full h-auto object-cover rounded-t-lg mb-4">
                <h3 class="text-xl font-semibold mb-2">${data.service}</h3>
                <p class="text-gray-700 mb-4">${data.description}</p>
                <p class="text-pink-600 font-bold">R${data.price}</p>
              </div>
        `;

        // servicelist.appendChild(thediv);

    })
    
    // const divServiceItem = document.createElement('div');
    // const imgServiceItem = document.createElement('img');
    // const h3ServiceItem = document.createElement('h3');
    // const pServiceItem = document.createElement('p');
    // const p2ServiceItem = document.createElement('p');

    // // assigning the elemnt's values

    // imgServiceItem.setAttribute('src', `${data.imgPath}`);
    // imgServiceItem.setAttribute()
    // h3ServiceItem.setAttribute()

  });

  // class Node {
  //   constructor (data) {
  //     this.data.next = '',
  //     data.head = ''
  //   }
  // }

  const cancel = document.getElementById('cancel');

  function add() {
    cancel.style.display = 'flex'
  }

  function remove () {
    cancel.style.display = 'none';
  }


//   // Fetch the JSON data
// fetch('path/to/services.json')
// .then(response => response.json())
// .then(data => {
//   console.log(data);
//   // Use the data as needed
// })
// .catch(error => console.error('Error fetching data:', error));
