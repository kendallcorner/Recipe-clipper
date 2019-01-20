
SiteData = {
    "www.foodnetwork.com": {
        baseURL: "www.foodnetwork.com",
        ingredientsTag: "div",
        ingredientsClass: "o-Ingredients__m-Body",
        instructionsTag: "div",
        instructionsClass: "o-Method__m-Body",
        timeTag: "ul",
        timeClass: "o-RecipeInfo__m-Time",
        titleClass: "o-AssetTitle__a-Headline",
        titleTag: "h1",
        pictureClass: "m-MediaBlock__a-Image a-Image",
        pictureTag: "img",
        yieldClass: "o-RecipeInfo__m-Yield",
        yieldTag: "ul",
        "parseit": function(baseURL, url) { return foodnetworkParser(baseURL, url); },
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
recipe = {}

if (SiteData.hasOwnProperty(baseURL)) {
    recipe = foodnetworkParser(baseURL, url, document)

    // Get the modal
    var modal = document.createElement('div');
    modal.innerHTML = '<div id="myModal" class="modal"><div id="modal-content"><span id="close-modal" class="close">&times;</span> </div></div>';
    document.body.appendChild(modal);

    ingredientList = '<ol><li>'
    for (var i = 0; i < recipe.ingredients.length; i++) {
        ingredientList = ingredientList + recipe.ingredients[i] + '</li><li>'
    }

    recipePopup = '<h1>' + recipe.title + '</h1>' 
        + '<p>Yield: ' + recipe.yield + '</p>'
        + '<p>Time:' + recipe.time + '</p>'
        + '<p>Ingredients</p>' + ingredientList
        + '<p>Instructions</p>' + recipe.instructions;

    var content = document.getElementById('modal-content')
    content.innerHTML = content.innerHTML + recipePopup;

    modal.style.setProperty('display', 'block')
    modal.style.setProperty('position', 'fixed')
    modal.style.setProperty('z-index', '5000')
    modal.style.setProperty('padding-top', '100px')
    modal.style.setProperty('left', '0')
    modal.style.setProperty('top', '0')
    modal.style.setProperty('width', '100%')
    modal.style.setProperty('height', '100%')
    modal.style.setProperty('overflow', 'auto')
    modal.style.setProperty('background-color', 'rgb(0,0,0)')
    modal.style.setProperty('background-color', 'rgba(0,0,0,0.4)')

    content.style.setProperty('background-color', '#fefefe')
    content.style.setProperty('margin', 'auto')
    content.style.setProperty('padding', '20px')
    content.style.setProperty('border', '1px solid #888')
    content.style.setProperty('width', '80%')

    var close = document.getElementById("close-modal")
    close.style.setProperty('color', '#aaaaaa')
    close.style.setProperty('float', 'right')
    close.style.setProperty('font-size', '28px')
    close.style.setProperty('font-weight', 'bold')
    // When the user clicks the button, open the modal 
    //modal.style.display = "block";
    close.onmouseover = function() {
        this.style.setProperty('color', '#000');
        this.style.setProperty('text-decoration', 'none');
        this.style.setProperty('cursor', 'pointer');
    }

    close.onmouseout = function() {
        this.style.setProperty('color', '#aaaaaa');
        this.style.setProperty('cursor', 'pointer');
    }
    // When the user clicks on <span> (x), close the modal
    close.onclick = function() {
        modal.style.display = "none";
        console.log("closeclicked");
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        console.log("elsewhere clicked")
    }

} else {
    console.log("Not a known recipe site")
}

function foodnetworkParser(baseURL, url) {
    siteInfo = SiteData[baseURL]
    var recipe = {}

    recipe.url = url
    recipe.baseURL = baseURL
    
    recipe.ingredients = []
    var ingredientList = document.getElementsByClassName(siteInfo.ingredientsClass)
    for (var i = 0; i < ingredientList.length; i++) {
        recipe.ingredients[i] = ingredientList[i].textContent.trim();
        console.log(recipe.ingredients[i])
    }

    recipe.instruction =  getByClass(siteInfo.instructionsClass, 0)
    recipe.timeParse = getByClass(siteInfo.timeClass, 0)
    recipe.titleParse = getByTag(siteInfo.titleTag, 0) 
    recipe.pictureParse = getByClass(siteInfo.pictureTag, 0)
    recipe.yieldParse = getByClass(siteInfo.yieldTag, 0)

    return recipe;
}


function getByClass(className, index) {
    document.getElementsByClassName(className)[index].textContent.trim()
}

function getByTag(tag, index) {
    document.getElementsByClassName(tag)[index].textContent.trim()
}
