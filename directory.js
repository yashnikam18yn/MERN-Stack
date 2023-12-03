const fs = require('fs');

const directoryPath = './experiments'; // Replace with the path of the directory you want to read

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  console.log('Contents of the directory:');

  files.forEach((file, index) => {
    console.log(`${index + 1}. ${file}`);
  });
});
