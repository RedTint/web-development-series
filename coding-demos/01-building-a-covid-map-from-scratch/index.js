const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const jsonParser = bodyParser.json();

const csv = require('csv-parser')
const fs = require('fs')

const _ = require('lodash');

// EXPOSE MAP
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/scripts', (req, res) => {
    res.sendFile(__dirname + '/scripts.js');
});

const covidData = [];
const municitiesSummary = {}
let municitiesSummaryArray = []
const MUNICITY_KEY = 'CityMunRes'
const COVID_MAPPING_KEY = 'CityMuniPSGC'

app.get('/covid_data', jsonParser, (req, res) => {
    console.log('Fetching metric data...');

    if (!covidData.length) {
      fs.createReadStream('./doh-covid-data-20200810-case-information.csv')
        .pipe(csv())
        .on('data', (data) => {
            covidData.push(data)
            const municityName = data[MUNICITY_KEY].toString().toLowerCase();
            const CityMuniPSGC = data[COVID_MAPPING_KEY];
            if (!municitiesSummary[CityMuniPSGC]) {
                municitiesSummary[CityMuniPSGC] = {
                    municityPSGC: CityMuniPSGC,
                    municity: municityName,
                    covidCasesCount: 1
                }
            } else {
                municitiesSummary[CityMuniPSGC].covidCasesCount++
            }
        })
        .on('end', () => {
            res.status(200);

            const keys = Object.keys(municitiesSummary);
            municitiesSummaryArray = keys.map(key => {
                return {
                    municityPSGC: key,
                    covidSummary: municitiesSummary[key]
                }
            })
            res.send(municitiesSummaryArray);
        });
    } else {
      res.status(200);
      res.send(municitiesSummaryArray);
    }
});


// RETURN TOPOJSONS FROM LOCAL SINCE THEY ARE TOO BIGGGG!
app.get('/country_topojson', (req, res) => {
    res.sendFile(__dirname + '/topojsons/country.topo.0.01.json');
});

app.get('/municities_topojson', (req, res) => {
    const { file } = req.query;
    res.sendFile(__dirname + `/topojsons/${file}`);

});


// RETURN SAMPLE DATA
app.get('/api/sample_data', jsonParser, (req, res) => {
    res.status(200)
    const data = {
        foo: 'bar'
    };
    res.send(data)
});

// start API
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`You are now listening to http://localhost:${port}`);
});
