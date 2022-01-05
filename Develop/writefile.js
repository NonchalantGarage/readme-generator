const fs = require('fs');

const writeFile = readmeContent => {
    return new Promise ((resolve, reject) =>{
        fs.writeFile('../dist/README.md',readmeContent, err=>{
            if (err)
                reject(err)
                return;
            })
            resolve({
                ok: true,
                message: "README file created"
            });
    });
};

module.exports = {
    writeFile: writeFile
}