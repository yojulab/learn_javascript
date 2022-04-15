'use strict';

const url = 'https://api.covid19api.com/country/south-africa/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z';

const request = fetch(url).then(response => response.json())
    .then(data => {
        console.log(data);
    });