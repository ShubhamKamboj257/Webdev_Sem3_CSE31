//perform CRUD operation on file using fs(file system) module
const fs = require ("fs");




// part1
//  C - create a file and write file content 
// fs.writeFile("student.txt","this is a student file", (err)=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log("file created");
//     }
// });




// part2
//R-reading a file content
// fs.readFile("student.txt","utf-8",(err, data)=>{
//     if(err) throw err;
//     else{
//  console.log("reading a file content");
//  console.log(data);
//     }
// });






//part3
//U-update the file (append)

// fs.appendFile("student.txt", "  for CSE31 batch", (err)=>{
//     if(err){
//         console.log(err);
//     }
//     else
//     {
//         console.log("file successfully updated");
//     }
// })





// part4
// delete the file
fs.unlink("student.txt",(err)=>{
    if(err) throw err;
})