// 출처 : https://school.programmers.co.kr/learn/courses/30/lessons/42576
// 완주하지 못한 선수
// 문제 설명
// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
// completion의 길이는 participant의 길이보다 1 작습니다.
// 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
// 참가자 중에는 동명이인이 있을 수 있습니다.
// 입출력 예
// participant	completion	return
// ["leo", "kiki", "eden"]	["eden", "kiki"]	"leo"
// ["marina", "josipa", "nikola", "vinko", "filipa"]	["josipa", "filipa", "marina", "nikola"]	"vinko"
// ["mislav", "stanko", "mislav", "ana"]	["stanko", "ana", "mislav"]	"mislav"
// 입출력 예 설명
// 예제 #1
// "leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

// 예제 #2
// "vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

// 예제 #3
// "mislav"는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.

// 내가 푼 풀이
function solution(part, com) {
  var answer = "";
  let sortPart = part.sort();
  let sortCom = com.sort();
  for (let i = 0; i < part.length; i++) {
    if (sortPart[i] !== sortCom[i]) {
      answer = sortPart[i];
      // 동명이인이 나올 경우 첫번째로 값이 같지 않는 사람이 완주하지 못한사람이므로 break를 이용하여 반복문 종료
      break;
    }
  }
  return answer;
}

// 내가 전에 풀었던 풀이
// 효율성 테스트 실패
function solution(participant, completion) {
  let answer = "";
  let add = participant.concat(completion).sort();
  for (let i = 0; i < add.length; i++) {
    let count = add.filter((element) => add[i] === element).length;
    if (count % 2 !== 0) {
      answer = add[i];
    }
  }

  return answer;
}

// 이번에 풀었는데 틀렸던 풀이
function solution(participant, completion) {
  let answer = "";
  for (let i = 0; i < participant.length; i++) {
    if (completion.indexOf(participant[i]) === -1) {
      answer = participant[i];
    }
    if (
      participant.filter((value) => value === completion[i]).length === 2 &&
      completion.filter((value) => value === completion[i]).length === 1
    ) {
      answer = completion[i];
    }
  }
  return answer;
}
