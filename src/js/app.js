import Cookies from 'js-cookie';


(() => {
    'use strict';


    
    const place = document.getElementById('visitCard');

    class VisitCard {
        constructor() {
            this.name = document.getElementById('nameI').value;
            this.surname = document.getElementById('surnameI').value;
            this.email = document.getElementById('emailI').value;
            this.cardHolder = [];
        }
        getData() {

            place.innerHTML = `${this.name} ${this.surname} ${this.email}`;
        }
        haveData() {
            return {
                Name: this.name,
                Surname: this.surname,
                Email: this.email
            }
        }
        pushCards(visitCard) {
            this.cardHolder.push(visitCard);
        }
    }
       
    
    
    
    const btnAdd = document.getElementById('add');

    btnAdd.addEventListener('click', ()=> {
        let visitCard1 = new VisitCard;
        visitCard1.getData();
        pushCards(visitCard1);
        let coo1 = Cookies.set('wizytowka', visitCard1.haveData()); // wyjac to z funkcji pod osobny przycisk
    });

    const btnRemCookies = document.getElementById('removeCookies');

    btnRemCookies.addEventListener('click', ()=> {
        Cookies.remove();
    })

})();

