const exec = require("child_process").exec
const ask = require("prompt-sync")();
const title = require("console-title");

console.clear();
title("Dont Forget To Subscribe || JS To Exe Coded By Vankz");
const file_name = ask("Your File Name (Example: vankz.js): ");

console.log("Please Wait!");
console.log("Installing Module...");


exec("npm i -g pkg", function (err, stdout) {
    if (err) console.log(err);
    else console.log(stdout);
});
exec("pkg "+ file_name, function (err, stdout) {
    console.clear();
    console.log("Convert To Exe....");
    if (err) console.log(err);
    else {
        console.log(stdout);
        console.log("DONE");
    }
    setTimeout(() => {
        console.clear();   
        title("Dont Forget To Subscribe")
        ask("press any key to exit\n")
    }, 3000);
});