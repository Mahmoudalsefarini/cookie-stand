'use strict';

let operationHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let cont = document.getElementById('container');
let table = document.createElement('table');
cont.appendChild(table);

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let arrOfObjects = [];
function SalmonShopes(locationName, minCost, maxCost, avgCookieSale) {

    this.locationName = locationName;
    this.minCost = minCost;
    this.maxCost = maxCost;
    this.avgCookieSale = avgCookieSale;
    this.customerHourly = [];
    this.cookiesHourly = [];
    this.total = 0;
    arrOfObjects.push(this);
}

function getHeaderRow() {
    let headerRow = document.createElement('tr');
    table.appendChild(headerRow);
    let emptyCell = document.createElement('th');
    headerRow.appendChild(emptyCell);


    for (let i = 0; i < operationHours.length; i++) {
        let th = document.createElement('th');
        headerRow.appendChild(th);
        th.textContent = operationHours[i];
    }

    let dailyLoc = document.createElement('th');
    headerRow.appendChild(dailyLoc);
    dailyLoc.textContent = '  DailyLocTotal';
}

SalmonShopes.prototype.calcRandomNumofCust = function () {
    for (let i = 0; i < operationHours.length; i++) {
        this.customerHourly.push(getRandomIntInclusive(this.minCost, this.maxCost));

    }
},
    SalmonShopes.prototype.calcRandomNumofCookies = function () {
        for (let i = 0; i < operationHours.length; i++) {
            this.cookiesHourly.push(this.customerHourly[i] * Math.ceil(this.avgCookieSale));
            this.total += this.cookiesHourly[i];
        }

    },
    SalmonShopes.prototype.render = function () {
        let tr = document.createElement('tr');
        table.appendChild(tr);
        let firstCell = document.createElement('th');
        tr.appendChild(firstCell);
        firstCell.textContent = this.locationName;
        for (let i = 0; i < operationHours.length; i++) {
            let td = document.createElement('td');
            tr.appendChild(td);
            td.textContent = this.cookiesHourly[i];
        }
        let lastCell = document.createElement('th');
        tr.appendChild(lastCell);
        lastCell.textContent = this.total;

    }

let seattle = new SalmonShopes('Seattle', 23, 65, 6.3);
let tokyo = new SalmonShopes('Tokyo', 3, 24, 1.2);
let dubai = new SalmonShopes('Dubai', 11, 38, 3.7);
let paris = new SalmonShopes('Paris', 11, 38, 2.3);
let lima = new SalmonShopes('Lima', 2, 16, 4.6);

getHeaderRow();

for (let i = 0; i < arrOfObjects.length; i++) {
    arrOfObjects[i].calcRandomNumofCust();
    arrOfObjects[i].calcRandomNumofCookies();
    arrOfObjects[i].render();
}

function footerRow() {
    let lastRow = document.createElement('tr');
    table.appendChild(lastRow);
    let firstCell = document.createElement('th');
    lastRow.appendChild(firstCell);
    firstCell.textContent = 'Totals';
    let megaTotal = 0;

    for (let i = 0; i < operationHours.length; i++) {

        let sum = 0;
        for (let j = 0;j <  arrOfObjects.length; j++) {
            console.log(arrOfObjects[j])
            sum = sum + arrOfObjects[j].cookiesHourly[i];
        }
        let td = document.createElement('td');
        lastRow.appendChild(td);
        td.textContent = sum;
        megaTotal += sum;
    }
    let totals = document.createElement('th');
    lastRow.appendChild(totals);
    totals.textContent = megaTotal;


}
footerRow();
