class Person {
    name :string
    age: number
    pin = 12345
    private salary : number
    constructor(user_name:string,user_age: number) {
        this.name = user_name
        this.age = user_age
        this.salary = 50000
    }
    updateAge (age:number){
        this.age = age
    }
    displaySalary (pin : number) {
        if (pin=== this.pin) {
            console.log(this.salary);
        }
        else {
            console.log
            ("chala jaa")

            
        }
    }
}