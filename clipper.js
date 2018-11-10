
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
recipe = {}

if (ListOfTags.hasOwnProperty(baseURL)) {
    siteTags = ListOfTags[baseURL]

    recipe.url = url
    recipe.baseURL = baseURL
    recipe.instructions = document.getElementsByClassName(siteTags.instructions)
    var Ingredients = document.getElementsByClassName(siteTags.ingredients)
    console.log("Ingredients: ", Ingredients)



    // Get the modal
    var modal = document.createElement('div');
    modal.innerHTML = '<div id="myModal" class="modal"><div id="modal-content"><span id="close-modal" class="close">&times;</span> </div></div>';
    document.body.appendChild(modal);
    //console.log(modal);

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


    var content = document.getElementById('modal-content')
    content.style.setProperty('background-color', '#fefefe')
    content.style.setProperty('margin', 'auto')
    content.style.setProperty('padding', '20px')
    content.style.setProperty('border', '1px solid #888')
    content.style.setProperty('width', '80%')

    /* The Close Button
    .close 


    .close:hover,
    .close:focus

    content.style.setProperty('color', '#000'
    'text-decoration', 'none'
    'cursor', 'pointer' */

    // Get the <span> element that closes the modal
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

    content.textContent = Ingredients[0].textContent


} else {
    console.log("Not a known recipe site")
}
