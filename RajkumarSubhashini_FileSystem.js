
console.log('Starting my File System module');
const fs=require('fs').promises;


const filesystem={

    
    //Reads the contents of a file and returns a Promise with the file data
    async readFile(filepath){ 
        try{
            const data=await fs.readFile(filepath,'utf-8');
            return data;
        } catch (error){
            throw new Error(`Error reading file: ${error.message}`);
        }
    },

    //Writes data to a file and returns a Promise indicating success or failure
    async writeFile(filepath,data){
        try {
            await fs.writeFile(filepath,data,'utf-8');
            console.log(`File written successfully:${filepath}`);
        }catch (error){
            throw new Error(`Error writing file: ${error.message}`);
        }
    },

    //creates a directory and returns a Promise indicating success or failure
    async createDirectory(dirPath){
        try{
            await fs.mkdir(dirPath,{recursive:true});
            console.log(`Directory created succesSfully: ${dirPath}`);
        }catch (error){
            throw new Error(`Error writing file: ${error.message}`);
        }
    },

    //Checks if file exists in a particular path and returns a boolean
    async fileExists(filepath){
        try{
            await fs.access(filepath);
            return true;
        } catch (error){
            return false;
        }
    },

    //Check if directory exists at the specified path
    async directoryExists(dirPath){
        try{
            await fs.access(dirPath);
            return true;
        }catch (error){
            return false;
        }
    },

   //getting file info
    async getFileInfo(filepath) {
        try {
            const stats = await fs.stat(filepath);
            return stats;
        } catch (error) {
            throw new Error(`Error getting file information: ${error.message}`);
        }
    },

    //reading contents in the directory
    async readDirectory(dirPath) {
        try {
            const files = await fs.readdir(dirPath);
            return files;
        } catch (error) {
            throw new Error(`Error reading directory: ${error.message}`);
        }
    }
    

    
    
}

module.exports=filesystem;
