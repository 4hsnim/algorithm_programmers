// 출처 : https://school.programmers.co.kr/learn/courses/30/lessons/12901

// 2016년
// 문제 설명
// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

// 입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

// 제한 조건
// 2016년은 윤년입니다.
// 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)
// 입출력 예
// a	b	result
// 5	24	"TUE"

// new Date 생성자로 해당 시간을 나타내는 객체로 반환시켜줌
// 여기서 중요한 점은 객체여서 문자열로 바꿔주기 위해서는 객체를 문자열로 바꿔주는 메소드를 써야한다.
// object.toString()을 사용해야함.
// getDay로하면 해당 날짜의 요일을 반환시켜준다.

// 내가 푼 풀이
function solution (a,b) {
    var answer = ""
    const week = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    let test = new Date(2016, a-1, b).getDay()
    answer = week[test]
    return answer
}

// 다시 정리한 풀이
function solution (a,b) {
    var answer = ""
    let test = new Date(2016, a-1, b)
    answer = test.toString().slice(0,3).toUpperCase()
    return answer
}

// 예전에 풀었던 풀이
// 정말 짬뽕으로 풀었다.. 뭐 어떻게 푼거지,, 지금봐도 모르겠다 잘
function solution(a, b) {
    let answer = '';

    let stDate = new Date(2016,0,1)
    let endDate = new Date(2016,a-1,b)

    let btMs = endDate.getTime() - stDate.getTime()
    let btDay = btMs / (1000*60*60*24) +1

    if(btDay % 7 === 1) {
        answer = "FRI"
    } else if(btDay % 7 === 2) {
        answer = "SAT"
    } else if(btDay % 7 === 3) {
        answer = "SUN"
    } else if(btDay % 7 === 4) {
        answer = "MON"
    } else if(btDay % 7 === 5) {
        answer = "TUE"
    } else if(btDay % 7 === 6) {
        answer = "WED"
    } else if(btDay % 7 === 0) {
        answer = "THU"
    }
    
    return answer;
}