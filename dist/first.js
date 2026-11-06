//generics
const gen = (x) => {
    return x;
};
const numberX = 10;
console.log(gen("numberX"));
console.log(gen({
    name: "yossef",
    age: 99
}));
const user = {
    name: "string",
    data: { name: "yso", fan: "a;lsfdj" }
};
console.log(user);
//OOP
//encapsulation
var genderenum;
(function (genderenum) {
    genderenum["male"] = "male";
    genderenum["female"] = "female";
})(genderenum || (genderenum = {}));
class userclass {
    name;
    age;
    gender;
    password;
    balance = 0;
    set setbalance(balance) {
        this.balance = balance;
    }
    get getbalance() {
        this.balance -= 0.5;
        return this.balance;
    }
    get getpassword() {
        return this.password;
    }
    set setpassword(password) {
        this.password = password;
    }
    sayhello() {
        return `name:${this.name} and password is ${this.getpassword}`;
    }
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const userana = new userclass("yossef", 99, genderenum.male);
userana.setpassword = "anas@sdlfjdkl";
userana.setbalance = 1;
console.log(userana.getbalance);
console.log(userana.getbalance);
userana.setbalance = 9;
console.log(userana.getbalance);
console.log(userana);
console.log(userana.name);
//inheritance
class student extends userclass {
    grade;
    constructor(name, age, gender, grade) {
        super(name, age, gender);
        this.grade = grade;
    }
    sayhello() {
        return `name:${this.name} and grade is ${this.grade}`; //polymorphizm
    }
}
let userana2 = new student("yossef", 99, genderenum.male, "1");
console.log(userana2.sayhello());
console.log(userana2);
class users {
    name;
    age;
    balance = 1;
    static taxs = 0.5; //static
    get getbalance() {
        return this.balance - users.taxs;
    }
    sayhello() {
        return `hello yossef}`;
    }
}
const user8 = new users();
console.log(user8.sayhello());
console.log(user8.getbalance);
export {};
// لو في حفيد 
// (الاب + الجد ) (grade ,  name , age,gender) super(name,grade,age,gender)
