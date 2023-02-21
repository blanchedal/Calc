// calc.js
function calc(){
    var number1 = Number(document.getElementById('number1').value);   // Number:입력받은 값을 숫자로 형변환
    var number2 = Number(document.getElementById('number2').value);
    var operator =document.getElementById('operator').value;          // 그냥 문자 그대로 쓴다

    if(operator === '+'){           // === : 값도 똑같고 type도 같다. == : 타입 같은데 값은 다름
        var result = number1+number2;
    }else if (operator === '-'){
        var result = number1-number2;
    }else if (operator === '*'){
        var result = number1*number2;
    }else if (operator === '/'){
        var result = number1/number2;
    }


    //document : 웹페이지 접근 시 사용
    var div = document.getElementById('result');       
    // getElementById = 메소드, html에 id에 접근하는 메소드. result라는 id의 정보를 가져오겠다
    var output = `${number1} ${operator} ${number2} = ${result}`; // ``  : 실행 기능을 가짐
    div.innerHTML=output; //<div id="result"></div> html에 넣어라

}