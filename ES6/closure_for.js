// function celebrityIDCreator(theCelebrities) {
//   var i;
//   var uniqueID = 100;
//   console.log("Open");
//   for (i = 0; i < theCelebrities.length; i++) {
//     console.log("lan"+i);
//     theCelebrities[i]["id"] = function ()  {
//     	console.log("alo "+ (uniqueID + i));
//     return uniqueID + i;
//       }
//     }
    
//     return theCelebrities;
// }
// var actionCelebs = [{name:"Stallone", id:0},{name:"Cruise", id:0},{name:"Willis", id:0}];
// var createIdForActionCelebs = celebrityIDCreator(actionCelebs);
// var stalloneID = createIdForActionCelebs [0];
// console.log(stalloneID.id()); 
var funcs = [];
for (var i = 0; i < 3; i++) {
	console.log("First value: " + i);
  funcs[i] = function() {
    console.log("My value: " + i);// tham chieu den i, not value 
  };
  console.log("Second value: " + i);
}
for (var j = 0; j < 3; j++) {
  funcs[j]();
}