// data type - malumot turlari
/**1. primitive */
// 1. string
// 2. number
// 3. boolean
// 4. null
// 5. undefined
// 6. bigInt
// 7. symbol

/**2. NonPrimitive */
// 8. Object
// function,array

// string - "",``,'' shu kabilar
// let name = "muhammadsodiq";
// console.log (name)

// number - no'mer
// let number = 10;
// let number2 = 20;
// console.log(number * number2)

// let str = "abdulloh";
// let str2 = "muqaddaas";
// console.log(str + str2);

// 3. boolean - true yoki false qytaradi

// let name = true;
// let name2 = false;

// console.log(name, name2);

// 4 undifined - ozgaruvchilar nom berib unga qiymat
// berilmasa undifined qytadi

// let name ;
// console.log(name);

// 5 null - qiymatsiz boshliq

// let name = null;
// console.log(name)

// 6. bigInt - katta sonlarni hisoblashda ishlatiladii.
// console.log(
//   12345678909876543212345678912345678909876543212734567890987654321n +
//     123456789098765432123456789
// );

// 7. symbol -  soon

// 8.object -

// let user = {
//     name: "abdulloh",
//     surname: "mahmudjanov",
//     age: 15,
//     hobby: "azoblash",
// };

// console.log(user);

let arr = ["abdulloh", "murod", "aziz", { name: "abdullo" }];
console.log(arr);

let user = {
  name: "Abdulloh",
  hobby: [
    {
      hobby1: "Tennis",
    },

    "Programming",

    {
      hobby2: "Chess",
      hobby3: [24, 500, { hobby4: "Hamster" }],
    },
  ],
};

console.log(user.hobby[2].hobby3[2].hobby4);
