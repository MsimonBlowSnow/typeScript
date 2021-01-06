/*
    1.ts 给变量指定类型，在编译的时候就会出错误
    2. 在变量声明的时候直接赋值，ts的编译器会记住你的第一次赋值的类型

    3.给参数进行类型说明
        function add(a: number,b: number){
            return a + b;
        }
    4.给函数返回值进行类型声明
        function add(a: number, b: number): number{
            return a + b;
        }
*/ 


let a;

a = "hello";
a = 10;

//tc 编译提示

let mynumber: Number = 10;
mynumber = 1;
// mynumber = "3";  编译的时候报错

let bstring: string = "123";
// bstring = 113;


function addjs(a,b){
    return a + b;
}

function addts(a:number,b:number){
    return a + b;
}

addjs(1,1); //2
addjs(1,"1"); //11

addts(1,1); //2
//addts(1,"2"); // ts会有提示提醒


//控制函数的返回值
function add(a: number, b: number): number{
    return a + b;
}