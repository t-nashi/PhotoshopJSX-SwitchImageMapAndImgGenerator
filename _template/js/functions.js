window.onload = function(){
	SwitchImageMapAndImg(1);
}
document.write('<script src="js/include.js"></script>');

function SwitchImageMapAndImg(next){
	var e = document.getElementById("targetImage");
	e.src = exportImages[next];

	var testHtml = document.getElementById("targetMap");
	setURL = GetLinkAreaSet(next);
	testHtml.innerHTML = setURL;
}