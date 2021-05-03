//spread operator
// https://dev.to/sagar/three-dots---in-javascript-26ci


// old system to add an array
const ages = [ 15,20,25,30 ];
const ages2 = [8,6,30];
const newAges = ages.concat(ages2);
console.log(newAges);

// new system to add an array
const ages3 = [ 15,20,25,30 ];
const ages4 = [8,6,30];
const newAges2 =[...ages3, ...ages4,] ;
console.log(newAges2);

//old & new system to know the maximum in the array

const businessMan = 650;
const ministar = 500;
const sochib = 700;

//old system
const maximum = Math.max(businessMan,ministar,sochib);

//new system
const takaPoisha = [650,500,700];
const maximum2 = Math.max(...takaPoisha);
console.log(maximum2);