function calculate(expression) {
  // 우선순위를 고려하여 연산자에 가중치 부여
  const precedence = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
  };

  // 중위 표기법 수식을 후위 표기법으로 변환하는 함수
  function infixToPostfix(expression) {
    const stack = [];
    let result = "";

    for (let i = 0; i < expression.length; i++) {
      const token = expression[i];

      // 공백은 무시
      if (token === " ") {
        continue;
      }

      // 피연산자인 경우
      if (!isNaN(parseFloat(token))) {
        // 다음 토큰이 숫자인지 확인
        let num = token;
        while (
          i + 1 < expression.length &&
          !isNaN(parseFloat(expression[i + 1]))
        ) {
          num += expression[i + 1];
          i++;
        }
        result += num + " ";
      }
      // 연산자인 경우
      else {
        while (
          stack.length > 0 &&
          precedence[stack[stack.length - 1]] >= precedence[token]
        ) {
          result += stack.pop() + " ";
        }
        stack.push(token);
      }
    }

    // 스택에 남은 연산자들을 후위 표기법으로 추가
    while (stack.length > 0) {
      result += stack.pop() + " ";
    }

    return result.trim();
  }

  // 후위 표기법으로 표현된 수식을 계산하는 함수
  function evaluatePostfix(postfixExpression) {
    const stack = [];

    // 후위 표기법을 공백을 기준으로 나누어 배열로 변환
    const tokens = postfixExpression.split(" ");

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      // 피연산자인 경우 스택에 추가
      if (!isNaN(parseFloat(token))) {
        stack.push(parseFloat(token));
      }
      // 연산자인 경우 스택에서 피연산자를 꺼내서 연산 후 결과를 스택에 추가
      else {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        let result;

        switch (token) {
          case "+":
            result = operand1 + operand2;
            break;
          case "-":
            result = operand1 - operand2;
            break;
          case "*":
            result = operand1 * operand2;
            break;
          case "/":
            result = operand1 / operand2;
            break;
        }

        stack.push(result);
      }
    }

    // 마지막에 스택에 남아있는 값이 최종 결과
    return stack.pop();
  }

  // 주어진 수식을 후위 표기법으로 변환
  const postfixExpression = infixToPostfix(expression);

  // 후위 표기법으로 변환된 수식을 계산하여 결과 반환
  return evaluatePostfix(postfixExpression);
}
//  submit클릭시
function submit() {
  let input = document.getElementById("input").value;
  // alert(input);
  var first = getFirstCharacter(input);
  first = parseInt(first);
  if (Number.isNaN(first)) {
    alert("입력이 잘못되었습니다. 다시 확인해주세요.");
    return false;
  }
  var last = getLastCharacter(input);
  last = parseInt(last);
  if (Number.isNaN(last)) {
    alert("입력이 잘못되었습니다. 다시 확인해주세요.");
    return false;
  } else {
    let result = calculate(input);
<<<<<<< HEAD
    document.getElementById("result").value = parseFloat(result).toFixed(2);
=======
    document.getElementById("result").value = result;
>>>>>>> dev
    alert("정상적으로 입력되었습니다.");
  }
}
// 입력문 첫번째 글자 리턴
function getFirstCharacter(inputValue) {
  if (typeof inputValue === "string" || Array.isArray(inputValue)) {
    return inputValue[0];
  } else {
    // 배열이 아니면 문자열로 간주하여 마지막 문자 반환
    return inputValue.toString()[0];
  }
}
// 입력문 마지막 글자 리턴
function getLastCharacter(inputValue) {
  if (typeof inputValue === "string" || Array.isArray(inputValue)) {
    return inputValue[inputValue.length - 1];
  } else {
    // 배열이 아니면 문자열로 간주하여 마지막 문자 반환
    return inputValue.toString().slice(-1);
  }
}
// 숫자확인
function isNumber(inputValue) {
  return typeof inputValue == "number" && !isNaN(inputValue);
}
function reset() {
  if (confirm("초기화하시겠습니까?")) {
    document.getElementById("input").value = "";
    document.getElementById("result").value = "";
  } else {
    return false;
  }
}
function input() {
  let input = document.getElementById("input").value;
  var last = getLastCharacter(input);
  las = parseInt(last);
  if (
    last !== "+" &&
    last !== "-" &&
    last !== "*" &&
    last !== "/" &&
    Number.isNaN(las)
  ) {
    alert("오류: +, -, *, / 이외의 문자가 포함되어 있습니다.");
    // 입력값 초기화 또는 다른 처리 가능
    document.getElementById("input").value = "";
  }
}
