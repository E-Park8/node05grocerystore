const Beverage = require('../lib/beverages.js')

test('New beverage should be instance of constructor', () => {
    const beverage = new Beverage('fruit punch', 20, 3, 12, 'fruit')
    expect(beverage).toBeInstanceOf(Beverage)
})

test('getFluidOz() should return fluid oz', () =>{
    const beverage = new Beverage('coffee', 100, 2, 8, 'coffee')
    expect(beverage.getFluidOz()).toBe(8)
} )