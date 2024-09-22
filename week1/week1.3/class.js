class animal{
    constructor(name,legCount,speak){
        this.name=name;
        this.legCount=legCount;
        this.speak=speak;
    }
    speaks(){ // it gets invoked when called on objects
        console.log(`animal ${this.name} has ${this.legCount} and speaks ${this.speak}`);
    }
    static func(){ // it gets invoked when called on class
        console.log("animal");
    }
}
const dog=new animal("dog",4,"Bhow  Bhow");
const cat= new animal("cat",4," Meow Meow");
dog.speaks();
cat.speaks();
animal.func();