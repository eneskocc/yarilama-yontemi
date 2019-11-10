
function coz() {
    let denklem =document.getElementById("denklem");
    var aralik1 =document.getElementById("aralik1");
    var aralik2 =document.getElementById("aralik2");
    while (true) {
        var btn = document.createElement("DIV"); 
          
        btn.innerHTML = denklem.value;   
        var typ = document.createAttribute("class");
        typ.value = "d-flex bg-dark justify-content-center align-items-center text-center rounded-pill text-white pl-5 pr-5 pt-3 pb-3 ml-5 mr-5 mb-3";
        btn.attributes.setNamedItem(typ);               
        document.getElementById("a").appendChild(btn);
        break;
    }
    
    
}