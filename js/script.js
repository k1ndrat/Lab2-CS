// COLUMN MULTIPLY
function multiplyColumn(binaryNum1, binaryNum2) {
   // 1
   let arrNum1 = binaryNum1.split("").reverse();
   let arrNum2 = binaryNum2.split("").reverse();

   // 2
   let result = new Array(arrNum2.length);
   for (let i = 0; i < result.length; i++) {
      result[i] = new Array(
         arrNum1.length > arrNum2.length ? arrNum1.length : arrNum2.length
      ).fill(0);
   }

   // 3
   for (let i = 0; i < arrNum2.length; i++) {
      for (let j = 0; j < arrNum1.length; j++) {
         result[i][j + i] = arrNum2[i] * arrNum1[j];
      }
   }

   console.log(result);

   result.forEach((element) => {
      element.reverse();
   });
   console.log(result);

   result.forEach((element) => {
      element.forEach((el) => {
         if (el === null) {
            el = 0;
         }
      });
   });
   console.log(result);

   // summary all el of list
   let res;
   if (result.length == 1) {
      res = result[0].join("");
   } else {
      for (let i = 0; i < result.length - 1; i++) {
         const el = result[i].join("");
         if (!res) {
            res = el;
         }
         const elNext = result[i + 1].join("");
         res = addBinary(res, elNext);
      }
   }
   console.log(res);
   return res;
}

// SHIFTING RESULT RIGHT MULTIPLY
function multiplyShift(binaryNum1, binaryNum2) {
   let arrNum1 = binaryNum1.split("");
   let arrNum2 = binaryNum2.split("");

   let result = "0".repeat(arrNum2.length + arrNum1.length);
   let count;
   for (let i = arrNum2.length - 1; i >= 0; i--) {
      let multiplyBit = "";
      for (let j = arrNum1.length - 1; j >= 0; j--) {
         multiplyBit = arrNum2[i] * arrNum1[j] + multiplyBit;
      }
      console.log("result:", result);
      console.log("multiplyBit", multiplyBit);
      if (!count) {
         count = result.length - multiplyBit.length;
      }
      multiplyBit += "0".repeat(count);
      console.log("multiplyBit", multiplyBit);
      result = addBinary(result, multiplyBit);
      console.log("result:", result);
      result = ("0" + result).slice(0, -1);
      console.log("result:", result);
      console.log("-----");
   }
   return result;
}

// MULTIPLIER IS ON THE RIGHT SIDE OF THE REGISTER
function multiplierRight(binaryNum1, binaryNum2) {
   let arrNum1 = binaryNum1.split("");
   let arrNum2 = binaryNum2.split("");

   let result = "0".repeat(arrNum1.length) + binaryNum2;
   let count;
   for (let i = arrNum2.length - 1; i >= 0; i--) {
      if (arrNum2[i] == 1) {
         let multiplyBit = binaryNum1;
         console.log("result:", result);
         console.log("multiplyBit", multiplyBit);
         if (!count) {
            count = result.length - multiplyBit.length;
         }
         multiplyBit += "0".repeat(count);
         console.log("multiplyBit", multiplyBit);
         result = addBinary(result, multiplyBit);
         console.log("result:", result);
      }
      result = ("0" + result).slice(0, -1);
      console.log("result:", result);
      console.log("-----");
   }
   return result;
}

// BUTA MULTIPLY
function multiplyButa(binaryNum1, binaryNum2) {
   let arrNum1 = binaryNum1.split("");
   let arrNum2 = binaryNum2.split("");

   return result;
}

