// function logMessage (value: string) {
// 	console.log(value);
// }
// logMessage('error')

// '|' = 유니온 타입 - 하나의 타입이상을 쓸수있도록 만드는 방법
function logMessage(value: string | number) {
    if (typeof value === "number") {
        value.toLocaleString(); //타입에 맞는 자동완성이 가능
    }
    if (typeof value === "string") {
        value.toString(); //타입에 맞는 자동완성이 가능
    }
    throw new TypeError("vlaue must be string or number");
}
logMessage("error");
logMessage(300);

interface Developer2 {
    name: string;
    skill: string;
}
interface Person3 {
    name: string;
    age: number;
}
function askSomeone(somone: Developer2 | Person3) {
    somone.name; // 공통된 속성만 접근할 수 있음
    // somone.skill;
    // somone.age;
}
askSomeone({ name: "디벨로퍼", skill: "web" });
askSomeone({ name: "캡틴", age: 100 });

// '&' = 인터섹션 타입 - 두가지이상의 모두를 쓸수있도록 만드는 방법
let seho3: string | number | boolean;
let capt3: string & number & boolean;

function askSomeone2(somone: Developer2 & Person3) {
    somone.name; // 두가지의 모든 속성에 접근할 수 있음
    somone.skill;
    somone.age;
}
// askSomeone2({name:'디벨로퍼',skill:'web'}); // 모든 속성을 가지고 있어야하기때문에 오류
askSomeone2({ name: "디벨로퍼", skill: "web", age: 100 });
