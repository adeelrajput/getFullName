
class Human{
    firstName:string
    lastName:string
    age:number
    constructor(firstName_val: string,lastName_val:string){
        this.setName(firstName_val,lastName_val);
    }   
  setName(firstName_val: string,lastName_val:string){
        this.firstName=firstName_val;
        this.lastName=lastName_val;
  }
    getfullName(){
        
        return `${this.firstName} ${this.lastName}`

    } 
}
const Name = new Human('Adeel','Ahemd')
console.log('h', Name.getfullName());

