
function count() {
    let a = 1;
    return function () {
        return a++;

    };

}

let counter = count();
let NumberCount = document.querySelector(".counter");
let buttCounter = document.querySelector(".buttonCounter");
buttCounter.addEventListener("click", function () {
    let num = counter();
    NumberCount.innerHTML = num;

    let color = document.querySelector(".body");
    color.style.background = colorGeneration();


});

//     let colorBack = document.querySelector(".body");
//     colorBack.addEventListener("mousemove", function () {
//     let color = document.querySelector(".body");
//
//     color.style.background = colorGeneration();
// })

function colorGeneration() {

     let r = 206 + Math.floor(Math.random() * 50);
     let g = 106 + Math.floor(Math.random() * 50);
     let b = 106 + Math.floor(Math.random() * 50);

    return "rgb(" + r.toString() + "," + g.toString() + "," + b.toString()+")";
}

//.......................................КОНСТРУКТОР......................................


function Coffee(roast, ouncer) {
    this.roast = roast;
    this.ouncer = ouncer;


    this.getSize = function(){

        if(this.ouncer === 8){
            return "small";
            }else if(this.ouncer === 12){
                return "medium";
                }else if(this.ouncer === 18){
                    return "large";
                    }else{
                        return "No this size";
        }
    };

     this.String = function(){

        return "You've order " +this.getSize() + " " + this.roast + " " + " coffee";
    }

}

let oneObj = new Coffee("Dark", 8);

console.log(oneObj.String());

let twoObj = new Coffee("Dark-milk", 18);

console.log(twoObj.String());

let threeObj = new Coffee("White", 18);

console.log(threeObj.String());

//.......................................КОНСТРУКТОР 2......................................


function Car(params) {

    this.make = params.make;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.passengers = params.passengers;
    this.convertible = params.convertible;
    this.mileage = params.mileage;
    this.started = false;

    this.start = function () {
        this.started = true;
    };
    this.stop = function () {
        this.started = false;
        console.log(this.make +" "+ this.model + " the engine is turned off" );
    };
    this.drive = function () {

        if(this.started){

            console.log(this.make +" "+ this.model + " rides" );

        }else{
            console.log(this.make +" "+ this.model + " NO rides" );

        }
    };

}

 let paramsGolf = {
     make: "Volkswagen",
     model: "golf",
     year: '2014',
     color: 'white',
     passengers: 5,
     convertible: false,
     mileage: 10000
 };
let golf = new Car(paramsGolf);



let sirocco = new Car("Volkswagen", "sirocco", '2011', 'black', 3,false, 20000);
let BMW = new Car("BMW", "3", '2010', 'black', 3,false, 24000);

let car = [golf,sirocco,BMW];


for(let i = 0; i < car.length; i++){

    car[i].drive();
    car[i].start();
    car[i].drive();
    car[i].stop();
    car[i].drive();

}

if(golf instanceof Car){
    console.log(golf.make + " типа Car");
}else{
    console.log(golf.make + " не типа Car");
}



//..................................ПРОТОТИПЫ................................

function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}

Robot.prototype.maker = function () {
    console.log("made in BLR");
};
Robot.prototype.speak = function(){
    console.log("I'm robot " + this.name);
};
Robot.prototype.energy = 100;


let robby = new Robot("Robby",19,"Anton");
let rosie = new Robot("Roise",10,"John");

robby.onoffSwich = function () {
    console.log(this.name + " включен");
    this.energy = 99;
};

rosie.makeCoffe = function(){
    console.log("Ваш кофе");
};


// alert(robby.energy);
// alert(robby.hasOwnProperty('energy') + ' property in prototype');
// robby.onoffSwich();
// alert(robby.hasOwnProperty('energy') + ' property not in prototype (в экземпляре)');
// alert(robby.energy);
// robby.speak();
// robby.maker();


rosie.speak();
rosie.maker();
rosie.makeCoffe();


// ................................. prototype and constructor....................

function Dog(name, year) {

    this.name = name;
    this.year = year;
}

Dog.prototype.break = function () {
    console.log(this.name + " гав-гав");
};
Dog.prototype.sit = function () {
    this.sitting = true;
    console.log( this.name + " сел");
};
Dog.prototype.sitting = false;


