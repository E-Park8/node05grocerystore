// Grocery Store
// Create a lib folder for your constructors
// Create a constructor named product in its own file
// Give it properties for name, quantity, and price
// Give it a method called getName that returns the product name
// Give it a method called getQuantity that returns the product quantity
// Give it a method called getPrice that returns the product price
// Create a constructor named food that inherits from product in its own file
// Give it properties for expirationDate and foodGroup
// Give it a method called getExpirationDate that returns the food expiration date
// Give it a method called getFoodGroup that returns the food group
// Create a constructor named beverage that inherits from product in its own file
// Give it properties for fluidOZ and mainFlavor
// Give it a method called getFluidOz that returns the beverage fluid oz
// Give it a method called getMainFlavor that returns the beverage main flavor
// Create separate testing files for each constructor
// Write four tests for each constructor (edited) 

Create an app.js file in the root of your directory
Install inquirer as a dependency for your app
Make an array called products
Prompt the user for what they want to make (food, beverage, or general product)
Prompt the user for name, quantity, and price of the product
Based on which type of product they chose to make, prompt them for the extra information required to build a food or beverage
Once the user has finished building their product, push the new instance to the global products array
Prompt the user for whether they want to create a new product or to finish
If they wish to create a new product, send the user back to the original prompts
If they are finished, log the products array to the console