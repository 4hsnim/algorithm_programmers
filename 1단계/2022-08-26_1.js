// 출처 : https://school.programmers.co.kr/learn/courses/30/lessons/12918
// 문자열 다루기 기본
// 문제 설명
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.
// 입출력 예
// s	return
// "a234"	false
// "1234"	true

// 내가 처음 푼 풀이(오답)
// 단 한개의 케이스에서만 통과하지 못했음
// 그 이유는 1e345는 숫자취급을 받을 수 있기 때문이다.(보통의 사람은 문자열로 생각하겠지만)
// e는 자연로그 취급을 받을 수 있음.
// 따라서 정확히 테스트하기 위해서는 정규식으로 하는 것이 가장 좋은 방법이다.

function solution(s) {
    var answer = true
    if((s.length === 4 || s.length === 6) && !isNaN(s)) {
        answer = true
    } else {
        answer = false
    }
    return answer
}


// 다른 사람 풀이 정규식
// /^[0-9]*$/는 숫자만 있는가? 테스트를 할때 가장 많이 쓰는 정규표현식임.
// 해당 정규식의 의미는 "0-9까지의 숫자로 구성되어있는가?" 이다.
function solution(s) {
    var answer = true;
    return (s.length === 4 || s.length === 6) && /^[0-9]*$/.test(s)
}