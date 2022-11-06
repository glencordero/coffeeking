class Recipe {
    constructor(recipeCard){
        this._name = recipeCard.name
        this._waterQty = recipeCard.waterQty
        this._waterTemp = recipeCard.waterTemp
        this._beansType = recipeCard.beansType
        this._beansQty = recipeCard.beansQty
        this._grind = recipeCard.grind
        this._cream = recipeCard.cream
        this._sweetener = recipeCard.sweetener
        this._milk = recipeCard.milk
        this._ice = recipeCard.ice
        this._description = recipeCard.description
    }
    get name() {
        return this._name
    }

    set name(name){
        this._name = name
    }

    get waterQty() {
        return this._waterQty
    }

    set waterQty(waterQty){
        this._waterQty = waterQty
    }

    get waterTemp() {
        return this._waterTemp
    }

    set waterTemp(waterTemp){
        this._waterTemp = waterTemp
    }

    get beansType() {
        return this._beansType
    }

    set beansType(beansType){
        this._beansType = beansType
    }

    get beansQty() {
        return this._beansQty
    }

    set beansQty(beansQty){
        this._beansQty = beansQty
    }

    get grind() {
        return this._grind
    }

    set grind(grind){
        this._grind = grind
    }

    get cream() {
        return this._cream
    }

    set cream(cream){
        this._cream = cream
    }

    get sweetener() {
        return this._sweetener
    }

    set sweetener(sweetener){
        this._sweetener = sweetener
    }

    get milk() {
        return this._milk
    }

    set milk(milk){
        this._milk = milk
    }

    get ice() {
        return this._ice
    }

    set ice(ice){
        this._ice = ice
    }

    get description() {
        return this._description
    }

    set description(description){
        this._description = description
    }
}

function makeRecipe(event){
    event.preventDefault()
    let recipeForm = document.forms[0]
    let data = new FormData(recipeForm)

    let recipeCard = {
        name: data.get('name'),
        waterQty: data.get('water-qty'),
        waterTemp: data.get('water-temp'),
        beansType: data.get('bean-type'),
        beansQty: data.get('beans-qty'),
        grind: data.get('grind-type'),
        description: data.get('description')
    }

    let newRecipe = new Recipe(recipeCard)

    
    console.log(newRecipe)
     
}


// this._name = recipeCard.name
// this._waterQty = recipeCard.waterQty
// this._waterTemp = recipeCard.waterTemp
// this._beansType = recipeCard.beansType
// this._beansQty = recipeCard.beansQty
// this._grind = recipeCard.grind
// this._cream = recipeCard.cream
// this._sweetener = recipeCard.sweetener
// this._milk = recipeCard.milk
// this._ice = recipeCard.ice
// this._description = recipeCard.description

document.getElementById('submit').addEventListener("click", makeRecipe)


