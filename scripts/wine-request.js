// test place holder
const drink = 'margarita'
// API Key is the standard is for the test API from https://www.thecocktaildb.com/api.php that anyone can use
const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drink;
console.log(baseUrl)

// gets inital response from API
$.ajax({
    url: baseUrl,
    method: "GET"
}).then((response) => {
    console.log(response)
})