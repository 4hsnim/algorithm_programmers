// https://school.programmers.co.kr/learn/courses/30/lessons/12926
// 시저 암호
// 문제 설명
// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// 제한 조건
// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// s의 길이는 8000이하입니다.
// n은 1 이상, 25이하인 자연수입니다.
// 입출력 예
// s	n	result
// "AB"	1	"BC"
// "z"	1	"a"
// "a B z"	4	"e F d"

// 풀이실패.... ㅠㅠ
function solution(s, n) {
  var answer = "";
  let lowerStr = "";
  let upperStr = "";
  let arr1 = s.split("");

  for (let i = 97; i <= 122; i++) {
    lowerStr += String.fromCharCode(i);
  }
  let arrLower = lowerStr.split("");

  for (let j = 65; j <= 90; j++) {
    upperStr += String.fromCharCode(j);
  }
  let arrUpper = upperStr.split("");

  arr1.map((value) => {
    let arrLowerIndex = arrLower.indexOf(value);
    let arrUpperIndex = arrUpper.indexOf(value);
    if (value === " ") {
      return " ";
    }
    if (value === value.toUpperCase() && arrUpperIndex + n > 25) {
      return arrUpper[arrUpperIndex + n - 26];
    } else if (value === value.toUpperCase()) {
      return arrUpper[arrUpperIndex + n];
    }
    if (value === value.toLowerCase() && arrLowerIndex + n > 25) {
      return arrLower[arrLowerIndex + n - 26];
    } else if (value === value.toLowerCase()) {
      return arrLower[arrLowerIndex + n];
    }
  });
  let join = arr1.join();
  return join;
}

// 다른사람 풀이
function solution(s, n) {
  return s
    .split("")
    .map((el) => {
      if (el == " ") {
        return el;
      }
      const tmp = el.charCodeAt();
      return el.toUpperCase().charCodeAt() + n > 90
        ? String.fromCharCode(tmp + n - 26)
        : String.fromCharCode(tmp + n);
    })
    .join("");
}
