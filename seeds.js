const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose
	.connect("mongodb://localhost:27017/farmStand", {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log("MONGO CONNECTION OPEN!!!");
	})
	.catch((err) => {
		console.log("OH NO MONGO CONNECTION ERROR!!!");
		console.log(err);
	});

// const p = new Product({
// 	name: "Emerald Grapefruit",
// 	price: 1.6,
// 	category: "fruit"
// });

const seedProducts = [
	{
		name: "Mexican Watermelon",
		price: 1.0,
		category: "vegetable"
	},
	{
		name: "Himalayan app",
		price: 2.0,
		category: "fruit"
	},
	{
		name: "Arabian Dates",
		price: 5.69,
		category: "fruit"
	},
	{
		name: "Gruyere Cheese",
		price: 4.39,
		category: "diary"
	},
	{
		name: "Organic Celery",
		price: 1.5,
		category: "vegetable"
	},
	{
		name: "Whole Milk",
		price: 2.69,
		category: "diary"
	}
];

Product.insertMany(seedProducts)
	.then((res) => {
		console.log("SEEDING DONE WORKED");
	})
	.catch((e) => {
		console.log(e);
	});

// p.save()
// 	.then((p) => {
// 		console.log(p);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});
