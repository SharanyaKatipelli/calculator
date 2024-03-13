function ac(){
    document.getElementById("res").value="";
}
function show(input){
    document.getElementById("res").value+=input;
}
function calculate(){
    var output=eval(document.getElementById("res").value);
    document.getElementById("res").value=output;
}
function del(){
    document.getElementById("res").value=document.getElementById("res").value.slice(0,-1);

}