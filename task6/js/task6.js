var employer_sel = document.getElementById("employer");
var care = document.getElementById("care-worker");
function empSel() {
    document.getElementById("employer").style.color = "#55a8b3";
    employer_sel.style.background = "#fff";
    document.getElementById("care-worker").style.color = "#fff";
    care.style.background = "#55a8b3";
}
function careSel() {
    document.getElementById("employer").style.color = "#fff";
    employer_sel.style.background = "#55a8b3";
    document.getElementById("care-worker").style.color = "#55a8b3";
    care.style.background = "#fff";
}
function sel() {
    document.getElementById("sel-sub1").style.textAlign = "center";
}