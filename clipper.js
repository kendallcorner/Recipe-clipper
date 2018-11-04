
ListOfTags = {
    "www.foodnetwork.com": {
        baseURL: "www.foodnetwork.com",
        ingredientsTag: "div",
        ingredients: "o-Ingredients__m-Body",
        instructionsTag: "div",
        instructions: "o-Method__m-Body",
        timeTag: "ul",
        time: "o-RecipeInfo__m-Time",
        title: "o-AssetTitle__a-Headline",
        titleTag: "h1",
        picture: "m-MediaBlock__a-Image a-Image",
        pictureTag: "img",
        yield: "o-RecipeInfo__m-Yield",
        yieldTag: "ul"

    }, 
    "www.foodnetwork.com": {
        baseURL: "www.foodnetwork.com",
        ingredientsTag: "p",
        ingredients: "o-Ingredients__a-Ingredient",
        instructionsTag: "div",
        instructions: "o-Method__m-Body",
        timeTag: "ul",
        time: "o-RecipeInfo__m-Time",
        title: "o-AssetTitle__a-Headline",
        titleTag: "h1",
        picture: "m-MediaBlock__a-Image a-Image",
        pictureTag: "img",
        yield: "o-RecipeInfo__m-Yield",
        yieldTag: "ul"

    }
    
}

url = window.location
baseURL = window.location.host
console.log("Base URL is ", baseURL)

if (ListOfTags.hasOwnProperty(baseURL)) {
    siteTags = ListOfTags[baseURL]

    var Ingredients = document.getElementsByClassName(siteTags.ingredients)
    console.log("Ingredients: ", Ingredients)


} else {
    console.log("Not a known recipe site")
}
