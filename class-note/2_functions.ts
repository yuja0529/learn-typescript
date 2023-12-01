//ts 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number) {
	return a + b;
}
sum(20, 30);

//ts 함수의  반환 값에 타입을 정의하는 방식
function add(): number {
	return 10;
}

// 함수에 타입을 정의하는 이상적이며 기본적인 방식
function sum2(a: number, b: number): number {
	return a + b;
}
sum2(10, 20, 30, 40); //2개의 인자가 필요한데 더 많은(or 적은) 인자가 있다

//함수의 옵셔널 파라미터 => 파라미터 뒤에 물음표
function log(a: string, b?: string) {}

log("hello would");
log("hello", "would");
