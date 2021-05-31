'use strict';

let operationHours = ['6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let cont = document.getElementById('container');
//from MDN  "random value"
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
console.log(getRandomIntInclusive(23, 65))

const seattle = {
    locationName: 'seattle',
    minCost: 23,
    maxCost: 65,
    avgCookieSale: 6.3,
    customerHourly: [],
    cookiesHourly:[],
    total: 0,
    calcRandomNumofCust: function () {
        for (let i = 0; i < operationHours.length; i++) {
            this.customerHourly.push(getRandomIntInclusive(this.minCost, this.maxCost));

        }
    },
    calcRandomNumofCookies:function(){
        for(let i = 0 ; i < operationHours.length; i++){
            this.cookiesHourly.push(this.customerHourly[i]*Math.ceil(this.avgCookieSale));
            this.total = this.total + this.cookiesHourly[i];
        }

    },
    render:function(){
        let locationName = document.createElement('h2');
        cont.appendChild(locationName);
        locationName.textContent = this.locationName;
        let unOrderedlist = document.createElement('ul');
        cont.appendChild(unOrderedlist);
        
        for(let i = 0 ; i < this.cookiesHourly.length; i++){
            let listItems = document.createElement('li');
            unOrderedlist.appendChild(listItems);
            listItems.textContent = operationHours[i] + ' : ' + this.cookiesHourly[i] + '  cookeis';
        }
        let dailyTotal = document.createElement('li');
        unOrderedlist.appendChild(dailyTotal);
        dailyTotal.textContent = 'Total : ' + this.total + ' Cookies' ;


    }



};

seattle.calcRandomNumofCust();
seattle.calcRandomNumofCookies();
seattle.render();



const tokyo = {
    locationName: 'Tokyo',
    minCost: 3,
    maxCost: 24,
    avgCookieSale: 1.2,
    customerHourly: [],
    cookiesHourly:[],
    total: 0,
    calcRandomNumofCust: function () {
        for (let i = 0; i < operationHours.length; i++) {
            this.customerHourly.push(getRandomIntInclusive(this.minCost, this.maxCost));

        }
    },
    calcRandomNumofCookies:function(){
        for(let i = 0 ; i < operationHours.length; i++){
            this.cookiesHourly.push(this.customerHourly[i]*Math.ceil(this.avgCookieSale));
            this.total = this.total + this.cookiesHourly[i];
        }

    },
    render:function(){
        let locationName = document.createElement('h2');
        cont.appendChild(locationName);
        locationName.textContent = this.locationName;
        let unOrderedlist = document.createElement('ul');
        cont.appendChild(unOrderedlist);
        
        for(let i = 0 ; i < this.cookiesHourly.length; i++){
            let listItems = document.createElement('li');
            unOrderedlist.appendChild(listItems);
            listItems.textContent = operationHours[i] + ' : ' + this.cookiesHourly[i] + '  cookeis';
        }
        let dailyTotal = document.createElement('li');
        unOrderedlist.appendChild(dailyTotal);
        dailyTotal.textContent = 'Total : ' + this.total + ' Cookies' ;


    }



};

tokyo.calcRandomNumofCust();
tokyo.calcRandomNumofCookies();
tokyo.render();




const dobai = {
    locationName: 'Dobai',
    minCost: 11,
    maxCost: 38,
    avgCookieSale: 3.7,
    customerHourly: [],
    cookiesHourly:[],
    total: 0,
    calcRandomNumofCust: function () {
        for (let i = 0; i < operationHours.length; i++) {
            this.customerHourly.push(getRandomIntInclusive(this.minCost, this.maxCost));

        }
    },
    calcRandomNumofCookies:function(){
        for(let i = 0 ; i < operationHours.length; i++){
            this.cookiesHourly.push(this.customerHourly[i]*Math.ceil(this.avgCookieSale));
            this.total = this.total + this.cookiesHourly[i];
        }

    },
    render:function(){
        let locationName = document.createElement('h2');
        cont.appendChild(locationName);
        locationName.textContent = this.locationName;
        let unOrderedlist = document.createElement('ul');
        cont.appendChild(unOrderedlist);
        
        for(let i = 0 ; i < this.cookiesHourly.length; i++){
            let listItems = document.createElement('li');
            unOrderedlist.appendChild(listItems);
            listItems.textContent = operationHours[i] + ' : ' + this.cookiesHourly[i] + '  cookeis';
        }
        let dailyTotal = document.createElement('li');
        unOrderedlist.appendChild(dailyTotal);
        dailyTotal.textContent = 'Total : ' + this.total + ' Cookies' ;


    }



};

dobai.calcRandomNumofCust();
dobai.calcRandomNumofCookies();
dobai.render();




const paris = {
    locationName: 'Paris',
    minCost: 20,
    maxCost: 38,
    avgCookieSale: 2.3,
    customerHourly: [],
    cookiesHourly:[],
    total: 0,
    calcRandomNumofCust: function () {
        for (let i = 0; i < operationHours.length; i++) {
            this.customerHourly.push(getRandomIntInclusive(this.minCost, this.maxCost));

        }
    },
    calcRandomNumofCookies:function(){
        for(let i = 0 ; i < operationHours.length; i++){
            this.cookiesHourly.push(this.customerHourly[i]*Math.ceil(this.avgCookieSale));
            this.total = this.total + this.cookiesHourly[i];
        }

    },
    render:function(){
        let locationName = document.createElement('h2');
        cont.appendChild(locationName);
        locationName.textContent = this.locationName;
        let unOrderedlist = document.createElement('ul');
        cont.appendChild(unOrderedlist);
        
        for(let i = 0 ; i < this.cookiesHourly.length; i++){
            let listItems = document.createElement('li');
            unOrderedlist.appendChild(listItems);
            listItems.textContent = operationHours[i] + ' : ' + this.cookiesHourly[i] + '  cookeis';
        }
        let dailyTotal = document.createElement('li');
        unOrderedlist.appendChild(dailyTotal);
        dailyTotal.textContent = 'Total : ' + this.total + ' Cookies' ;


    }



};

paris.calcRandomNumofCust();
paris.calcRandomNumofCookies();
paris.render();





const lima = {
    locationName: 'Lima',
    minCost: 2,
    maxCost: 16,
    avgCookieSale: 4.6,
    customerHourly: [],
    cookiesHourly:[],
    total: 0,
    calcRandomNumofCust: function () {
        for (let i = 0; i < operationHours.length; i++) {
            this.customerHourly.push(getRandomIntInclusive(this.minCost, this.maxCost));

        }
    },
    calcRandomNumofCookies:function(){
        for(let i = 0 ; i < operationHours.length; i++){
            this.cookiesHourly.push(this.customerHourly[i]*Math.ceil(this.avgCookieSale));
            this.total = this.total + this.cookiesHourly[i];
        }

    },
    render:function(){
        let locationName = document.createElement('h2');
        cont.appendChild(locationName);
        locationName.textContent = this.locationName;
        let unOrderedlist = document.createElement('ul');
        cont.appendChild(unOrderedlist);
        
        for(let i = 0 ; i < this.cookiesHourly.length; i++){
            let listItems = document.createElement('li');
            unOrderedlist.appendChild(listItems);
            listItems.textContent = operationHours[i] + ' : ' + this.cookiesHourly[i] + '  cookeis';
        }
        let dailyTotal = document.createElement('li');
        unOrderedlist.appendChild(dailyTotal);
        dailyTotal.textContent = 'Total : ' + this.total + ' Cookies' ;


    }



};

lima.calcRandomNumofCust();
lima.calcRandomNumofCookies();
lima.render();


