const fs=require('fs');

const add = 'mayuresh bhosale';

fs.writeFile('./data.txt', add, err => {
  if (err) {
    console.error(err);
  }
  console.log("data added sucessfully into file");
});