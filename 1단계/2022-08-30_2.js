// 출처 : https://school.programmers.co.kr/learn/courses/30/lessons/12910
// 나누어 떨어지는 숫자 배열
// 문제 설명
// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// 제한사항
// arr은 자연수를 담은 배열입니다.
// 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// divisor는 자연수입니다.
// array는 길이 1 이상인 배열입니다.
// 입출력 예
// arr	divisor	return
// [5, 9, 7, 10]	5	[5, 10]
// [2, 36, 1, 3]	1	[1, 2, 3, 36]
// [3,2,6]	10	[-1]
// 입출력 예 설명
// 입출력 예#1
// arr의 원소 중 5로 나누어 떨어지는 원소는 5와 10입니다. 따라서 [5, 10]을 리턴합니다.

// 입출력 예#2
// arr의 모든 원소는 1으로 나누어 떨어집니다. 원소를 오름차순으로 정렬해 [1, 2, 3, 36]을 리턴합니다.

// 입출력 예#3
// 3, 2, 6은 10으로 나누어 떨어지지 않습니다. 나누어 떨어지는 원소가 없으므로 [-1]을 리턴합니다.

// 첫번째로 푼 풀이
// 그냥 한줄로 풀어봄
// 역시 한줄로 쓰면 뿌듯하지만 가독성이 매우 떨어진다.
// 가독성 좋게 누가봐도 이해할 수 있는 코드가 좋은 코드이다.
// 빈배열을 확인하기 위해서는 []로 직접적인 체크가 아닌 length로 체크해야한다.

function solution(arr, divisor) {
  return arr.filter((value) => value % divisor === 0).length === 0
    ? [-1]
    : arr.filter((value) => value % divisor === 0).sort((a, b) => a - b);
}

// 가독성 좋게 코드 리팩토링
function solution(arr, divisor) {
  var answer = arr
    .filter((value) => value % divisor === 0)
    .sort((a, b) => a - b);
  return answer.length === 0 ? [-1] : answer;
}

// 옛날에 내가 푼 풀이
// 직접 함수를 만들었다..
// filter함수를 쓸 줄을 몰라서 push로만 해결했었음..
function solution(arr, divisor) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
    answer.sort(function (a, b) {
      return a - b;
    });
  }
  if (answer.length === 0) {
    answer = [-1];
  }

  return answer;
}
