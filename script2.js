// let yourName="Samantha";
// if(confirm("Are you "+ yourName + "?")){
// 	console.log("Hello " + yourName);
// }else{
// 	console.log("Then what is your name?");
// }

// let num1 = 10;
// let num2 = 2;

// if(num1 < num2){
//     // if you get here, the statement was true
// 	console.log("num1 is smaller than num2");
// }else{
//     console.log("num2 is smaller than num1");
// }

// let num1 = 1;
// let num2 = 2;
// let num3 = 3;
// let notTrue = false;

// if(num1<num2 && num3>num2){
// 	console.log("num1 is smaller than num2 AND num3 is larger than num2");
// }

// if(num1 == 1 || num2 == 1 || num3 == 1){
// 	console.log("num1 is 1 OR num2 is 1 OR num3 is 1");
// }

// if(!notTrue){
// 	console.log("not not true is true!");
// }

//Exercise 
// create a simple login using the prompt
// 1) get from the prompt and store the var email.
let userEmail=prompt("Enter your email: ");
// 2) get from the prompt and store the var password.
let password = prompt("Enter your password: ");
// 3) display on the console the values (email and pass)
console.log(userEmail,password);
// 4) create a if statement to know if the email is equals to admin@admin.com
// and the pass should be Test1234
if(userEmail=="admin@admin.com" && password=="Test1234"){
    // 5) if the email and pass are correct you should display on the HTML the next mesage:
    //Welcome + email 
    document.write("Welcome " + userEmail);
}else{
    // 6) if the credentials are not correct you should display on the console 
    //invalid credentials.
    document.write("Invalid credentials");
}





