import { Controller } from './controller.js';

export const View = (() => {

    const domStr = {
        cards: '.namecard-container', //division name
      };
    
    const renderPerson = (arr) => { //create innerhtml for namecards 
        let html = ``;
        arr.forEach((user)=> {
            html += `
            <article class="person">
                <div class='image'>
                    <img class="portrait" src="${user.picture.large}"/>
                </div>
                
                <div class="contact__data">
                    <p class="name">name: ${user.name.title} ${user.name.first}</p>
                    <p class="email">email: ${user.email}</p>
                    <p class="phone">phone: ${user.phone}</p>
                    <div class='dobInfo'>
                        <button id="dob-btn">Show Dob</button>
                        <p class="hidden" id="dob">${user.dob.date}</p>
                    </div>
                </div>
            </article>
        `;
        });
        return html;
    }

    const reloadButton = () => {
        document.body.innerHTML += `<button id="reload">Reload</button>`;
    };

    const render = (el, tmp) => {
        el.innerHTML = tmp;
        reloadButton();
      };

    const handleDobClick = (event) => { // show dob info 
        let element = event.target;
    
        if (!element.children.length) element = element.parentElement;
    
        element.children[0].classList.toggle('hidden'); //hide original btn
        element.children[1].classList.toggle('hidden'); // show info
        };
    
    document.addEventListener('click', (event) => {   // show dob info when click
        if (event.target.id === 'dob-btn' || event.target.id === 'dob-info')
        handleDobClick(event);
        else if (event.target.id === 'reload') handleReloadClick();
    });
    
    const handleReloadClick = () => {
        Controller.init();
      };
    
    return{
        domStr,
        render,
        renderPerson
    }
})();