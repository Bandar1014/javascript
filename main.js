console.log("--even or odd--")

let num1=9
    if(num1 % 2 == 0) {
    console.log("The number is even.");
    }
    else{
        console.log("the number is odd");
    }

    console.log("\n")
    console.log("\n")


    console.log("--if grade--")
    let grade=10
    if (grade>=90 ){
        console.log("your result is A");
    }
    else if (grade>=80){
        console.log("your result is B");
    }
    else if (grade>=70){
        console.log("your result is C");
    }
    else if (grade>=60){
        console.log("your result is D");
    }
    else if(grade<60){
        console.log("your result is F");
    }

    console.log("\n")
    console.log("\n")

    console.log("--fizz buzz--")
    let number=9;
    if(number%3 ==0 && number%5 == 0){
        console.log("Fizz buzz")
    }
   
    else if(number%5 ==0){
        console.log("buzz")
    }
    else if(number%3 ==0 ){
        console.log("Fizz ")
    }

    console.log("\n")
    console.log("\n")

    console.log("--square number--")
    
  for(let i=1;i<=10;i++){
    console.log(i*i)

  }  
  console.log("\n")
  console.log("\n")


console.log("--odd from 1-20--")

for(let i=1;i<=20;i++){
    if(i % 2 !=0){
        console.log(i)
    }

}

console.log("\n")
console.log("\n")

console.log("--even from 1-25--")
for(let i=1;i<=25;i++){
    if(i % 2 ==0){
        console.log(i)
    }

}
console.log("\n")
console.log("\n")

console.log("--1234--")
let pp = "";
for(let i=1;i<=8;i++){
    for(let j=1;j<=i;j++)
    {
        pp += j +' ';   
    }
    pp += "\n"
}
console.log(pp)

console.log("\n")
console.log("\n")



console.log("--fibonacci--")
n=20
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci ');

for (let i = 1; i <= n; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}


    

