// ============================================================
// 실습 2: 최종 합격 판정 프로그램 

// 합격 조건
//   ● 점수(score) 70 이상
//   ● 출석률(attendance) 80 이상
//   ● 과제 제출 여부(submitted) true
//   ● 단, 점수 90 이상이면 출석률은 무시하고 합격
// ============================================================  
//  ** 논리연산자 && (AND), || (OR), ! (NOT)**

// 방법 1. 

let score = 88;
let attendance = 75;
let submitted = true;

// 합격조건 
// a. (score >= 70) && attendance >= 80 && sumitted = true  일반 합격
// b. (score >= 90)                     && sumitted = true  특별 합격

if ((score >= 90) || ((score >= 70) && (attendance >= 80)) && sumitted) {
    console.log("최종 합격");
} else {
    console.log("불합격");
}

// 방법 2. 
let score2 = 88;
let attendance2 = 5;
let submitted2 = true;

if (!submitted2) {
    console.log("불합격 (과제 미제출)");                  // 1순위. 과제 미제출은 무조건 불합격
} else if (score2 >= 90) {
    console.log("최종 합격 (특별 합격)");                 // 2순위. 90점 이상이면 출석률 관계 없이 합격 
} else if (score2 >=70 && attendance2 >= 80) {
    console.log("최종 합격 (일반 합격)");                 // 3순위. 70점 이상이면서 출석률 80 이상 ___ 합격 끝! 
} else if (score2 < 70) {
    console.log("불합격 (점수 미달)");                   // 점수 70점 미만이면 불합격
} else {
    console.log("불합격 (출석률 미달)");                  // 출석률 80 미만이면 불합격   (<< 남은 불합격 조건)
}