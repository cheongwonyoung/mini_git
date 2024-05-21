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
