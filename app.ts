let mass: Array<number>;
var st = document.getElementById("current");
let dlina = document.createElement("span");


function sum():void {
    let b:any;
    var c = this.document.getElementById("current").value;
    dlina.innerHTML = c;
    b = c + "+";
    this.document.getElementById("current").value = b;
}

function delenie():void {
    let b:any;
    var c = this.document.getElementById("current").value;
    b = c + "÷";
    this.document.getElementById("current").value = b;
}

function umnojenie():void {
    let b:any;
    var c = this.document.getElementById("current").value;
    b = c + "*";
    this.document.getElementById("current").value = b;
}

function minus():void {
    let b:any;
    var c = this.document.getElementById("current").value;
    b = c + "-";
    this.document.getElementById("current").value = b;
}

function ravno():void {
    let str:string;
    let h:string = this.document.getElementById("last").value;
    let j:string = this.document.getElementById("middle").value;
    let g:string = this.document.getElementById("first").value;
    str = h;
    this.document.getElementById("middle").innerHTML = str;
    let b:string;
    var c = this.document.getElementById("current").value;
    let k:number;
    k = eval(c);
    b = c + " = " + k;
    let massiv: Array<string> = [h,j,g]
    let l:number = 0;
    for(l=0;l<3;l++){
        if(l==0){
            this.document.getElementById("middle").innerHTML = "";
            massiv[l] = b;
            this.document.getElementById("first").innerHTML = "";
        }else if(l==1){
            this.document.getElementById("middle").innerHTML = massiv[l-1];
            this.document.getElementById("first").innerHTML = "";
            massiv[l-1]=b;
        }else if(l==2){
            this.document.getElementById("first").innerHTML = massiv[l-2];
            this.document.getElementById("middle").innerHTML = massiv[l-1];
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