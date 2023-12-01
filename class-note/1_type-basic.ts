//js 문자열 선언
let jsStr = "hello";

//ts 문자열 선언
let tsStr: string = "hello";

//ts 숫자 선언
let tsNum: number = 10;

// ts 배열 선언
let tsArr: Array<number> = [1, 2, 3]; //배열이며 안에는 숫자만 들어갈수있다
let tsItems: number[] = [1, 2, 3]; //배열이며 안에는 숫자만 들어갈수있다
// 둘이 같은 뜻이며 선언 방법만 다르다

let tsHeroes: Array<string> = ["토르", "닥터스트레인지", "헐크"]; //배열이며 안에는 문자만 들어갈수있다
let items: String[] = ["토르", "닥터스트레인지", "헐크"]; //배열이며 안에는 문자만 들어갈수있다
// 둘이 같은 뜻이며 선언 방법만 다르다

//ts 튜플 = 배열의 인덱스 순서까지 정해두는 방법
let address: [string, number] = ["강남", 1];

//ts 객체
let obj: object = {};
// let perpson: object = {
// 	name: 'zoq',
// 	age: 100
// };
let perpson: { name: string; age: number } = {
	//객체의 구체적인 타입까지 정할수있다
	name: "zoq",
	age: 100,
};

//ts 진위값
let show: boolean = true;
