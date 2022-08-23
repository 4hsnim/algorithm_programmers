// 출처 : https://school.programmers.co.kr/learn/courses/30/lessons/12922
// 수박수박수박수박수박수?
// 문제 설명
// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

// 제한 조건
// n은 길이 10,000이하인 자연수입니다.
// 입출력 예
// n	return
// 3	"수박수"
// 4	"수박수박"

// 전에 풀었던 풀이
function solution(n) {
  var answer = "";
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      answer += "박";
    } else answer += "수";
  }
  return answer;
}

// 이번에 새로 푼 풀이
function solution(n) {
  var answer = "";
  let watermelon = "수박";
  if (n % 2 === 0) {
    answer = watermelon.repeat(n / 2);
  } else {
    answer = watermelon.repeat(Math.floor(n / 2)) + "수";
  }
  return answer;
}
