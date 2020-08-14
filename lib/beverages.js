const Product = require('./product.js')
class Beverage extends Product{
    constructor(name, quantity, price, oz, flavor) {
        super(name, quantity, price)
        this.oz = oz
        this.flavor = flavor
    } 
    getFluidOz(){
        return this.oz
    }
    getMainFlavor(){
        return this.flavor
    }
    getType(){
        return 'beverage'
    }
}
module.exports = Beverage