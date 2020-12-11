// function switchOfStuff(val) {
//     var answer = "";
//     // Only change code below this line
//       switch(val){
//           case "a":
//               answer = "apple";
//               break;
//           case "b":
//               answer = "bird";
//               break;
//           case "c":
//               answer = "cat";
//               break;
//           default:
//               answer = "stuff";
//               break;
//       }
    
//     // Only change code above this line
//     return answer;
//   }
  
//   console.log(switchOfStuff("a"));
  



// var count = 0;

// function cc(card) {
//   // Only change code below this line
// switch (card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//         count + 1;
//         break;
//     case 7:
//     case 8:
//     case 9:
//         count;
//         break;
//     case 10:
//     case "J":
//     case "Q":
//     case "K":
//     case "A":
//         count -1;
//         break;
// }
// if (count >=1){
//     return count + " Bet";
// } else {
//     return count + " Hold"
// }
//   // Only change code above this line
// }

// cc(2); cc(3); cc(7); cc('K'); cc('A');



// function checkObj(obj, checkProp) {
//     // Only change code below this line
//     if(obj.hasOwnProperty(checkProp)==true) {
//       return obj[checkProp];
//     } else {
//       return "Not Found";
//     }
//     // Only change code above this line
//   }

//   console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"))


// Setup
// var collection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// // Only change code below this line
// function updateRecords(object, id, prop, value) {
//   if(prop !== "tracks" && value !== "") {
//     object[id][prop] = value;
//   } else if (prop === "tracks" && object[id].hasOwnProperty(prop)==false) {
//     object[id][prop] = [value];
//   } else if (prop === "tracks" && value !== "" ) {
//     object[id][prop].push(value);
//   } else if (value === "") {
//     delete object[id][prop];
//   }
//   return object;
// }

// console.log(updateRecords(collection, 5439, "artist", "ABBA"));
// console.log(updateRecords(collection, 5439, "tracks", "Take a Chance on Me"));
// console.log(updateRecords(collection, 2548, "artist", ""));
// console.log(updateRecords(collection, 1245, "tracks", "Addicted to Love"));
// console.log(updateRecords(collection, 2468, "tracks", "Free"));
// console.log(updateRecords(collection, 2548, "tracks", ""));
// console.log(updateRecords(collection, 1245, "albumTitle", "Riptide"))

/*
Your function must always return the entire object.

If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.

If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.

If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.

If value is an empty string, delete the given prop property from the album.

Note: A copy of the collection object is used for the tests.
*/

// function multiplyAll(arr) {
//     var product = 1;
//     // Only change code below this line
  
//   for (var a = 0; a < arr.length; a++) {
//     for (var b = 0; b < arr[a].length; b++) {
//        product *= arr[a][b];
//       }
//     }
  
//     // Only change code above this line
//     return product;
// }
  
//   console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));

  
// // Setup
// var contacts = [
//   {
//       "firstName": "Akira",
//       "lastName": "Laine",
//       "number": "0543236543",
//       "likes": ["Pizza", "Coding", "Brownie Points"]
//   },
//   {
//       "firstName": "Harry",
//       "lastName": "Potter",
//       "number": "0994372684",
//       "likes": ["Hogwarts", "Magic", "Hagrid"]
//   },
//   {
//       "firstName": "Sherlock",
//       "lastName": "Holmes",
//       "number": "0487345643",
//       "likes": ["Intriguing Cases", "Violin"]
//   },
//   {
//       "firstName": "Kristian",
//       "lastName": "Vos",
//       "number": "unknown",
//       "likes": ["JavaScript", "Gaming", "Foxes"]
//   }
// ];


// function lookUpProfile(name, prop){
// // Only change code below this line
// for (var listIndex = 0; listIndex < contacts.length; listIndex++) {
//   if (name === contacts[listIndex].firstName) {
//     if (contacts[listIndex].hasOwnProperty(prop)===true) {
//       return contacts[listIndex][prop];
//   } else {
//       return "No such property";
//     }
//   }
// }
// return "No such contact";
// // Only change code above this line
// }

// console.log(lookUpProfile("Harry", "likes"));


// function randomFraction() {

//   // Only change code below this line

//   return Math.random(0);

//   // Only change code above this line
// }
//  console.log(randomFraction())




// function randomRange(myMin, myMax) {
//   // Only change code below this line
//   return Math.floor(Math.random()*(myMax-myMin+1)+myMin);
//   ;
//   // Only change code above this line
// }

// console.log(randomRange(10, 20))



// function convertToInteger(str) {
//   return parseInt(str) //The parseInt() function parses a string and returns an integer. If the first character in the string can't be converted into a number, then it returns NaN
// }

// console.log(convertToInteger("56"));




// function convertToInteger(str) {
// return parseInt(str, 2); //The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.
// }

// console.log(convertToInteger("10011"));


//Basic JavaScript: Use Recursion to Create a Countdown
// Only change code below this line
// function countdown(n){
//     if (n < 1) {
//         return [];
//     } else {
//         var loopCount = countdown(n-1);
//         loopCount.unshift(n);
//         return loopCount;
//     }
//   }
//   // Only change code above this line
//  console.log(countdown(5));



/*
We have defined a function named rangeOfNumbers with two parameters. The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.
*/
// function rangeOfNumbers(startNum, endNum) {
//     if (endNum < startNum) {
//         return []
//     } else {
//         var recursiveLoop = rangeOfNumbers(startNum, endNum - 1);
//         recursiveLoop.push(endNum);
//         return recursiveLoop;
//     }
//   };

// console.log(rangeOfNumbers(1, 5));

//Use Arrow Functions to Write Concise Anonymous FunctionsPassed
// var magic = function() {
//     return new Date();
//   };

// const magic = () => new Date();
// console.log(magic());

var myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));
