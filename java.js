var actfoto = document.getElementsByClassName("fotkalogo");
var opis = document.getElementsByClassName("opis");

function lightning() {
    for (let i = 0; i < actfoto.length; i++)
        actfoto[i].onmouseover = function opacity1() {
            for (let g = 0; g < actfoto.length; g++) {
                actfoto[g].style.opacity = "0.6";
                actfoto[g].style.border = "4px solid rgb(212, 195, 195)";
                opis[g].style.display = "none";
            }
        actfoto[i].style.opacity = "1";
        actfoto[i].style.border = "3px solid blue";
        opis[i].style.display = "block";
        }
};
function darkning() {
    for (let i = 0; i < actfoto.length; i++)
        actfoto[i].onmouseout = function opacity0()
        {
            actfoto[i].style.opacity = "0.6";
            actfoto[i].style.border = "4px solid rgb(212, 195, 195)";
            opis[i].style.display = "none";
        }
};




lightning();
darkning();


