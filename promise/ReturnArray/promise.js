/**
 * Created by rajan.lamichhane on 20/06/2016.
 */

"use strict";

var countriesData = ['uk', 'france'];

var citiesData = {
    'uk' : ['london', 'barmingham', 'glassgo'],
    'france' : ['paris', 'roen', 'calai']
};

var intervalTime = 1000;

function getCountries () {
    intervalTime = intervalTime + 1000;
    //var intervalTime = 1000;
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(countriesData){
                resolve(countriesData);
            } else {
                reject({error: 'error'});
            }
        }, intervalTime);

    });
}

function getCities(country) {
    //var intervalTime = 2000;
    intervalTime = intervalTime + 2000;
    var country = citiesData[country];
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(country){
                resolve(country);
            } else {
                reject({error: 'error'});
            }
        }, intervalTime);

    });
}

function drawCountry(country) {
    var h1 = document.createElement('ul');
    h1.id = country;
    var h1Text = document.createTextNode(country);

    h1.appendChild(h1Text);
    document.body.appendChild(h1)
}

function drawCity(country, city) {
    var countryNode = document.getElementById(country);
    var cityNode = document.createElement('li');
    var cityTextNode = document.createTextNode(city);

    cityNode.appendChild(cityTextNode);
    countryNode.appendChild(cityNode);
}

var countries = new getCountries();

countries.then(
    function(data) {
        for(var i=0; i<data.length; i++) {
            var currentCountry = data[i];
            drawCountry(currentCountry);

            (function(currentCountry) {
                var cities = new getCities(currentCountry); // promise happens after executing outer loop so without passing context, only last values are displayed
                cities.then(function(dataI) {

                    for(var j=0; j<dataI.length; j++) {
                        var currentCity = dataI[j];
                        console.log('city' + j, currentCity);
                        drawCity(currentCountry, currentCity)
                    }

                }, function (error) {
                    console.log('cities eror', error);
                });
            })(currentCountry);
        }
        console.log('data', data);
    },
    function(error) {
        console.log('error', error);
    }
);


