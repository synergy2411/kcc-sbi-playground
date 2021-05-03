export class Person{
    private email : string;
    constructor(email : string){
        this.email = email;
    }
    jump(){
        return `hey ${this.email}, I am jumping!`
    }
}

export const MAGIC_NUMBER : number = Math.round(Math.random() * 10);

export function getDailyFortune(){
    return "Run 5 kms everyday";
}