// let doesnot allow re-declaration and shadowing
// is block scoped
// needs to be declared before used

var index = 0;
for (var index = 0; index < 5; index++) {
  console.log(`Index inside the for loop: ${index}`);
}

// this should be '0' but
console.log(`Index outside the for loop: ${index}`);


// Fixed using let
let letIndex = 0;
for (let indexInternal = 0; indexInternal < 5; indexInternal++) {
  console.log(`Index inside the for loop: ${indexInternal}`);
}

// this should be '0' but
console.log(`Index outside the for loop: ${letIndex}`);
