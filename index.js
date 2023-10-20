
function crearNum(){

var Svalor = document.getElementById("value").value;
var resultTxt = document.getElementById("result");

    const sym = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
  
    let result = 0;
  
    for (let i = 0; i < Svalor.length; i++) {
        const cur = sym[Svalor[i]];
        const next = sym[Svalor[i + 1]];
  
        if (cur < next) {
            result += next - cur;
            i++;
        } else {
            result += cur;
        }
    }
  console.log(result)
    resultTxt.value =   result;
}