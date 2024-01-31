interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
let seho: User = {
    age: 12,
    name: "세호",
};

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}
let capt1 = {
    age: 3,
    name: "zoq",
};
getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface sumFunction {
    (a: number, b: number): number;
}
let sum: sumFunction;
sum = function (a: number, b: number): number {
    return a + b;
};

// 인덱싱
interface stringArray {
    [index: number]: string;
}

let arr: stringArray = ["a", "b", "c"];
// arr[0] = 10; // string이라고 정의해놨기 때문에 10이 할당될 수 없다

// 딕셔너리 패턴
interface stringRegexDictionary {
    [key: string]: RegExp; // RegExp는 정규표현식
}

let obj: stringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
};

// obj['cssFile'] = 'a' // RegExp라고 정의해놨기 때문에 'a'(string)이 할당될 수 없다

Object.keys(obj).forEach((value) => {});

// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    language: string;
}

let capt2: Developer = {
    language: "C++",
    name: "dd",
    age: 100,
};
