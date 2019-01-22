class FirstClass{
    constructor(){
        
    }
}

const firstClass = new FirstClass();

const myFirstClassAnother = new FirstClass();

console.log(firstClass === myFirstClassAnother); //false

//クラスのインスタンスであるかどうか判定
console.log(firstClass instanceof FirstClass); // true

console.log(myFirstClassAnother instanceof FirstClass); //true

class Triple {
    constructor(x) {
        this.x = x * 3;
        this._height = x + 360;
    }
    increment(){
        this.x++;
    }
    get value(){ //参照アクセッサプロパティ、必ずreturnする必要ある
        console.log("getter:");
        return this._height;
    }
    set value(newValue){//代入アクセッサプロパティ、値を返す必要はない
        console.log("setter:");
        this._height = newValue;
    }
}

const triple = new Triple(3);
console.log(triple.x);

triple.increment();

console.log(triple.x);

const div = new Triple(8);
console.log(div.value); // getter 368
div.value = 24; //setter
console.log(div.value); // getter 24
