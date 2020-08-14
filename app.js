const inquirer = require('inquirer')
const Product = require('./lib/product.js')
const Food = require('./lib/food.js')
const Beverage = require('./lib/beverages.js')
const { prompt } = require('inquirer')
let products = []

// let questions = [
//     {
//         type: 'list',
//         name: 'category',
//         message: 'Choose One',
//         choices: ['Product', 'Food', 'Beverage']
//     },
//     {
//         type: 'input',
//         name: 'name',
//         message: 'What is the name of the product'
//     },
//     {
//         type: 'input',
//         name: 'quantity',
//         message: 'What is the quantity of the product'
//     },
//     {
//         type: 'input',
//         name: 'price',
//         message: 'What is the price of the product'
//     }
// ]
// function newProduct(){
// inquirer    
//     .prompt(
//         questions
//     )
//     .then(answer => {
//         console.log(answer.category)
//         switch (answer.category) {
//             case 'Product':
//                 let product = new Product(answer.name, answer.quantity, answer.price)
//                 products.push(product)
//                 break
//             case 'Food':
//                 let product = new Product(answer.name, answer.quantity, answer.price)
//                 products.push(product)
//                 break
//             case 'Beverage':
//                 break
//         }
//     })
//     .catch(err => {console.log(err)
//     })
// }




const foodProduct = answer => {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'exp',
            message: 'When does it expire'
        },
        {
            type: 'input',
            name: 'group',
            message: 'What food group?'
        }
    ])
    .then (({exp, group}) => {
        products.push(new Food(answer.name, answer.quantity, answer.price, exp, group))
        subMenu()
    })
    .catch(err => console.log(err))
}

const beverageProduct = answer => {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'oz',
            message: 'fluid oz'
        },
        {
            type: 'input',
            name: 'flavor',
            message: 'What flavor?'
        }
    ])
    .then (({oz, flavor}) => {
        products.push(new Beverage(answer.name, answer.quantity, answer.price, oz, flavor))
        subMenu()
    })
    .catch(err => console.log(err))
}

const subMenu = () => {
    inquirer
    .prompt({
        type: 'list',
        name: 'action',
        choices: ['Make another product', 'Finish'],
        message: 'Make your choice'
    })
    .then (({action}) => {
        switch (action) {
            case 'Make another product':
                mainMenu()
                break
                case 'Finish':
                    console.log(products)
                    break
        }
    })
    .catch(err => console.log(err))
}

const mainMenu = () => {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'category',
            choices: ['Product', 'Food', 'Beverage'],
            message: 'Select'
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the product'
        },
        {
            type: 'input',
            name: 'quantity',
            message: 'What is the quantity of the product'
        },
        {
            type: 'input',
            name: 'price',
            message: 'What is the price of the product'
        }
    ])
    .then(answer => {
                switch (answer.category) {
            case 'Product':
                products.push(new Product(answer.name, answer.quantity, answer.price))
                subMenu()
                break
            case 'Food':
                foodProduct(answer)
                break
            case 'Beverage':
                beverageProduct(answer)
                break
    } 
})
    .catch(err => console.log(err))
}
mainMenu()