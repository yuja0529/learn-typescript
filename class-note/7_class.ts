class PersonalTs {
    private name: string;
    public age: number;
    readonly log: string; // ts에서 제공하는 readonly는 읽을수만 있는 옵션

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
