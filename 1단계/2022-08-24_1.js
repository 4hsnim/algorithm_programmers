// 출처 : https://school.programmers.co.kr/learn/courses/30/lessons/12921
// 소수 찾기
// 문제 설명
// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)

// 제한 조건
// n은 2이상 1000000이하의 자연수입니다.
// 입출력 예
// n	result
// 10	4
// 5	3
// 입출력 예 설명
// 입출력 예 #1
// 1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환

// 입출력 예 #2
// 1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환

// 정확성은 통과했지만 시간이 엄청오래걸림... 시간초과로 실패함
function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    let checkPrimeNum = 0;
    // 각각의 i요소에 나누어떨어지는 숫자 개수 찾기
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        checkPrimeNum += 1;
      }
    }
    // 나누어 떨어지는 숫자 2개인 숫자 확인(소수개수)
    if (checkPrimeNum === 2) {
      answer += 1;
      checkPrimeNum = 0;
    }
  }

  return answer;
}

// 다른사람 풀이
// 에라토스테네스의 채로 소수찾기
function solution(n) {
  let answer = 0;
  // Array(숫자).fill(어떤 값)은 Array에 숫자만큼 어떤 값을 각 넣으라는 의미이다.
  // ex) Array(4).fill("a") = ["a","a","a","a"] 
  const arr = new Array(n + 1).fill(true);

  for (let i = 2; i <= n; ++i) {
    // 이미 소수가 아닌 인덱스는 건너뛴다.
    if (arr[i] === false) {
      continue;
    }
    // 배수는 소수가 아니라 0으로 설정
    for (let k = i * 2; k <= n; k += i) {
      arr[k] = false;
    }
  }
  // 소수의 갯수를 구한다.
  for (let i = 2; i <= n; ++i) {
    if (arr[i] === true) {
      answer++;
    }
  }
  return answer;
}

// 풀이 보고 다시 나혼자 푼 풀이
// 효율성 테스트를 통과했지만 속도가 꽤나 느림
// 반복문에서 continue or break를 활용하면 효율성을 높일 수 있음.
function solution(n) {
  var answer = 0;
  const arr = new Array(n+1).fill(true)
  for (let i = 2; i <= n; i++) {
      for (let k = i * 2; k <= n; k += i) {
          arr[k] = false
      }
      
      if (arr[i] === true) {
          answer ++
      }
  }
  return answer;
}

// continue 추가
// continue를 for문 가장 앞에 써야 효율성을 높일 수 있음
// continue를 뒤에 쓰니까 효율성이 많이 낮아지더라..!
function solution(n) {
  var answer = 0
  const arr = new Array(n+1).fill(true)
  for (let i = 2; i <= n; i++) {
      if(arr[i] === false)
          continue
      for(let k = i * 2; k <= n; k += i) {
          arr[k] = false
      }
      if (arr[i] === true) {
          answer ++
      }
  }
  return answer
}

