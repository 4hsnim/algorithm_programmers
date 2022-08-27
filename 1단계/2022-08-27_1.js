// 출처 : https://school.programmers.co.kr/learn/courses/30/lessons/12917
// 문자열 내림차순으로 배치하기
// 문제 설명
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

// 제한 사항
// str은 길이 1 이상인 문자열입니다.
// 입출력 예
// s	return
// "Zbcdefg"	"gfedcbZ"

// 내가 푼 풀이
// split으로 문자열을 배열로 만들기
// sort로 정렬(오름차순)
// sort는 배열의 숫자나 문자를 정렬 할 수 있다.
// array.sort((a,b)=> a-b)는 숫자를 오름차순으로 만들기
// array.sort((a,b)=> b-a)는 숫자를 내림차순으로 만들기
// array.sort()는 문자열을 오름차순으로 만들기
// reverse로 내림차순으로 만들기
// join으로 배열을 문자열로 다시 만들기

function solution(s) {
  var answer = "";
  let arr1 = s.split("");
  let descending = arr1.sort().reverse();
  let join = descending.join("");
  answer = join;
  return answer;
}

// 다른사람 풀이
function solution(s) {
  return s.split("").sort().reverse().join("");
}
