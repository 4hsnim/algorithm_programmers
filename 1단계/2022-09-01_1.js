// 출처 : https://school.programmers.co.kr/learn/courses/30/lessons/12903

// 가운데 글자 가져오기
// 문제 설명
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.
// 입출력 예
// s	return
// "abcde"	"c"
// "qwer"	"we"

// Math.ceil - 올림
// Math.floor - 내림
// Math.round - 반올림
// string.substr(시작할 index, 길이)

// 내가 푼 풀이
function solution (s) {
    let answer = ""
    let half = Math.floor(s.length / 2)
    if(s.length % 2 === 0 ) {
        answer = s[half-1]+s[half]
    } else {
        answer = s[half]
    }
    return answer
}

// 내가 옛날에 푼 풀이
function solution(s) {
    var answer = '';
    let a = s.length
    if(a%2===0){
        answer = s.substr(a/2-1, 2)
    } else {
        answer = s.substr(Math.floor(a/2),1)
    }
    return answer;
}

// 다른 사람 풀이 중 좋았던 풀이
function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}