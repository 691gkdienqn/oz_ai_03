// ============================================================
// 실습 1: 콘솔 계산기 
// 프로그램 동작 : 
// 1. 숫자 두 개를 변수로 선언한다.
// 2. 연산자를 문자열로 정한다. ("+", "-", "*", "/")
// 3. 연산자에 따라 계산 결과를 출력한다.
//  ⚠ 사용자로부터 입력은 직접 받지 않고, 변수로 선언한다.
// ============================================================

// 방법 1. if-else if 방식    : 조건이 범위 비교이거나 복합 조건일 때 적합

let a = 10;                                   // 변수 선언 
let b = 5;
let operator = "+";                          // <- "+", "-", "*", "/"

if (operator === "+") {                      // ☆ 안전하게 === 사용 (값과 타입 모두 비교 )
    console.log(a + b);
} else if (operator === "-") {
    console.log(a - b);
} else if (operator === "*") {
    console.log(a * b);
} else if (operator === "/") {
    if (b === 0) {                         // JS에서 0으로 나누면 error 아닌 Infinity가 나옴. 
        console.log("0으로 나눌 수 없습니다.");  // 프로그램이 멈추진 않지만 의미 없는 결과이므로 미리 막아주는 것이 좋다.
    } else {
        console.log(a / b);
    }
} else {
    console.log("지원하지 않는 연산자입니다.");    //  위 4가지 연산자에 해당하지 않을 때 실행되는 안전장치
}

// 방법 2. switch  → switch 는 내부적으로 === 를 사용해서 비교함          ** 오늘 자료 내용은 아님 

let a2 = 10;
let b2 = 0;
let operator2 = "/";                       // <- "+", "-", "*", "/"

switch (operator2) {
    case "+":                              // operator2 === "+" 와 동일한 의미 ! 
        console.log(a2 + b2);
        break;                            // ☆ break 꼭 !! 빼먹으면 아래 case까지 연달아 실행됨
    case "-":
        console.log(a2 - b2);
        break;
    case "*":
        console.log(a2 * b2);
        break;
    case "/":
        if (b2 === 0) {
            console.log("0으로 나눌 수 없습니다.");
        } else {
            console.log(a2 / b2);
        }
        break;
    default:                                // else 와 같은 역할 
        console.log("지원하지 않는 연산자입니다.");
}


// if-else if 는 언제 사용 ?    → 값의 크기, 범위, 여러 조건의 조합을 따질 때   (evaluates ranges, comparisons, or combined conditions)
// switch 는 언제 사용?    → 하나의 값이 정확히 일치하는 값을 여러 후보 중에서 찾을 때 (matches one value against a list of exact values)
// 위 문제에서는 switch 적합. 실무에서도 많이 사용. 