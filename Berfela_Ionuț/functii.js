var i;
var slides=1;
var active = 0;

function changeImageLeft()
{
	var img = document.getElementsByClassName("images");
	var cercPlin = document.getElementsByClassName("cercPlin");
	var cercGol = document.getElementsByClassName("cercGol");
	var k = img[0].src.slice(0,-4);
	var j = k[k.length-1];
	if(j==4)
	{//1
		for(i=0; i< img.length; i++) {
			img[i].src = "resurse"+(1+i)+".jpg";
			if(i==0)
			{
			cercPlin[i].style.opacity = "1";
			cercGol[i].style.opacity = "0";
			} else {
			cercPlin[i].style.opacity = "0";
			cercGol[i].style.opacity = "1";
			}
		}
	}
	if(j==7)
	{//2
		for(i=0; i< img.length; i++) {
			img[i].src = "resurse"+(4+i)+".jpg";
			if(i==1)
			{
			cercPlin[i].style.opacity = "1";
			cercGol[i].style.opacity = "0";
			} else {
			cercPlin[i].style.opacity = "0";
			cercGol[i].style.opacity = "1";
			}
		}
	}
	if(j==1)
	{//3
		for(i=0; i< img.length; i++) {
			img[i].src = "resurse"+(7+i)+".jpg";
			if(i==2)
			{
			cercPlin[i].style.opacity = "1";
			cercGol[i].style.opacity = "0";
			} else {
			cercPlin[i].style.opacity = "0";
			cercGol[i].style.opacity = "1";
			}
		}
	}
	return false;
}
function changeImageRight()
{
	var img = document.getElementsByClassName("images");
	var cercPlin = document.getElementsByClassName("cercPlin");
	var cercGol = document.getElementsByClassName("cercGol");
	var k = img[0].src.slice(0,-4);
	var j = k[k.length-1];
	if(j==7)
	{//1
		for(i=0; i< img.length; i++) {
			img[i].src = "resurse"+(1+i)+".jpg";
			if(i==0)
			{
			cercPlin[i].style.opacity = "1";
			cercGol[i].style.opacity = "0";
			} else {
			cercPlin[i].style.opacity = "0";
			cercGol[i].style.opacity = "1";
			}
		}
	}
	if(j==1)
	{//2
		for(i=0; i< img.length; i++) {
			img[i].src = "resurse"+(4+i)+".jpg";
			if(i==1)
			{
			cercPlin[i].style.opacity = "1";
			cercGol[i].style.opacity = "0";
			} else {
			cercPlin[i].style.opacity = "0";
			cercGol[i].style.opacity = "1";
			}
		}
	}
	if(j==4)
	{//3
		for(i=0; i< img.length; i++) {
			img[i].src = "resurse"+(7+i)+".jpg";
			if(i==2)
			{
			cercPlin[i].style.opacity = "1";
			cercGol[i].style.opacity = "0";
			} else {
			cercPlin[i].style.opacity = "0";
			cercGol[i].style.opacity = "1";
			}
		}
	}
	return false;
}
function afisareCerc(cerc){
	var img = document.getElementsByClassName("images")
	var cercPlin = document.getElementsByClassName("cercPlin");
	var cercGol = document.getElementsByClassName("cercGol");
	if(cerc=='cerc1')
	{//1
		for(i=0; i< img.length; i++) {
			img[i].src = "resurse"+(1+i)+".jpg";
			if(i==0)
			{
			cercPlin[i].style.opacity = "1";
			cercGol[i].style.opacity = "0";
			} else {
			cercPlin[i].style.opacity = "0";
			cercGol[i].style.opacity = "1";
			}
		}
		
	}
	if(cerc=='cerc2')
	{//2
		for(i=0; i< img.length; i++) {
			img[i].src = "resurse"+(4+i)+".jpg";
			if(i==1)
			{
			cercPlin[i].style.opacity = "1";
			cercGol[i].style.opacity = "0";
			} else {
			cercPlin[i].style.opacity = "0";
			cercGol[i].style.opacity = "1";
			}
		}
	}
	if(cerc=='cerc3')
	{//3
		for(i=0; i< img.length; i++) {
			img[i].src = "resurse"+(7+i)+".jpg";
			if(i==2)
			{
			cercPlin[i].style.opacity = "1";
			cercGol[i].style.opacity = "0";
			} else {
			cercPlin[i].style.opacity = "0";
			cercGol[i].style.opacity = "1";
			}
		}
	}
	
}
function Activate()
{
	active += 1;
	SlideResurse();
}
function SlideResurse() {
	var img = document.getElementsByClassName("images");
	var cercPlin = document.getElementsByClassName("cercPlin");
	var cercGol = document.getElementsByClassName("cercGol");
	var k = img[0].src.slice(0,-4);
	var j = k[k.length-1];
	if(active==1)
	{
		if(slides==1) { 
			for(i=0; i< img.length; i++) {
			if(i==0)
			{
			cercPlin[i].style.opacity = "1";
			cercGol[i].style.opacity = "0";
			} else {
			cercPlin[i].style.opacity = "0";
			cercGol[i].style.opacity = "1";
				}
			}
		}
		if(slides==4) {
			for(i=0; i< img.length; i++) {
			if(i==1)
			{
			cercPlin[i].style.opacity = "1";
			cercGol[i].style.opacity = "0";
			} else {
			cercPlin[i].style.opacity = "0";
			cercGol[i].style.opacity = "1";
				}
			}
		}
		if(slides==7) {
			for(i=0; i< img.length; i++) {
			if(i==2)
			{
			cercPlin[i].style.opacity = "1";
			cercGol[i].style.opacity = "0";
			} else {
			cercPlin[i].style.opacity = "0";
			cercGol[i].style.opacity = "1";
				}
			}	
		}		
		for(i=0; i< img.length; i++) {
			img[i].src ="resurse"+(+slides + +i)+".jpg";
			var j = k[k.length-1];
			console.log(img[i].src,"  ,  j=", j, "  ,   slides=", slides,"  ,  active=", active);//verificare slideshow consola
		}
		setTimeout(SlideResurse, 3000); //se schimba imaginea la fiecare 3 secunde
		slides+=3;
		if(slides > img.length*3) {slides = 1;}
	}
	if(active>=2)
	{
		active = 0;
		console.log("active=", active);
	}
} 	