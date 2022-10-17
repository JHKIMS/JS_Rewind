/**
 * let
 * :: 한 번 선언하고, 변경할 수 있다.(변할 수 있는 값)
 * 
 * const[대문자로 선언하는 것이 좋다] 
 * :: 절대로 바뀌지 않는 상수(수정X)(변하지 않는 값)
 * 
 * 변수 첫 글자 숫자X
*/

const name = "pj";

const test = `I am ${name}`;
console.log(test);

/**
 * null은 존재하지 않는 값
 * undefined 값이 할당되지 않음
*/

// typeof 변수의 타입을 알아내기 위한 연산자.
const some = "Hoon";

console.log(typeof 3);
console.log(typeof some);

/**
 * alert 알려줌
 * prompt 입력받음 [두 가지 인수를 받을 수 있다. / 두 번째 값을 넣으면 Default값을 지정해줄 수 있다.]
 * confirm 확인받음
 */
const pp = prompt("오늘은 몇일인가요", "2022-10");

/**
 * 자동형변환 보다는 명시적형변환을 사용하자.
 */

/**
 * 그냥 외워야 하는 부분
 * Number(0) false
 * Number('0') true
 * Number('') false
 * Number(' ') true
 * Number(null)  ==> 0
 * Number(undefined) ==> NaN
 */

// === :: 이걸 사용해야 한다.(Type까지 비교함)
