var express = require('express')
var app = express()
var router = express.Router()
let bodyParser = require('body-parser')
app.use('/api', bodyParser.json(), router);

// var books = [] //object
// var books = {} //array

var books = [{name:'Client',price:200 /*index=0*/},
			 {name:'Micro',price:350  /*index=1*/},]
var index = 2

router.route('/books')
	.get((req, res)=>{
		res.json(books)
	})
	.post((req, res)=>{
		var data = {}

		data.name = req.body.name
		data.price = req.body.price

		books.push(data)
		res.json(books)
	})
router.route('/books/:index')
	.get((req, res)=>{
		res.json(books[req.params.index])
	})
	.put((req, res)=>{index
		var id = req.params.
		books[id].name = req.body.name
		books[id].price = req.body.price
		res.json({
			message:"updated",
			books
		})
	})
	.delete((req, res)=>{
		delete books[req.params.index]
		res.json({
			message:"deleted"
		})
	})


app.listen(7777,  () => console.log("Server is running") );


//////////////////////// REACT //////////////////

var data = axios.get('localhost:7777/api/books')

add = () => {


}


<form action="'localhost:7777/api/books'" method="post">
<input type="text" name="name">
<input type="text" name="price">
<button type="submit">Add</button>
</form>

