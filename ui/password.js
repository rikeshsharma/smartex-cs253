

function changePassword(){

  // Get the input values
  let guardID = document.getElementById('id').value;
  let newPassword = document.getElementById('newPassword').value;
  let confirmPassword = document.getElementById('confirmPassword').value;
 
      // Validate the input values
  if (id === "") {
    alert("Please enter a valid ID !!!");
    return;
  }

  if (newPassword.length == 0 || confirmPassword.length ==0) {
    alert("Please enter a valid new password or confirm password !!!");
    return;
  }

  if(newPassword.length < 6){
     window.alert("Password must be atleast 6 character long !!!");
     return;

}

  if (newPassword != confirmPassword) {
    window.alert("New password and confirm password fields do not match. Update failed !!!");
    return;
  }
    
     let password = newPassword;
 
         // sent the new password and guard id to the server for further action
         fetch('https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=changePassword', {
 
         method: 'POST',
         body: JSON.stringify({
 
          ID : guardID,
          password : password,
 
    }),
 
      headers: {
 
      // 'Content-Type': 'application/json'
      // "Access-Control-Allow-Origin": "*"
 
   }
   })
 
  .then(response => response.json())
  .then(data => {
 
      // Handle success or error response from server
      // console.log(data);
 
       window.alert("Password updated successfully !!!");
       window.location.href = 'admin_db.html';
   })
 
  .catch(error => {
      console.error(error);
       window.alert("Password updatation failed server error. Please try again !!!");
    });
}
