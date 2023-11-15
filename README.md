# FileSystem module
This Node.js module provides a set of utility functions for common file system operations, such as reading and writing files, creating directories and checking if the newly created file and directory exists. 

# Usage
To use this module , use require in app.js to import the file and use all the functions from FileSystem module

// Importing the file system module
const filesystem = require('my-file-system-module');

// Example: Reading a file
filesystem.readFile('path/to/file.txt')
  .then(data => console.log('File content:', data))
  .catch(error => console.error('Error:', error.message));

// Example: Writing to a file
filesystem.writeFile('path/to/new-file.txt', 'Hello, File System!')
  .catch(error => console.error('Error:', error.message));

// Example: Creating a directory
filesystem.createDirectory('path/to/new-directory')
  .catch(error => console.error('Error:', error.message));

// Example: Checking if a file exists
const fileExists = await filesystem.fileExists('path/to/existing-file.txt');
console.log('File exists:', fileExists);

// Example: Checking if a directory exists
const directoryExists = await filesystem.directoryExists('path/to/existing-directory');
console.log('Directory exists:', directoryExists);

# APIS that are used

readFile(filePath):
    -Reads the file of the contents of a file and returns a Promise with the file data
writeFile(filePath,data):
    -Writes data to a file and returns a Promise indicating success or failure
createDirectory(dirPath):
    -creates a new directory path and returns a Promise indicating success or failure
fileExists(filepath):
    -Checks if a file exists at a particular path and returns a boolean
directoryExists(dirPath):
    -Check if a directory exists at the specified path and returns a boolean


