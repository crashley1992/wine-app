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

        // to help shorten for loop and variables that will be appended
        const drinksList = response.drinks

        for (let i = 0; i < drinksList.length; i++) {

            // console.log(drinksList[i])
            const drinkResults = drinksList[i]
            console.log(drinkResults.strDrink)
            const drinkImage = drinkResults.strDrinkThumb
            console.log(drinkImage)


            // Api didnt break ingredients into an array so each one must have it's own value
            const firstIngredient = drinkResults.strIngredient1
            const secondIngredient = drinkResults.strIngredient2
            const thirdIngredient = drinkResults.strIngredient3
            const fourthIngredient = drinkResults.strIngredient4
            const fifthIngredient = drinkResults.strIngredient5
            const sixthIngredient = drinkResults.strIngredient6
            const seventhIngredient = drinkResults.strIngredient7
            const eigthIngredient = drinkResults.strIngredient8
            const ninethIngredient = drinkResults.strIngredient9
            const tenthIngredient = drinkResults.strIngredient10
            const elevenIngredient = drinkResults.strIngredient11
            const tweleveIngredient = drinkResults.strIngredient12
            const thirteenIngredient = drinkResults.strIngredient13
            const fourteenIngredient = drinkResults.strIngredient14
            const fifteenIngredient = drinkResults.strIngredient15

            // organized the ingredients into an array so null values could be controlled/better display later 
            const ingredients = [firstIngredient, secondIngredient, thirdIngredient, 
                                fourthIngredient, fifthIngredient, sixthIngredient,
                                seventhIngredient, eigthIngredient, ninethIngredient,
                                tenthIngredient, elevenIngredient,  tweleveIngredient, 
                                thirteenIngredient, fourteenIngredient, fifteenIngredient]
                   
                    // mapped each ingredient and added conditional to get rid of null value for more clean displays
                    ingredients.map( ingredient => {
                        if (ingredient != null) {
                            console.log(ingredient)
                        }
                    })

         


            // Drink Instructions
            const drinkInstructions = drinkResults.strInstructions
            console.log(drinkInstructions)

            // measurements for ingredients
            const amount1 = drinkResults.strMeasure1
            const amount2 = drinkResults.strMeasure2
            const amount3 = drinkResults.strMeasure3
            const amount4 = drinkResults.strMeasure4
            const amount5 = drinkResults.strMeasure5
            const amount6 = drinkResults.strMeasure6

            amounts = [ amount1, amount2, amount3,
                        amount4, amount5, amount6
                      ]
            amounts.map(amount => {
                if (amount != null)
                console.log(amounts)
            })

        }
    })
