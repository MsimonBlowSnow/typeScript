/*
    1.使用字面量进行声明，或者直接声明类型
        

*/ 
let typesString03: string;
let booleanOrstring03: boolean | string; //联合类型

// 范围之内
let sex: "man" | "woman"; //只能是 man 或者 woman

/*
    any 表示为任意类型,设置了any相当于关闭了类型的检查，不建议使用

        声明变量不不指定类型，也不赋值，就默认是any
        let b; // 相当于any


        unknown 和any的区别
            any的值可以赋值给其他的变量,没有提示错误,会导致其他变量的错误
            unknow的值会赋值给其他的变量，会有提示错误
*/ 

let anyType03; //隐式的使用any, any变量赋值给其他变量，不会有错误提示
let unkown03:unknown  //unknown 赋值给其他的变量，会有错误提示