function division(binaryNum1, binaryNum2) {
   let divider = parseInt(binaryNum1); // convert the first parameter to an integer and assign it to "divider"
   let divisor = parseInt(binaryNum2); // convert the second parameter to an integer and assign it to "divisor"
   let register = divider; // assign "divider" to "register"
   let quotient = Math.pow(2, 32) - 1; // calculate the maximum quotient for 32-bit integers
   let remainder_length = 32; // set the bit length of the remainder to 32
   let quotient_length = 32; // set the bit length of the quotient to 32
   let register_length = 64; // set the bit length of the register to 64

   console.log("\nNumbers in binary:");
   console.log(
      "Divider:\t" + divider.toString(2).padStart(remainder_length, "0")
   );
   console.log(
      "Divisor:\t" + divisor.toString(2).padStart(remainder_length, "0")
   );

   divisor = divisor.toString(2) + "0".repeat(32);

   let subtract_divisor = -parseInt(divisor, 2);

   console.log("sub-divis", subtract_divisor);
   console.log("sub-divis (2)", subtract_divisor.toString(2));

   let decimalNumber = parseInt(divisor, 2);

   console.log(decimalNumber);

   for (let i = 0; i < 32; i++) {
      console.log("\nStep №" + (i + 1));
      console.log(
         "Register:\t" + register.toString(2).padStart(register_length, "0")
      );
      let reg = register;

      register = register.toString(2);

      register = (register + "0").toString(2);

      console.log("Зсуваємо регістр вліво на один біт;");

      if (parseInt(register) >= parseInt(divisor)) {
         console.log("Remainder більший(або рівний) ніж Divisor");

         register = parseInt(register, 2);
         register += subtract_divisor;
         console.log(typeof register);

         register = register.toString(2);
         console.log("slice:", register);
         register = register.slice(0, -1) + "1";
         console.log("slice:", register);
         console.log(
            "Register:\t" + register.toString(2).padStart(register_length, "0")
         );
      } else {
         console.log("Remainder менший ніж Divisor");
         console.log(
            "Register:\t" + register.toString(2).padStart(register_length, "0")
         );
      }
   }

   console.log("\nAnswer:");
   let result = parseInt(register, 2) & quotient;
   console.log(
      "Quotient:\t" +
         (parseInt(register, 2) & quotient)
            .toString(2)
            .padStart(quotient_length, "0") +
         " ( " +
         (parseInt(register, 2) & quotient) +
         " )"
   );

   register = register.toString(2) + "0".repeat(32);
   register = register.slice(register.length - 32);
   console.log(
      "Remainder:\t" +
         register.padStart(remainder_length, "0") +
         " ( " +
         (register >> 32) +
         " )"
   );
   return result;
}

function zerosStr(val, bitscount) {
   let count = bitscount - val.length;
   let head = "";
   for (let i = 0; i < count; i++) {
      head += "0";
   }
   return head + val;
}

function sumIEEE754(binaryNum1, binaryNum2) {
   if (
      binaryNum1.split(" ").join("").length == 32 &&
      binaryNum2.split(" ").join("").length == 32
   ) {
      // console.log("Andriy sexy!)");
   }
   let s1 = binaryNum1.split(" ")[0];
   let E1 = binaryNum1.split(" ")[1];
   let M1 = binaryNum1.split(" ")[2];
   let x1 = binaryNum1.split(" ").join("");

   let s2 = binaryNum2.split(" ")[0];
   let E2 = binaryNum2.split(" ")[1];
   let M2 = binaryNum2.split(" ")[2];
   let x2 = binaryNum2.split(" ").join("");

   let s3;
   let E3;
   let M3;

   if (E1 == E2) {
      E3 = E1;

      if (s1 == s2) {
         s3 = s1;
         M3 = addBinary(M1, M2);
      }

      if (Math.abs(parseInt(M3, 2)) >= 1) {
         M3 = (parseInt(M3, 2) / 2).toString(2).padStart(23, "0");
         E3 = (parseInt(E3, 2) + 1).toString(2).padStart(8, "0");
      }
   } else {
      // console.log(M1);
      // console.log(M2);
      let diff_e = Math.abs(parseInt(E2, 2) - parseInt(E1, 2));
      // console.log(diff_e);
      if (parseInt(x1.slice(1)) < parseInt(x2.slice(1))) {
         [x1, x2] = [x2, x1];
         [M1, M2] = [M2, M1];
         [E1, E2] = [E2, E1];
         [s1, s2] = [s2, s1];
      }

      if (s1 == s2) {
      }

      M2 = "0".repeat(diff_e) + M2.slice(0, M2.length - diff_e);
      M2 = M2.slice(0, diff_e - 1) + "1" + M2.slice(diff_e);
      // console.log(M1);
      // console.log(M2);
      E3 = E1;
      if (s1 == s2) {
         s3 = s1;
         M3 = addBinary(M1, M2);
      } else if (s1 == "1") {
         // M3 = Math.abs(parseInt(M1, 2) - parseInt(M2, 2)).toString(2);
         M3 = addBinary(decimalToTwosComplement(parseInt(M1, 2)), M2);
         s3 = s1;
      } else if (s2 == "1") {
         // M3 = Math.abs(parseInt(M1, 2) - parseInt(M2, 2)).toString(2);
         M3 = addBinary(decimalToTwosComplement(parseInt(M2, 2)), M1);
         s3 = s1;
      }
   }

   const Emax = 127;
   const Emin = -126;
   if (isNaN(M1) || isNaN(M2) || parseInt(E3, 2) - Emax >= Emax) {
      return Infinity;
   } else if (parseInt(E3, 2) - Emax <= Emin) {
      return 0;
   }

   return [s3, E3, M3].join(" ");
}

