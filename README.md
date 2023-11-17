# FileSystem module
This Node.js module provides a set of utility functions for common file system operations, such as reading and writing files, creating directories and checking if the newly created file and directory exists. 

# Usage
To use this module , use require in app.js to import the file and use all the functions from FileSystem module

// Importing the file system module
const filesystem = require('my-file-system-module');

// Example: Reading a file
filesystem.readFile('path/to/file.txt')
  .then(data => console.log('File content:', data))
  .catch(error => console.error('Error:', error.message)); //returns content of the file if not returns an error message saying error reading file

// Example: Writing to a file
filesystem.writeFile('path/to/new-file.txt', 'Hello, File System!')
  .catch(error => console.error('Error:', error.message)); //writes data into a new file if not returns a error message saying error writing into a file

// Example: Creating a directory
filesystem.createDirectory('path/to/new-directory')
  .catch(error => console.error('Error:', error.message)); //creates a new directory if not returns a error message if it is not created

// Example: Checking if a file exists
const fileExists = await filesystem.fileExists('path/to/existing-file.txt');
console.log('File exists:', fileExists); //returns true if it exists

// Example: Checking if a directory exists
const directoryExists = await filesystem.directoryExists('path/to/existing-directory');
console.log('Directory exists:', directoryExists); //returns true if it exists

//Example: Getting file stats
const fileinfo=await filesystem.getFileInfo('path/to/existing-file.txt');
console.log(fileinfo) //return an array of information about the file

//Example: Reading multiple contents in a directory
directory='path/to/existing-directory'
const readDirContent=await filesystem.readDirectory(directory);
console.log('Contents in directory:'+readDirContent) //returns content in a directory

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
getFileInfo(filepath):
    -Gets the stats of a particular file
readDirectory(dirPath):
    -Reads the content of specified directory path and returns the different file names in the directory


