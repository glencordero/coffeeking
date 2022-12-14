// <!-- 1. Goal: display recipes on page
//     2. Lay out steps
//         2a. Get recipes from local storage
//         2b. parse the recipes
//         2c. loop through recipes
//         2d. create element to hold recipe name and description
//         2e. put element on page
//     3. Implementation
//         3a. make javascript file
//         3b. link html to javascript
//         3c. write code to implement steps -->  

let menuRecipes = JSON.parse(localStorage.getItem('recipes'))

menuRecipes.forEach(recipe=>{
    let wrapperDiv = document.createElement('div')
    wrapperDiv.classList.add("menu-item")
    wrapperDiv.id = recipe._name
    let p = document.createElement('p')
    p.innerHTML = `${recipe._name} : ${recipe._description}`
    wrapperDiv.appendChild(p)
    wrapperDiv.appendChild(createSlider(recipe._name,"Cream"))
    wrapperDiv.appendChild(createSlider(recipe._name,"Sweetener"))
    wrapperDiv.appendChild(createSlider(recipe._name,"Milk"))
    wrapperDiv.appendChild(createSlider(recipe._name,"Ice"))
    let recipeDisplay = document.getElementById('recipe-display')
    
    addEventListener("click", selectMenuItem)
    
    recipeDisplay.appendChild(wrapperDiv)
})

function selectMenuItem(event){
    highlightMenuItem(event.target)
    selectedMenuItemId = event.target.id
    // document.location.href = "index.html?name=americano&cream=5&milk=0&ice=0&sweetener=2"
}

let selectedMenuItemId = null

// TODO get option values

function createSlider(name, label){
    let sliderDiv = document.createElement('div')
    let slider = document.createElement('input')
    slider.id = `${name}-${label}`
    slider.type = "range"
    slider.min = 0
    slider.max = 10
    slider.value = 0
    slider.step = 1
    let sliderLabel = document.createElement('label')
    sliderLabel.innerHTML = label
    sliderDiv.appendChild(slider)
    sliderDiv.appendChild(sliderLabel)
    return sliderDiv
}

function highlightMenuItem(menuItem){
    let menuItems = document.querySelectorAll(".menu-item")
    menuItems.forEach(menuItem=>{
        menuItem.classList.remove("selected")
    })
    if (menuItem.classList.contains("menu-item")){
        menuItem.classList.add("selected")
    }
}

function takeOrder(event){
    event.preventDefault()
    // find value of sliders on selected menu item
    let creamAmount = document.querySelector(`#${selectedMenuItemId}-Cream`).value
    let sweetenerAmount = document.querySelector(`#${selectedMenuItemId}-Sweetener`).value
    let milkAmount = document.querySelector(`#${selectedMenuItemId}-Milk`).value
    let iceAmount = document.querySelector(`#${selectedMenuItemId}-Ice`).value
    document.location.href = `index.html?name=${selectedMenuItemId}&cream=${creamAmount}&milk=${milkAmount}&ice=${iceAmount}&sweetener=${sweetenerAmount}`
}


let submitButton = document.querySelector('#select').addEventListener("click",takeOrder)
