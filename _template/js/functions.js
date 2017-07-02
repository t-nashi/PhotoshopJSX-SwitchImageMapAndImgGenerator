//-------------------------------------------------------------
// ドキュメント読み込み後に実行する処理
//-------------------------------------------------------------
window.onload = function(){
	SwitchImageMapAndImg(1);
}


//別jsを読み込む
document.write('<script src="js/include.js"></script>');

//クイッカブルマップから呼び出される関数。クリックしたマップによって呼び出される画像やマップ位置の取得・切り替えを行う
function SwitchImageMapAndImg(next){

	// 01. 画像の置き換え
	//----------------------------------------
	//htmlから対象要素を特定
	var e = document.getElementById("targetImage");
	//画像置き換え
	e.src = exportImages[next];


	// 02. Areaの置き換え
	//----------------------------------------
	//書き換え対象のhtml要素
	var testHtml = document.getElementById("targetMap");
	//「include.js」内にある関数で、クリックしたクリッカブルマップに合わせて別のマップセットを変数へ格納する
	setURL = GetLinkAreaSet(next);

	//htmlを書き換える
	testHtml.innerHTML = setURL;
}
