let americano = {
    waterQty: 6,
    waterTemp: 200,
    beansType: "espresso",
    beansQty: 1.5,
    grind: "fine",
    cream: 0,
    sweetener: 0,
    milk: 0,
    ice: 0,
    description: "coffee drink prepared by diluting an espresso with hot water"
}

let coffeeKing = {
    progress: document.getElementById('progress'),
    brewCoffee: function(recipe){
        let water = this.getWater(recipe.waterQty)
        let heatedWater = this.heatWater(water, recipe.waterTemp)
        let beans = this.selectBeans(recipe.beansType, recipe.beansQty)
        let groundBeans = this.grindBeans(beans, recipe.grind)
        let coffee = this.pour(heatedWater, beans)
        this.addCream(coffee, recipe.cream)
        this.addSweetener(coffee, recipe.sweetener)
        this.addMilk(coffee, recipe.milk)
        this.addIce(coffee, recipe.ice)
        this.dispenseCoffee(recipe.description)
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
coffeeKing.brewCoffee(americano)