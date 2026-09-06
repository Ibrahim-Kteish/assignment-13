let arr = [];

arr.push(55);


arr.unshift(13, 18);


arr.push(127);


console.log(arr[0]);
console.log(arr.length);
console.log(typeof arr);

console.log("---While loop---");

let i = 0;

while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

console.log("---Do-while loop---");

let j = 0;

do {
    console.log(arr[j]);
    j++;
} while (j < arr.length);

console.log("---For loop---");

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("---For of loop---");

for (let element of arr) {
    console.log(element);
}

console.log("---Calculating total---");

let total = 0;

for (let i = 0; i < arr.length; i++) {
    total += i;
}

console.log("total =", total);

console.log("---Logging all the elements that divided by 3 and 5---");

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 || arr[i] % 5 === 0) {
        console.log(arr[i]);
    }
}

console.log("---Skipping all elements that divided by 5 and 11---");

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 5 === 0 && arr[i] % 11 === 0) {
        continue;
    }

    console.log(arr[i]);
}

console.log("---Exiting when any element divided by 3---");

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
        break;
    }

    console.log(arr[i]);
}

arr.shift();

arr.pop();

console.log("---Logging all elements using for loop---");

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


firstLoop:
for (let i = 0; i <= 5; i++) {

    secondLoop:
    for (let j = 0; j <= 5; j++) {

        thirdLoop:
        for (let k = 0; k <= 5; k++) {
            
            if (i === j - 1 && j === k - 1) {
              
                break firstLoop;
            }
            console.log("i =", i, "j =", j, "k =", k);

        }
    }
}