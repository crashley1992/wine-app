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

            // creates div that will be a card for each drink
            const recipeContainer = $('<div>')
            recipeContainer.addClass('recipe-container')

            // drink objects that are iterated through are stored in this variable
            const drinkResults = drinksList[i]

            // appends drink title
            const drinkName = drinkResults.strDrink
            const title = $('<h3>')
            title.addClass('drink-title')
            const drinkTitle = recipeContainer.append(title.text(drinkName))
            $('.recipes').append(drinkTitle)


            // drink images for each container
            const drinkImage = drinkResults.strDrinkThumb
            const image = $('<img>')
            image.addClass('drink-img')
            image.attr("src", drinkImage)
            const drinkDisplay = recipeContainer.append(image)
            $('.recipes').append(drinkDisplay)


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

            // organized the ingredients into an array so null values could be filtered out display later 
            const ingredients = [firstIngredient, secondIngredient, thirdIngredient, 
                                fourthIngredient, fifthIngredient, sixthIngredient,
                                seventhIngredient, eigthIngredient, ninethIngredient,
                                tenthIngredient, elevenIngredient,  tweleveIngredient, 
                                thirteenIngredient, fourteenIngredient, fifteenIngredient]
                   
                    // filters each ingredient to get rid of null value for more clean displays
                    const ingredientResult = ingredients.filter(ingredient => ingredient != null)
                    console.log(ingredientResult)

                        const listContainer = $('<ul>')
                        listContainer.addClass("container-ingredient-item")
                        for (let j = 0; j < ingredientResult.length; j++ ) {
                            const listItems = ingredientResult[j]
                            const ingredientList = $("<p>").text(listItems)
                            ingredientList.addClass("ingredient-item")
                            listContainer.append(ingredientList)
                            const list = recipeContainer.append(listContainer)
                            $('.recipes').append(list)
                        }
                        
                    
            // Drink Instructions
            const drinkInstructions = drinkResults.strInstructions
            console.log(drinkInstructions)
            const instructions = $('<p>').text(drinkInstructions)
            instructions.addClass('instructions')
            $('.recipes').append(instructions)

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
            // filters each amount to get rid of null value as well
            const amountResult = amounts.filter(amount => amount != null)
            console.log(amountResult)
            
            // const listAmountContainer = $('<ul>')
            // listAmountContainer.addClass("container-ingredient-item")
            // for (let x = 0; x < amountResult.length; i++) {
            //     amountList = amountResult[x]
            //     const measure = $("<p>").text(amountList)
            //     measure.addClass("amount-list")
            //     listAmountContainer.append(measure)
            //     const measureList = recipeContainer.append(listAmountContainer)
            //     $('.recipes').append(measureList)
            
        }
    })
