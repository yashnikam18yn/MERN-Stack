const fs=require('fs');

const add = 'om koli added text';

fs.writeFile('./data.txt', add, err => {
  if (err) {
    console.error(err);
  }
  console.log("data added sucessfully into file");
});