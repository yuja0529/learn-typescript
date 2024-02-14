// ES2015 (ES6) 에 처음 등장한 문법
// 함수보다 보기좋은 생성자 함수라고 할 수 있다
// 아래 함수와 클래스는 같은 뜻이다
function Personal(name, age) {
    this.name = name;
    this.age = age;
}
let capt = new Personal("캡틴", 100);

class Personal {
    constructor(name, age) {
        console.log("생성");
        this.name = name;
        this.age = age;
    }
}
let teho = Personal("teho", 30);
console.log(teho); //age= 30, name = 'teho'를 가진 Personal객체가 생성됨
