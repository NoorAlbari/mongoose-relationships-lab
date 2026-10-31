// imports
const express = require("express") //importing express package
const app = express() // creates a express application
const dotenv = require("dotenv").config() //this allows me to use my .env values in this file
const mongoose = require("mongoose")
const methodOverride = require('method-override')
const morgan = require('morgan')

const User = require('./models/User')
const Listing = require('./models/Listing')
const Review = require('./models/Review')
const Category = require('./models/Category')




// Middleware
app.use(express.static('public')); //all static files are in the public folder
app.use(express.urlencoded({ extended: false })); // this will allow us to see the data being sent in the POST or PUT
app.use(methodOverride('_method'))
app.use(morgan('dev'))


async function conntectToDB() { //connection to the database
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to Database")
    }
    catch (error) {
        console.log("Error Occured", error)
    }
}


conntectToDB()





async function testRelationshipsPart1() {
    const newUser = await User.create({
        username: 'noor-albari',
        password: '1234',
    })
}

/////testRelationshipsPart1()

async function testRelationshipsPart2() {
    const newCategory = await Category.create({
        categoryName: 'Café',
    })
}

//////testRelationshipsPart2()




async function testRelationshipsPart3() {
    const newListing = await Listing.create({
        streetAddress:'Shop 1, Building, 265 Rd No 1704, Manama',
        city: 'Manama',
        price: 20,
        size:'10 People',
        owner:'6ae5a338c2e94d7f9f662131',
        category:'6ae5a62e5f495d530dc9dbcf',
    })
}

/////testRelationshipsPart3()


async function testRelationshipsPart4(){
    const allListing = await Listing.find().populate('owner')
    console.log(allListing)
}

testRelationshipsPart4()








// Routes go here
















app.listen(3000, () => {
    console.log("Listening on port " + 3000)
}) // Listen on port 3000
