var mass;
var st = document.getElementById("current");
var dlina = document.createElement("span");
function sum() {
    var b;
    var c = this.document.getElementById("current").value;
    dlina.innerHTML = c;
    b = c + "+";
    this.document.getElementById("current").value = b;
}
function delenie() {
    var b;
    var c = this.document.getElementById("current").value;
    b = c + "÷";
    this.document.getElementById("current").value = b;
}
function umnojenie() {
    var b;
    var c = this.document.getElementById("current").value;
    b = c + "*";
    this.document.getElementById("current").value = b;
}
function minus() {
    var b;
    var c = this.document.getElementById("current").value;
    b = c + "-";
    this.document.getElementById("current").value = b;
}
function ravno() {
    var str;
    var h = this.document.getElementById("last").value;
    var j = this.document.getElementById("middle").value;
    var g = this.document.getElementById("first").value;
    str = h;
    this.document.getElementById("middle").innerHTML = str;
    var b;
    var c = this.document.getElementById("current").value;
    var k;
    k = eval(c);
    b = c + " = " + k;
    var massiv = [h, j, g];
    var l = 0;
    for (l = 0; l < 3; l++) {
        if (l == 0) {
            this.document.getElementById("middle").innerHTML = "";
            massiv[l] = b;
            this.document.getElementById("first").innerHTML = "";
        }
        else if (l == 1) {
            this.document.getElementById("middle").innerHTML = massiv[l - 1];
            this.document.getElementById("first").innerHTML = "";
            massiv[l - 1] = b;
        }
        else if (l == 2) {
            this.document.getElementById("first").innerHTML = massiv[l - 2];
            this.document.getElementById("middle").innerHTML = massiv[l - 1];
            //this.document.getElementById("last").innerHTML = "";
            massiv[l] = b;
        }
    }
    this.document.getElementById("last").innerHTML = b;
    // if(this.document.getElementById("last").value!="" &&this.document.getElementById("middle").value!=""){
    //     document.getElementById("first").innerHTML = this.document.getElementById("middle").value;
    // }
    this.document.getElementById("current").value = "";
}
