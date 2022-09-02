// 출처 : https://school.programmers.co.kr/learn/courses/30/lessons/68644
// 두 개 뽑아서 더하기
// 문제 설명
// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// numbers의 길이는 2 이상 100 이하입니다.
// numbers의 모든 수는 0 이상 100 이하입니다.
// 입출력 예
// numbers	result
// [2,1,3,4,1]	[2,3,4,5,6,7]
// [5,0,2,7]	[2,5,7,9,12]
// 입출력 예 설명
// 입출력 예 #1

// 2 = 1 + 1 입니다. (1이 numbers에 두 개 있습니다.)
// 3 = 2 + 1 입니다.
// 4 = 1 + 3 입니다.
// 5 = 1 + 4 = 2 + 3 입니다.
// 6 = 2 + 4 입니다.
// 7 = 3 + 4 입니다.
// 따라서 [2,3,4,5,6,7] 을 return 해야 합니다.
// 입출력 예 #2

// 2 = 0 + 2 입니다.
// 5 = 5 + 0 입니다.
// 7 = 0 + 7 = 5 + 2 입니다.
// 9 = 2 + 7 입니다.
// 12 = 5 + 7 입니다.
// 따라서 [2,5,7,9,12] 를 return 해야 합니다.

// 배열의 중복값을 제거해주는 3가지 방법
// 1. 생성자 Set을 이용하면 중복값을 제거해주는 객체로 만들 수 있음.
// 2. indexOf(), filter()
// 3. forEach(), includes()


// 내풀이
// return 값이 배열이므로 spread연산자를 이용해 배열로 만든 후, sort메소드를 이용해 정렬하였다.
function solution (numbers) {
    var result = []
    let allPlusArr = []
    for (let i = 0; i < numbers.length; i++) {
        for(let j = 0; j < numbers.length; j++) {
            // 중복으로 더해지는 걸 continue로 방지하였다.
            if(i === j) {
                continue
            }
            allPlusArr.push(numbers[i]+numbers[j])
        }
    }
    let set = new Set(allPlusArr)
    result = [...set].sort((a,b) => a-b)
    
    return result
}