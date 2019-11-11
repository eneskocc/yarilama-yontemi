
function coz() {
    let denklem =document.getElementById("denklem");
    var aralik1 =document.getElementById("aralik1");
    var aralik2 =document.getElementById("aralik2");
    var denklemm=String(denklem.value);
    var x1=Number(aralik1.value);
    var x2=Number(aralik2.value);
    var bir=hesapla(denklemm,x1);
    var iki=hesapla(denklemm,x2);
    var k=newKok(x1,x2);
    addDiv(bir,iki,k,x1,x2);
}


function addDiv(params1,params2,k,x1,x2) {
    var btn = document.createElement("DIV"); 
    btn.innerHTML = "f("+x1+")="+params1+"<br>"+"f("+x2+")="+params2+"<br>"+"yeni kökümüz="+k;   
    var typ = document.createAttribute("class");
    typ.value = "d-flex bg-info justify-content-center align-items-center text-center rounded-pill text-white mt-3";
    btn.attributes.setNamedItem(typ);               
    document.getElementById("a").appendChild(btn);
}

function hesapla(denklem,x) {
    var sonuc;
    sonuc=eval(denklem);
    return sonuc;
}

function newKok(x1,x2) {
    return (x1+x2)/2;
}