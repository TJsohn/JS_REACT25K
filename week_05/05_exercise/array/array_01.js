/* 
Initial data:*/
let teamMembers = ["John", "Emily", "Mike", "Sarah"];

/*1. Loop through the `teamMembers` array and log each name to the console.  */
teamMembers.forEach((teamMember) => console.log(`Team Member: ${teamMember}`));
/*2. Remove the first member of the array. */
teamMembers.shift();
console.log(teamMembers);
/*3. Remove the last member of the array. */
teamMembers.pop();
console.log(teamMembers);
/*
4. Add a new member "Alex" to the front of the array.  */
teamMembers.unshift("Alex");
console.log(teamMembers);
/*
5. Append a new member "Linda" to the end of the array.  */
teamMembers.push("Linda");
console.log(teamMembers);
/*
6. Create a new array that excludes the first two members, keeping the original array unchanged.  */
let someTeamMembers = teamMembers.slice(0, 2);
console.log(someTeamMembers);
console.log(teamMembers);
/*
7. Find the index of "Mike" in the array.  */
console.log(teamMembers.indexOf("Mike"));

/*
8. Try to find the index of "Jake" (who is not in the array).  */
console.log(teamMembers.indexOf("Jake"));
/*
9. Replace "Mike" with "Carol" and "Bruce" in the same position. */
teamMembers.splice(2, 1, "Carol", "Bruce");
console.log(teamMembers);
/*
10. Concatenate "Bob" to the array and create a new array, keeping the original array unchanged.  */
const combined = teamMembers.concat("Bob");
console.log(combined);
/*
11. Copy the entire `teamMembers` array using `slice` and store it in a new variable.  
*/
let entireTeamMembers = teamMembers.slice(0, 5);
console.log(entireTeamMembers);
/*
12. Create a `newMembers` array with `"Tina"` and `"Dean"`, then merge it with `teamMembers` into a new array.  */
let newMembers = ["Tina", "Dean"];
const mergedMembers = teamMembers.concat(newMembers);
console.log(mergedMembers);
/*
13. Find all occurrences of "John" in the array and store their positions in a new array.  */
function findOccurences(mergedMembers, target) {
  return merged.reduce((positions, element, index) => {
    if (element === target) {
      positions.push(index);
    }
    return positions;
  }, []);
}

let result = findOccurences(mergedMembers, "John");

console.log(result);
/*
14. Transform all names in the array to be uppercase while keeping the original array unchanged.  */
const capitalizedNames = mergedMembers.map((mergedMember) =>
  mergedMember.toUpperCase()
);
console.log(capitalizedNames);
/*
15. Sort `teamMembers` in alphabetical order.  */
teamMembers.sort();
console.log(teamMembers);
/*
16. Reverse the `teamMembers` array.  */
const reversed = teamMembers.reverse();
console.log(teamMembers);
/*
17. Check if at least one member in the array is named "John".  */
const hasJohn = teamMembers.some((teamMember) => teamMember === "John");
console.log(hasJohn);
/*
18. Check if all names in the array have more than three letters. 
*/
const overThreeLetters = (teamMember) => teamMember.length > 3;
console.log(teamMembers.every(overThreeLetters));
