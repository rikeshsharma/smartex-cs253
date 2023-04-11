alert("script.js loaded");

function login() {
    // get the form data
    const username = document.getElementsByName('username')[0].value;
    const password = document.getElementsByName('password')[0].value;
    console.log("login initiated");
    console.log(username);
    console.log(password);
     fetch('https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=authenticateAdmin', {
      method: 'POST',
      body: JSON.stringify({
          ID : username,
          password : password,
      }),
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
      sessionStorage.setItem("gaurdName",data.gaurdID);
    //   sessionStorage.setItem("gaurdID",data.Item.password);
      window.location.href = 'homepage.html';
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
    console.log("login initiated");
    console.log(username);
    console.log(password);

     // Send the roll no. to the server
     fetch('https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=authenticateAdmin', {
      method: 'POST',
      body: JSON.stringify({
          name : username,
          gaurdID : password,
      }),
    //   headers: {
    //       // 'Content-Type': 'application/json'
    //       // "Access-Control-Allow-Origin": "*"
    //   }
  })
  .then(response => response.json())
  .then(data => {
      // Handle success or error response from server
    //   console.log(data);
      sessionStorage.setItem("gaurdName",username);
      sessionStorage.setItem("gaurdID",password);
      window.location.href = 'admin_db.html';
  })
  .catch(error => {
      console.error(error);
      alert('Invalid Credentials');
  });
  }