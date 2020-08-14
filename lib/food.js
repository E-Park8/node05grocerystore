const Product = require('./product.js')
class Food extends Product{
    constructor(name, quantity, price, exp, group) {
        super(name, quantity, price)
        this.exp = exp
        this.group = group
    } 
    getExpirationDate(){
        return this.exp
    }
    getFoodGroup(){
        return this.group
    }
    getType (){
        return 'food'
    }
}

module.exports = Food