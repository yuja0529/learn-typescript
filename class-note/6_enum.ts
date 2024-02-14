// 숫자형 이넘
enum Shoes {
    나이키, // 0
    리복 = 10, // 10
    아디다스, // 11
}

// 문자형 이넘
enum Brand {
    Nike = "나이키",
    Adidas = "아디다스",
}

let myShoes = Shoes.나이키;
let MyBrand = Brand.Nike;
console.log(myShoes); // 0
console.log(MyBrand); // 나이키

enum Answer {
    Yes = "Y",
    No = "N",
}

function askQuestion(answer: Answer) {
    if (answer == Answer.Yes) {
        console.log("정답");
    }
    if (answer == Answer.No) {
        console.log("오답");
    }
}

// askQuestion('예스')
// askQuestion('y')
askQuestion(Answer.Yes);
