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



function checkObj(obj, checkProp) {
    // Only change code below this line
    if(obj.hasOwnProperty(checkProp)==true) {
      return obj[checkProp];
    } else {
      return "Not Found";
    }
    // Only change code above this line
  }

  console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"))
