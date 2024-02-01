interface Person3 {
    name: string;
    age: number;
}

type Person2 = {
    name: string;
    age: number;
};

// 인터페이스는 사용한 부분에 마우스 오버를 하면 interface Person3 으로만 뜨지만 (ctrl+좌클릭누르면 참조이동)
// 타입은 내부에 어떤 속성이 있는지까지 보여준다 (별칭일뿐)
// 인터페이스는 확장이 가능하고, 타입은 확장이 불가능함. 공식문서에 의하면 되도록 인터페이스 사용하는걸 추천 (좋은 프로그래밍은 확장이 용이해야하기때문)

let seho2: Person2 = {
    name: "세투",
    age: 30,
};

type Mystring = string;
let str: Mystring = "hello";

type Todo = { id: number; title: string; done: boolean };
function getTodo(todo: Todo) {}
