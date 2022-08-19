// 출처 : https://school.programmers.co.kr/learn/courses/30/lessons/12932
// 자연수 뒤집어 배열로 만들기
// 문제 설명
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 제한 조건
// n은 10,000,000,000이하인 자연수입니다.
// 입출력 예
// n	return
// 12345	[5,4,3,2,1]

// 데이터 타입이 Number이면 length 속성을 쓸 수 없다.
// 데이터 타입이 String이면 length 속성을 쓸 수 있다.
// String의 경우 length뿐만 아니라 배열처럼 index값을 저장하고 있어서 index위치로 해당 값만 뽑아낼 수 있다.

function solution(n) {
  var answer = [];
  const str = String(n);
  for (let i = 0; i < str.length; i++) {
    answer.push(Number(str[i]));
  }

  return answer.reverse();
}

// 처음 시도했던 풀이
// 이럴경우 return값이 ["5","4","3","2","1"]처럼 ""이 붙어서 나와서 틀림

function solution(n) {
  var answer = [];
  const str = String(n);
  const arr1 = str.split("");
  // const arr1 = Array.from(arr1)도 가능하다.
  const reverse = arr1.reverse();
  answer = reverse;

  return answer;
}

// 다른 사람 풀이
// 결국에 내가 처음시도했던 풀이랑 똑같음.
// 숫자+""은 String으로 바뀜.
// String * 1을 하면 숫자로 바뀌게 되는 것처럼 똑같음.
// map으로 각각의 배열의 원소를 숫자로 바꿔줬으면 됐다.

function solution(n) {
  return (n + "")
    .split("")
    .reverse()
    .map((v) => parseInt(v));
}

// 좀 더 가독성 좋게 바꿔본다면

function solution(n) {
  let answer = [];
  const str = String(n);
  const arr1 = str.split("");
  const arr1Numbering = arr1.map((value) => Number(value));
  const reverse = arr1Numbering.reverse();
  answer = reverse;
  return answer;
}
