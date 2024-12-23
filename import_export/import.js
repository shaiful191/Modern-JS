//Named import: Should be same name as the export file variable name
//Default import: variable name can be anything, when it import.

// import * as test from "./export.js"; //all import incase if we don't know  any variable name in export.js file
import yourname, { PI ,a } from "./export.js"; 

// console.log(test);
console.log(PI, a);
console.log(yourname); 
