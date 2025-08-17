class Human {
    constructor() {

    }

    greet() {
        console.log("hello baby!!!");
        return this
    }
    love() {
        console.log("hello Ajay");
        return this

    }
    bye() {
        console.log("BYe bye Ajay");

    }
}


// const h = new Human()
// console.log(h);
// const g = h.greet()
// console.log(g);


// h.greet().love().greet().bye()

// function Hello() {
//     console.log("hello");
// }
//  function Bye() {
//     return Hello
//  }
//  const output = Bye()
//  output()

// const a = [1,2,3,4,5,6]
// const o =a.map((ele) => {
//     if(ele === 4){
//         return "four"
//     }

//     if(ele === 5){
//         return {}
//     }

//     return ele
// })

// console.log(o);

let a = []
/**
 * false
 * 0
 * undefined
 * ""
 */


if(a){
    console.log("true")
} else {
    console.log("false");
    
}