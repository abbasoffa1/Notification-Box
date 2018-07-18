var esasButton=document.querySelector(".yenidiv1");
function Yarat(){
    var yeniDiv=document.createElement("DIV");
    esasButton.appendChild(yeniDiv);
    yeniDiv.setAttribute("class","forma");
    var basligDiv=document.createElement("h4");
    var ilkyazi=document.createTextNode("Notification Title");
    basligDiv.appendChild(ilkyazi);
    yeniDiv.appendChild(basligDiv);
    var asagiYazi=document.createElement("P");
    var ikinciYazi=document.createTextNode("I will never close automatically. I will be close automatically. I will never close automatically.");
    asagiYazi.appendChild(ikinciYazi);
    yeniDiv.appendChild(asagiYazi);
    var silenDiv=document.createElement("BUTTON");
    var silenDivYazi=document.createTextNode("X");
    silenDiv.appendChild(silenDivYazi);
    silenDiv.setAttribute("class","forma2");
    silenDiv.addEventListener("click",function(){
        var sil = document.querySelector(".yenidiv1");
        sil.removeChild(yeniDiv)
    });
    yeniDiv.appendChild(silenDiv);
}
