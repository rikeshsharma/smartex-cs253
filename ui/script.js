//alert("script.js loaded");

function login() {
    // get the form data
    const username = document.getElementsByName('username')[0].value;
    const password = document.getElementsByName('password')[0].value;
    // console.log("login initiated");
    // console.log(username);
    // console.log(password);
    if(username.length === 0){
        window.alert("Username field is empty");
        return;
    }
    if(username.length > 35){
        window.alert("Username is too long");
        return;
    }
    if(password.length === 0){
        window.alert("Password field is empty");
        return;
    }
    let encryptedPassword = encrypt(password, username);
     fetch('https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=authenticateAdmin', {
      method: 'POST',
      body: JSON.stringify({
          ID : username,
          password : encryptedPassword,
      }),
  })
  .then(response => response.json())
  .then(data => {
    // console.log(data);
    if(encryptedPassword === data.password){
      sessionStorage.setItem("gaurdID",data.gaurdID);
      sessionStorage.setItem("login_successful",true);
      sessionStorage.setItem("Authorization_type",data.type);
    //   sessionStorage.setItem("gaurdID",data.Item.password);
      window.location.href = 'homepage.html';
    }
    else{
      window.alert("Incorrect Username or Password");
    }
  })
  .catch(error => {
      console.error(error);
      alert('Invalid Credentials');
  });
  }
  
  function loginAdmin() {
    // get the form data
    const username = document.getElementsByName('username')[0].value;
    const password = document.getElementsByName('password')[0].value;
    // console.log("login initiated");
    // console.log(username);
    // console.log(password);
    if(username.length === 0){
        window.alert("Username field is empty");
        return;
    }
    if(username.length > 35){
        window.alert("Username is too long");
        return;
    }
    if(password.length === 0){
        window.alert("Password field is empty");
        return;
    }
    let encryptedPassword = encrypt(password, username);
     // Send the roll no. to the server
     fetch('https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=authenticateAdmin', {
      method: 'POST',
      body: JSON.stringify({
          ID : username,
          password : encryptedPassword,
      }),
    //   headers: {
    //       // 'Content-Type': 'application/json'
    //       // "Access-Control-Allow-Origin": "*"
    //   }
  })
  .then(response => response.json())
  .then(data => {
      // Handle success or error response from server
      // console.log(data);
    if(encryptedPassword===data.password){
      sessionStorage.setItem("gaurdID",data.gaurdID);
      // sessionStorage.setItem("gaurdID",password);
      sessionStorage.setItem("login_successful",true);
      sessionStorage.setItem("Authorization_type",data.type);
      // alert("wait");
      window.location.href = 'admin_db.html';
    }
    else{
      window.alert("Incorrect Username or Password");
    }
  })
  .catch(error => {
      console.error(error);
      alert('Invalid Credentials');
  });
  }

  function encrypt(text,ID){
    // let text = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let key = "drpalaka";
    let digitSize = 10;
    let alphabetSize = 26;
    let encryptedPassword = "";
    // let ID = "jdhoiABY123";
    let n = text.length;

    for(let i = 0; i<n; i++){
        
        let path = "_";
        
        let textCode = 0;
        if(text.charCodeAt(i)>=97 && text.charCodeAt(i)<=122){
            textCode = text.charCodeAt(i) - 97;
            path = path +"1";
        }
        else if(text.charCodeAt(i)>=65 && text.charCodeAt(i)<=90){
            textCode = text.charCodeAt(i) - 65;
            path = path +"2";

        }
        else if(text.charCodeAt(i)>=48 && text.charCodeAt(i)<=57){
            textCode = text.charCodeAt(i) - 48;
            path = path +"3";
        }
        
        let offset = 0;
        if(i < ID.length){
            if(ID.charCodeAt(i)>=97 && ID.charCodeAt(i)<=122){
                offset = ID.charCodeAt(i) - 97;
                path = path +"1";

            }
            else if(ID.charCodeAt(i)>=65 && ID.charCodeAt(i)<=90){
                offset = ID.charCodeAt(i) - 65;
                path = path +"2";

            }
            else if(ID.charCodeAt(i)>=48 && ID.charCodeAt(i)<=57){
                offset = ID.charCodeAt(i) - 48;
                path = path +"3";

            }
        }
        else{
            let j = i % key.length;
            if(key.charCodeAt(j)>=97 && key.charCodeAt(j)<=122){
                offset = key.charCodeAt(j) - 97;
                path = path +"1";
            }
            else if(key.charCodeAt(j)>=65 && key.charCodeAt(j)<=90){
                offset = key.charCodeAt(j) - 65;
                path = path +"2";
            }
            else if(key.charCodeAt(j)>=48 && key.charCodeAt(j)<=57){
                offset = key.charCodeAt(j) - 48;
                path = path +"3";
            }
        }

        let passwordCode = 0;
        if(path === "_11"){
            passwordCode = (textCode + offset)%alphabetSize + 97;
        }
        else if(path === "_12"){
            passwordCode = (textCode + offset)%alphabetSize + 65;
        }
        else if(path === "_13"){
            passwordCode = (textCode + offset)%digitSize + 48;
        }
        else if(path === "_21"){
            passwordCode = (textCode + offset)%alphabetSize + 97;
        }
        else if(path === "_22"){
            passwordCode = (textCode + offset)%alphabetSize + 65;
        }
        else if(path === "_23"){
            passwordCode = (textCode + offset)%digitSize + 48;
        }
        else if(path === "_31"){
            passwordCode = (textCode + offset)%alphabetSize + 97;
        }
        else if(path === "_32"){
            passwordCode = (textCode + offset)%alphabetSize + 65;
        }
        else if(path === "_33"){
            passwordCode = (textCode + offset)%digitSize + 48;
        }
        else{
            // console.log("encryption failed !!!");
        }
        // console.log(path);
        // console.log(passwordCode);
        let passwordChar = String.fromCharCode(passwordCode);
        // console.log(passwordChar);
        encryptedPassword = encryptedPassword + passwordChar;
        // let x = Math.floor((Math.random() * 100) + 33);
        // if(x >= 123){
        //     x = 122;
        // }
        // encryptedPassword = encryptedPassword + String.fromCharCode(x);
    }
    // console.log("encrypted password: ",encryptedPassword);
    // rollNo = 180606
    // 123=='123'
    // 123==='123'
    // if(typeof rollNo === 'number'){
    //     // console.log(rollNo);
    // }
    return encryptedPassword;
}