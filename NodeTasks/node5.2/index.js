
let data = process.argv.slice(2); //taking i/p form command line args
if (data[0] == "operation") {
  const numArray = data.slice(2);
  if (data[1] === "addition") {
    let sum = 0;
    if (numArray.length == 0) {
      console.log("No numbers, so the default sum value is generated");
    }
    for (let i = 0; i < numArray.length; i++) {
      if (!isNaN(Number(numArray[i]))) {
        sum += Number(numArray[i]);
      } else {
        console.log(`invalid number at index ${i + 1}, skipping it`);
      }
    }
    console.log(sum);
  } else if (data[1] === "multiply") {
    let product = 1;
    if (numArray.length == 0) {
      console.log("No numbers, so default product value will be generated");
    }
    for (let i = 0; i < numArray.length; i++) {
      if (!isNaN(Number(numArray[i]))) {
        product *= Number(numArray[i]);
      } else {
        console.log(`invalid number at index ${i + 1}, skipping it`);
      }
    }
    console.log(product);
  } else if (data[1] === "subtraction") {
    if (numArray.length != 2) {
      console.log("Invalid number of arguments for operation");
    } else {
      if (isNaN(numArray[0]) || isNaN(numArray[1])) {
        console.log("invalid number(s)");
      } else {
        console.log(numArray[0] - numArray[1]);
      }
    }
  } else if (data[1] === "division") {
    if (numArray.length != 2) {
      console.log("Invalid number of arguments for operation");
    } else {
      if (isNaN(numArray[0]) || isNaN(numArray[1])) {
        console.log("invalid number(s)");
      } else {
        console.log(numArray[0] / numArray[1]);
      }
    }
  } else {
    console.log("No operation is mentioned / Invalid operation");
  }
} else {
  console.log(
    "No operation mentioned, please follow format : ooperation (ope) ...nums "
  );
}
