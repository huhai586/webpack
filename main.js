var hu=document.getElementById("hu");
hu.onclick=function(){
	console.log("clicked")
  require.ensure([], function(require) {
    var moment = require('./outjs');
    console.log(moment());
  },'huhai');

}