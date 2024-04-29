// npm i jest      (i=install)

function logIn(username, password){
    
    
    if(username.length===0 || password.length===0){
        return false
    }else if (username==="luke"&&password==="pass"){
        return true
    }else{
        return false
    }
}

function createAccount(emailAddy,AccPass){
    if(emailAddy.length===0 || AccPass.length===0){
        return false
    }else if (emailAddy==="codingRocks@gmail.com"&&AccPass==="word"){
        return true
    }else{
        return false
    }
}

function signGoogle(googAcc,googPass){
    if(googAcc.length===0 || googPass.length===0){
        return false
    }else if (googAcc==="H3H3"&&googPass==="DRAKE"){
        return true
    }else{
        return false
    }  
}

module.exports = {logIn, createAccount, signGoogle}