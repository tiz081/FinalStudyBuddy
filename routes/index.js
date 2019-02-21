
/*
 * GET home page.
 */
// var data = require("../data.json");

exports.view = function(req, res){

	//  var name = req.params.username;
	// var password = req.params.password;
	// var newFriend =
	// 	{
	// 		"name": name,
	// 		"description": password,
	// 		"imageURL": "https://placebeard.it/400/400"
	// 	}
	// // console.log("Hello");
	// // console.log(name);
	// // console.log(password);
	// data.friends.push(newFriend);
	// var fs = require('fs');
	// fs.writeFileSync('../beta.json', JSON.stringify(newFriend));


  res.render('index');
};