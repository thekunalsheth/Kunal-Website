var i = 1;
var bgcolor = [
	"#1197a5",
	"#f6350a",
	"#388E3C",
	"#d32f2f",
	"#ab47bc"
	];

/*setInterval(changeBg,5000);*/
setInterval(changeAnimate,5000);

function changeAnimate(){
	document.getElementById("navBar").style.animationName = "none";
	document.getElementById("navBarResp").style.animationName = "none";
}

function changeBg(){
	var bg = document.getElementById("page1");
	if (i == 0){
		bg.style.background = bgcolor[i];
		i = 1;
	}
	else if (i == 1){
		bg.style.background = bgcolor[i];
		i = 2;
	}
	else if (i == 2){
		bg.style.background = bgcolor[i];
		i = 3;
	}
	else if (i == 3){
		bg.style.background = bgcolor[i];
		i = 4;
	}
	else if (i == 4){
		bg.style.background = bgcolor[i];
		i = 0;
	}
}

function displayMenuBar(){
	var info = document.getElementById("menuBar");
	info.style.display = "block";
}
function hideMenuBar(){
	var info = document.getElementById("menuBar");
	info.style.display = "none";
}

//animate Wave

/*var page1 = document.getElementById("page1"),
    waveHeight = 1,
    waveCount = Math.floor(window.innerheight/waveHeight),
    docFrag = document.createDocumentFragment();

for(var i = 0; i < waveCount; i++){
  var wave = document.getElementById("menuBar");
  docFrag.appendChild(wave);
  wave.style.left = i * waveWidth + "px";
  wave.style.webkitAnimationDelay = (i/100) + "s";
}

page.appendChild(docFrag);*/
