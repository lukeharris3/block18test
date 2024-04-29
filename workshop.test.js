const {logIn, createAccount,signGoogle} = require("../index.js");

test('was logging in successful?', ()=>{
    expect(logIn("luke", "")).toBeFalsy();
    expect(logIn("", "pass")).toBeFalsy();
    expect(logIn("", "")).toBeFalsy();
    expect(logIn("luke", "pass")).toBeTruthy();
})
//test('LogIn was successful!',()=>{
   //expect(logIn("luke","pass")).toBeTruthy
//})  
    
test('Login was not successful. Would you like to sign up?',()=>{
   // checking for the exact same thing
    expect(logIn("ted", "pass")).not.toBeTruthy();
    expect(logIn("ted", "pass")).toBeFalsy();
})

test('Entered no information. No account created', ()=>{
    expect(createAccount("","")).toBeFalsy(); 
})

test('Invailed Email or Password. Please try again!', ()=>{
    expect(createAccount("codingSucks@gmail.com","word"));
    expect(createAccount("codingRocks@gmail.com","wrong"));
})

test('Account was successfully created! Please continue to Dashboard!',()=>{
    expect(createAccount("codingRocks@gmail.com","word"));
})

test('Google Account Sign In',()=>{
    expect(signGoogle("H3H3","DRAKE"));
})