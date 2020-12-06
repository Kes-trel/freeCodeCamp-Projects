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

function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
  
  for (var a = 0; a < arr.length; a++) {
    for (var b = 0; b < arr[a].length; b++) {
       product *= arr[a][b];
      }
    }
  
    // Only change code above this line
    return product;
}
  
  console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));

  
