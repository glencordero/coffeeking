const urlParams = new URLSearchParams(window.location.search)
const name = urlParams.get('name')
const cream = urlParams.get('cream')
const sweetener = urlParams.get('sweetener')
const ice = urlParams.get('ice')
const milk = urlParams.get('milk')

let recipes = JSON.parse(localStorage.getItem('recipes'))

let selectedRecipe = recipes.find(recipe => {
    return recipe._name == name
})

console.log(selectedRecipe)

let coffeeKing = {
    progress: document.getElementById('progress'),
    brewCoffee: function(recipe){
        let water = this.getWater(recipe._waterQty)
        let heatedWater = this.heatWater(water, recipe._waterTemp)
        let beans = this.selectBeans(recipe.beansType, recipe._beansQty)
        let groundBeans = this.grindBeans(beans, recipe._grind)
        let coffee = this.pour(heatedWater, beans)
        this.addCream(coffee, cream)
        this.addSweetener(coffee, sweetener)
        this.addMilk(coffee, milk)
        this.addIce(coffee, ice)
        this.dispenseCoffee(description)
    },
    getWater: function(waterQty){
        let p = document.createElement('p')
        p.innerHTML = `retrieving ${waterQty} oz of water`
        this.progress.appendChild(p)
        return "water"
    },
    heatWater: function(water, waterTemp){
        let p = document.createElement('p')
        p.innerHTML += `heating water to ${waterTemp} degrees`
        this.progress.appendChild(p)
        return "heated water"
    },
    selectBeans: function(beansType, beansQty){
        let p = document.createElement('p')
        p.innerHTML += `retrieving ${beansQty} oz of ${beansType} beans`
        this.progress.appendChild(p)
        return "beans"
    },
    grindBeans: function(beans, grind){
        let p = document.createElement('p')
        p.innerHTML += `grinding beans to ${grind} grade`
        this.progress.appendChild(p)
        return "ground beans"
    },
    pour: function(heatedWater, groundBeans){
        let p = document.createElement('p')
        p.innerHTML += `pouring hot water over ${groundBeans}`
        this.progress.appendChild(p)
        return "coffee"
    },
    addCream: function(coffee, cream){
        let p = document.createElement('p')
        p.innerHTML += cream ? `adding ${cream} oz of cream` : ''
        this.progress.appendChild(p)
    },
    addSweetener: function(coffee,sweetener){
        let p = document.createElement('p')
        p.innerHTML += sweetener ? `adding ${sweetener} pumps of sweetener` : ''
        this.progress.appendChild(p)
    },
    addMilk: function(coffee, milk){
        let p = document.createElement('p')
        p.innerHTML += milk ? `adding ${milk} oz of milk` : ''
        this.progress.appendChild(p)
    },

    addIce: function (coffee, ice){
        let p = document.createElement('p')
        p.innerHTML += ice ? `adding ${ice} scoops of ice` : ''
        this.progress.appendChild(p)
    },
    dispenseCoffee: function(description){
        let p = document.createElement('p')
        p.innerHTML += description
        this.progress.appendChild(p)
    }
}

coffeeKing.brewCoffee(selectedRecipe)