function addOne(x) {
  return x + 1;
}

console.log(addOne(4));
// run node and file name to print the console log

const albums = ["Real Thing", "Angel Dust", "Another Album Example"];

albums.forEach(function (album) {
  console.log(album);
});
// start with a group of albums and to print out each album in the array of albums.
//  this will be for any group of item that you want to do something with the indivual item of the group.


// array method map() 
albums.map(function (album) {
  console.log(album);
});
// This will map over each indivdual item in the group of items 
