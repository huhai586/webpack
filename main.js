var a=require("./style.css")
// a.use()
function huhai(){


	console.log("test")
}

setTimeout(function(){
	a.ref()
},2000)


setTimeout(function(){
	a.unref()
},4000)