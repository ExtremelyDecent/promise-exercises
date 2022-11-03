let favoriteNumber = 3;
let APIURL = "http://numbersapi.com";

//1.
async function getNumberInfo(){
    let data = await $.getJSON(`${APIURL}/${favoriteNumber}?json`);
    console.log(data);
};
getNumberInfo();

//2.
const favoriteNumbers = [3,5,7];
async function getNumbersInfo(){
    let data = await $.getJSON(`${APIURL}/${favoriteNumbers}?json`);
    console.log(data);
}
getNumbersInfo();

//3.
async function multiFacts(){
    let facts = await Promise.all(
        Array.from({ length: 4 }, () => $.getJSON(`${APIURL}/${favoriteNumber}?json`))
    );
    facts.forEach(data => {
        $('body').append(`<p>${data.text}</p>`);
    });
}
multiFacts();
