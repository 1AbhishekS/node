const fs=require('fs')
// for create file and write content
fs.writeFileSync("notes.txt","My name is Abhishek ")

// for append data inside file
fs.appendFileSync("notes.txt",'Srivastava and I am a software Devloper')