const fs = require("fs");

fs.unlink("test/text.txt", (err)=> {

	if(err){
		throw err;
	}
	else{
		console.log("archivo borrado");
	}
})

