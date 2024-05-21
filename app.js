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
        document.getElementById("result").value = result;
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
        last !== "=" &&
        Number.isNaN(las)
    ) {
        alert("오류: +, -, *, = 이외의 문자가 포함되어 있습니다.");
        // 입력값 초기화 또는 다른 처리 가능
        document.getElementById("input").value = "";
    }
}