let bars = new Dog("Барс");

bars.break();




function ShowDog(name,year){

     Dog.call(this, name,year);
}

 ShowDog.prototype = new Dog(); // использование объекта в качесте прототипа (наследование)


ShowDog.prototype.stack = function () {
    this.sitting = false;
    console.log( this.name + " втсал");
};
ShowDog.prototype.gait = function (act){

    if(act === "walk"){
        console.log(this.name + ' идет');
    }else if(act === 'crawl'){
        console.log(this.name + ' ползет');
    }else if(act === 'pace'){
        console.log(this.name + ' шагает');
    }
};

ShowDog.prototype.bait = function () {
    console.log(this.name + " ом ном ном");
};


let big = new ShowDog("Big");

big.sit();
big.stack();
big.gait("walk");
big.bait();
big.break()


if(bars instanceof Dog){
    console.log(bars.name + " является типом Dog")
}
if(bars instanceof ShowDog){
    console.log(bars.name + " является типом ShowDog")
}

console.log(big.name + " " + big.constructor);

ShowDog.prototype.constructor = ShowDog;

console.log(big.name + " " + big.constructor);



if(big instanceof ShowDog) {
    console.log(big.name + " является типом ShowDog")
}
if(big instanceof Dog) {
    console.log(big.name + " является типом Dog")
}








// if(bars instanceof Dog){
//     console.log(bars.name + " является типом Dog")
// }
// if(bars instanceof ShowDog){
//     console.log(bars.name + " является типом ShowDog")
// }
//
//
// if(big instanceof Dog) {
//     console.log(big.name + " является типом Dog")
// }
//
// if(big instanceof ShowDog) {
//     console.log(big.name + " является типом ShowDog")
// }


function Cat(name,color) {
    this.name = name;
    this.color = color;
}

Cat.prototype.mur = function() {
    console.log(this.name + ' mur mur');
}


function CatNoHome(name,color) {
    Dog.call(this, name,color);
}
CatNoHome.prototype = new Cat;


CatNoHome.prototype.miay = function() {
    console.log(this.name + ' miay!!!!');
}
CatNoHome.prototype.toString = function() {
    return this.name + ' toString!!!';
}




let kitty = new Cat('Kitty', 'grey');

kitty.mur();


let tom = new CatNoHome('Tom','blue');

tom.mur();
tom.miay();

console.log('1 ' + tom);
console.log("............................................................");



//............расширение и переопределение методов встроенного объекта (преобразование строки в объект авто)......



String.prototype.cliche = function () {

    let cliche = ["самый широкий спектр дизайнерских решений", "оптимальный выбор"];

    for(let i = 0; i < cliche.length; i++){

        let index = this.indexOf(cliche[i]);
        if(index >= 0){
            return true;
        }
    }
    return false;
}


let sentences = ["самый широкий спектр дизайнерских решений",
                 "разнообразие цветовых решений",
                 "цены приятно удивят","оптимальный выбор" ];

for (let i = 0; i < sentences.length; i++){
    let phrase = sentences[i];

    if(phrase.cliche()){
            console.log(phrase + ' - Это клише!');
    }
}


//.......................метод палиндром.......................................................
console.log("...................................................");


String.prototype.palindrome = function () {

    let numbLetter = this.length - 1;
        for(let i = 0; i < this.length; i++){

            if(this.charAt(i) === this.charAt(numbLetter)){

                numbLetter--;

                if(numbLetter < 0){
                    return true;
                }
            }
        }
    return false;
}

// String.prototype.palindrome2 = function (){
//
//     let r = this.split('').reverse().join('');
//     console.log(this);
//     console.log(this.valueOf());
//     //return (r === this.valueOf());
//
// }
// //ПРОДВИНУТОЕ РЕЩЕНИЕ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


let words = ["довод", "спектр","ваучер","мадам","летел","кабак","потоп","радар","текст","лес","tenet","пиксель"];

for(let i = 0; i < words.length; i++){

    if(words[i].palindrome()){
        console.log(words[i] + ' - слово палиндром!!!!!!!!!!!!!');
    }
}





