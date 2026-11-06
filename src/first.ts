//generics

const gen = <T> (x:T):T =>{
    return x
}
const numberX=10
console.log(gen<string>("numberX"))
type user ={
    name:string
    age:number
}
console.log(gen<user>({
    name:"yossef",
    age:99
}))


//for another example
interface Iuser <T> {
    name :string
    data:T
}
const user:Iuser <{name:string,fan:string}> ={
    name :"string",
    data:{name:"yso",fan:"a;lsfdj"}
}
console.log(user)



//OOP
//encapsulation
enum genderenum {
    male ="male" ,female="female"
}
class userclass  { 
    public name :string 
    private age :number 
    protected gender : genderenum 
    private password ! : string
    protected balance :number =0
    set setbalance(balance:number){
        this.balance =balance
    }
    get getbalance () {
        this.balance-=0.5
        return this.balance
    }
    get getpassword() {
        return this.password
    }
    set setpassword (password:string){
        this.password= password
    }
        sayhello ():string {
        return `name:${this.name} and password is ${this.getpassword}`
    }
    constructor(name:string,age:number,gender:genderenum){
    this.name =name
    this.age =age
    this.gender =gender
    }
}

const userana =new userclass("yossef",99,genderenum.male)
userana.setpassword ="anas@sdlfjdkl"
userana.setbalance =1
console.log(userana.getbalance)
console.log(userana.getbalance)
userana.setbalance=9
console.log(userana.getbalance)
console.log(userana)
console.log(userana.name) 



//inheritance
 class student extends userclass{
    grade:string
    constructor(name:string,age:number,gender:genderenum,grade:string)
    {
        super(name,age,gender)
        this.grade=grade
    }
    sayhello ():string {
        return `name:${this.name} and grade is ${this.grade}` //polymorphizm
    }
}
let userana2 =new student ("yossef",99,genderenum.male,"1")
console.log (userana2.sayhello())
console.log(userana2)


//impelemntation
interface lazem {
    name:string
    age:number
    sayhello():string
}
class users implements lazem {
    name!: string
    age!: number
    private balance :number =1
    static taxs :number = 0.5 //static
    get getbalance() {
        return this.balance-users.taxs
    } 
    sayhello(): string {
        return `hello yossef}`;
    }
}
const user8 = new users ()
console.log(user8.sayhello())
console.log(user8.getbalance)


// لو في حفيد 
// (الاب + الجد ) (grade ,  name , age,gender) super(name,grade,age,gender)