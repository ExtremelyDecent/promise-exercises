let favoriteNumber = 3;
let APIURL = "http://numbersapi.com";

//1.
$.getJSON(`${baseURL}/${favortieNumber}?json`).then(data => {
    console.log(data);
});

// 2.
let favoriteNumbers = [7, 11, 22];
$.getJSON(`${baseURL}/${favoriteNumbers}?json`).then(data => {
    console.log(data);
});

// 3.
Promise.all(
    Array.from({ length: 4 }, () => {
        return $.getJSON(`${baseURL}/${favoriteNumber}?json`);
    })
).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});
  