// sum binary num
function addBinary(a, b) {
   let sum = "";
   let carry = 0;
   let i = a.length - 1;
   let j = b.length - 1;

   while (i >= 0 || j >= 0) {
      let digitA = i >= 0 ? parseInt(a[i]) : 0;
      let digitB = j >= 0 ? parseInt(b[j]) : 0;
      let currentSum = digitA + digitB + carry;
      sum = (currentSum % 2) + sum;
      carry = Math.floor(currentSum / 2);
      i--;
      j--;
   }

   if (carry !== 0) {
      sum = carry + sum;
   }

   return sum;
}

function binaryValid(inputValue) {
   let newValue = "";
   inputValue.split("").forEach((symb) => {
      if (symb == "1" || symb == "0") {
         newValue += symb;
      }
   });
   return newValue;
}

function getMultiply(output) {
   let out = document.querySelector(output);
   if (num1.value && num2.value) {
      // checking method
      if (isMultiply.checked) {
         if (is1.checked) {
            out.innerText = multiplyColumn(num1.value, num2.value);
         } else if (is2.checked) {
            out.innerText = multiplyShift(num1.value, num2.value);
         } else if (is3.checked) {
            out.innerText = multiplierRight(num1.value, num2.value);
         }
      } else if (isDivision.checked) {
         out.innerText = division(num1.value, num2.value);
      }
   } else {
      out.innerText = "Please input all num";
   }
}

// INPUT VALIDATOR
const num1 = document.querySelector("#number-1");
const num2 = document.querySelector("#number-2");

const is1 = document.querySelector(`input[value="1"]`); // get radioButton 'column multiply'
const is2 = document.querySelector(`input[value="2"]`); // get radioButton 'bit shift right'
const is3 = document.querySelector(`input[value="3"]`); // get radioButton 'The multiplier is on the right side of the register'
const isDivision = document.querySelector(`input[value="Division"]`); // get radioButton 'Buta'
const isMultiply = document.querySelector(`input[value="Multiply"]`); // get radioButton 'Buta'
const isIEEE754 = document.querySelector(`input[value="IEEE754"]`); // get radioButton 'Buta'

num1.addEventListener("input", () => {
   // valid input 1
   num1.value = binaryValid(num1.value);

   console.log("==================================");
   getMultiply("#multiply"); // get result in element which selector is '#multiply'
});

num2.addEventListener("input", () => {
   // valid input 2
   num2.value = binaryValid(num2.value);

   console.log("==================================");
   getMultiply("#multiply"); // get result in element which selector is '#multiply'
});

// let sss = "10110000";
// console.log(("0" + sss).slice(0, -1));

// division("1000", "100");

function decimalToTwosComplement(decimal, bits) {
   // Convert absolute value of decimal to binary

   let numb = Math.abs(decimal) - 1;

   binaryNumb = numb.toString(2);
   console.log(binaryNumb);
   let binary = "";
   binaryNumb.split("").forEach((bit) => {
      if (bit == "1") {
         binary += "0";
      } else {
         binary += "1";
      }
   });

   return binary.padStart(23, "0");
}

// console.log(decimalToTwosComplement(-42949672960, 8)); // Output: "11110110"

console.log(
   sumIEEE754(
      "0 10000010 01000000000000000000000",
      "0 10000011 01000000000000000000000"
   )
);

const input_s1 = document.querySelector(".s1");
const input_E1 = document.querySelector(".E1");
const input_M1 = document.querySelector(".M1");
const input_s2 = document.querySelector(".s2");
const input_E2 = document.querySelector(".E2");
const input_M2 = document.querySelector(".M2");

const out_s3 = document.querySelector(".s3");
const out_E3 = document.querySelector(".E3");
const out_M3 = document.querySelector(".M3");

input_s1.addEventListener("input", () => {
   // valid input
   input_s1.value = binaryValid(input_s1.value);
   console.log("==================================");
   let result = sumIEEE754(
      [input_s1.value, input_E1.value, input_M1.value].join(" "),
      [input_s2.value, input_E2.value, input_M2.value].join(" ")
   );
   console.log(result);
   out_s3.innerText = result.split(" ")[0];
   out_E3.innerText = result.split(" ")[1];
   out_M3.innerText = result.split(" ")[2];
});
