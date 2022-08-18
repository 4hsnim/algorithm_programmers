// 출처 : https://school.programmers.co.kr/learn/courses/30/lessons/12933
// 정수 내림차순으로 배치하기
// 문제 설명
// 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

// 제한 조건
// n은 1이상 8000000000 이하인 자연수입니다.
// 입출력 예
// n	return
// 118372	873211

// 문자열을 배열로 바꿔주는 2가지 방법
// 1. Array.from(str)
// 2. str.split("")
// join은 배열을 문자열로 바꿔준다.
// 오름차순으로 바꾸기 arr.sort((a,b)=> a-b)
// 내림차순으로 바꾸기 arr.sort((a,b)=> b-a)
// sort()로하면 기본적으로 오름차순으로 정렬해준다
// reverse를 이용하면 내림차순으로 바꿀수 있다.

function solution(n) {
  let answer = 0;
  let str = String(n);
  let newArray = Array.from(str);
  let descendingArray = newArray.sort((a, b) => b - a);
  let descendingString = descendingArray.join("");
  answer = Number(descendingString);
  return answer;
}

// 다른 사람 풀이
function solution(n) {
  const newN = String(n);
  const newArr = newN.split("").sort().reverse().join("");

  return Number(newArr);
}
