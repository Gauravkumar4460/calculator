let calculation='';
let isEval = false;
function printToresult() {
  let myres = document.getElementById("result-box");
  myres.innerHTML = calculation;
}
function removeLastChar() {
  calculation = calculation + '';
  if(calculation.length > 0)
  if(calculation[(calculation.length)-1]==' '){
  calculation = calculation.slice(0,-3);
  }
  else{
    calculation = calculation.slice(0,-1);
  }
  let element = document.getElementById("result-box");
  element.innerHTML = calculation;
}
function makeSquare() {
  calculation = eval(calculation);
  if(typeof calculation != undefined){
    calculation = calculation * calculation;
  }
  calculation = calculation + '';
  let myele = document.getElementById("result-box");
  myele.innerHTML = calculation;
}
function makeReciprocal() {
     calculation = eval(calculation);
     if(typeof calculation != undefined){
      calculation = 1/calculation;
     }
     calculation = calculation + '';
  let myele = document.getElementById("result-box");
  myele.innerHTML = calculation;
}
function findMod() {
  calculation = eval(calculation);
  if(typeof calculation != undefined){
    if(calculation < 0){
      calculation = -1 * calculation;
    }
  }
  calculation = calculation + '';
  let myele = document.getElementById("result-box");
  myele.innerHTML = calculation;
}
function findRoot() {
    calculation = eval(calculation);
    let myele = document.getElementById("result-box");
    calculation = Math.sqrt(calculation);
    myele.innerHTML = calculation.toString();
}
function findFact() {
    calculation = eval(calculation);
    let num = calculation;
    let i = calculation;
    while(i>1){
        num = num * (i-1);
        i--;
    }
    calculation = num;
    let myele = document.getElementById("result-box");
    myele.innerHTML = calculation.toString();
}
function findPowOf10() {
    calculation = eval(calculation);
    let pow = Math.pow(10,calculation);
    calculation = pow.toString();
    let myele = document.getElementById("result-box");
    myele.innerHTML = calculation;
}
function findLog() {
    calculation = eval(calculation);
    let log = Math.log(calculation) / Math.log(10);
    calculation = log.toString();
    let myele = document.getElementById("result-box");
    myele.innerHTML = calculation;
}
function findLn() {
    calculation = eval(calculation);
    let ln = Math.log(calculation);
    calculation = ln.toString();
    let myele = document.getElementById("result-box");
    myele.innerHTML = calculation;
}
function findExp() {
    part = calculation.split('e+');
    if(part != calculation){
        let num1 = part[0];
        let num2 = part[1];
        calculation = (part[0] * Math.pow(10,part[1])).toString();
    }
}
function changeSign() {
    calculation = eval(calculation);
    calculation = -1 * calculation;
    calculation.toString();
    let myele = document.getElementById("result-box");
    myele.innerHTML = calculation;
}