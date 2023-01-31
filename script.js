'use strict';

const namecardContainer = document.querySelector('.namecard-container');

const renderPerson = function(data) {
    
    const html = `
    <article class="person">
        <div class='image'>
            <img class="portrait" src="${data.picture.large}"/>
        </div>
        
        <div class="contact__data">
            <p class="name">name: ${data.name.title} ${data.name.first}</p>
            <p class="email">email: ${data.email}</p>
            <p class="phone">phone: ${data.phone}</p>
            <div class='dobInfo'>
                <button id="dob-btn">Show Dob</button>
                <p class="hidden" id="dob">${data.dob.date}</p>
            </div>
        </div>
    </article>
    `
   
    namecardContainer.insertAdjacentHTML('beforeend', html); // insert html into our page
    namecardContainer.style.opacity = 1;
}


const userNum =20;

const getPersonData = function(){
    fetch(`https://randomuser.me/api?results=${userNum}`)
    .then(function(response){
       // console.log(response);
        return  response.json();
    })
    .then(function(data){
        console.log(data.results);
        return data.results;
    })
    .then(users => {
        users.map(renderPerson)
    })
};


async function showAndReload() {
    namecardContainer.innerHTML = ''; //clear the original page
    getPersonData(); // show 20 users info
    const html = `
    <button class="reload" onclick='showAndReload()'>Reload</button>
    `  
    namecardContainer.insertAdjacentHTML('beforeend', html); // insert html into our page
    namecardContainer.style.opacity = 1;    // show reload button
}

showAndReload();

const handleDobClick = (event) => {
    let element = event.target;

    if (!element.children.length) element = element.parentElement;
  
    element.children[0].classList.toggle('hidden');
    element.children[1].classList.toggle('hidden');

};
document.addEventListener('click', (event) => {
  
    if (event.target.id === 'dob-btn' || event.target.id === 'dob-info')
      handleDobClick(event);
});

