let calculate={

    'mul_first':function(a,b,c){
        let result = a * b  *c;
        console.log(result);
     },

        'sum_first':function(a,b,c){
            let result=a +b +c;
            console.log(result);
        },

    'sum':function(){
        let  result=this.num1+this.num2;
        console.log(result);
    },
    'mul':function(){
        let  result=this.num1*this.num2;
        console.log(result);
    },
    'div':function(){
        let  result=this.num1/this.num2;
        console.log(result);
    },
    'sub':function(){
        let  result=this.num1-this.num2;
        console.log(result);
    },
    'mod':function(){
        let  result=this.num1%this.num2;
        console.log(result);
    }
};

var set1={
    'num1':13,

    'num2':89,
};

var set2={
     arr:[63,99,68],
};

var set3={
    'num1':55,

    'num2':45,
}

console.log("Apply call");
console.log("sum of 10 and 20 and 30");
calculate.sum_first.apply(set2,set2.arr);
console.log("multiply of 10 and 20 and 30");
calculate.mul_first.apply(set2,set2.arr);




console.log("Apply bind call ");
console.log("sum of 50 and 20 using bind");
let new_sum=calculate.sum.bind(set3);
new_sum();
console.log("multiply of 50 and 20 using bind");
let new_mul=calculate.mul.bind(set3);
new_mul();
console.log("substraction of 50 and 20 using bind");
let new_diff=calculate.sub.bind(set3);
new_diff();
console.log("mod of 50 and 20 using bind");
let new_mod=calculate.mod.bind(set3);
new_mod(); 

