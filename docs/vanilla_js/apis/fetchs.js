'use strict';
// refer : https://www.daleseo.com/js-window-fetch/
    let url = 'https://apis.data.go.kr/3450000/medicalDevSalesPlasService/getMedicalDevSalesPlas?serviceKey=[?]&currentPage=1&perPage=10&SN=1';
    let request = fetch(url)
    .then((response) => {
         return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((errorMeg) => {
        console.log(errorMeg);
    });
