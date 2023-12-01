let result=document.getElementById("display");
let values="";
function calc(num){
    values+=num.value;
    console.log(values);
    displays();
}
function displays(){
    result.value=values;
}
function del(){
    values="";
    displays();
}
function clr(){
    values=values.slice(0,-1);
    displays();

}
function answer(){
    values=eval(values);
    displays()
}