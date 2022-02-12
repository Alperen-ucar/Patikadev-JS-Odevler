let name = prompt("Adınızı Giriniz: ");
let helloName = document.getElementById("helloName");
let d = new Date();
let n = d.getDay();
let day;

helloName.innerHTML = name;
switch(n){
case 0:
	day= "Pazar";
    break;
case 1:
	day= "Pazartesi";
    break;
case 2:
	day= "Salı";
    break;
case 3:
	day= "Çarşamba";
    break;
case 4:
	day= "Perşembe";
    break;
case 5:
	day= "Cuma";
    break;
case 6:
	day= "Cumartesi";
    break;
    
}


setInterval(function() {
    let d = new Date();
    let dt= document.getElementById("dt");
     var h = d.getHours();
     h = h < 10 ? "0" +h: h;
     var m = d.getMinutes();
     m = m < 10 ? "0" + m : m;
     var s = d.getSeconds();
     s = s < 10 ? "0" + s: s;
     dt.innerHTML = h + ":" + m + ":" + s + " " + day;
   },1000);

  