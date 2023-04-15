// function changePassword(){
//     let username = document.getElementById('username').value;
//     let newPassword = document.getElementById('newPassword').value;
//     let confirmPassword = document.getElementById('newPassword').value;

//     if(newPassword != confirmPassword){
//         window.alert("Password and confirm password fields do not match. update failed !!!");
//         return;
//     }
//     if(newPassword.length < 6){
//         window.alert("Password must be atleast 6 character long");
//         return;
//     }

//     let password = newPassword;

//     fetch('https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=changePassword', {
//         method: 'POST',
//         body: JSON.stringify({
//             ID : username,
//             password : password,
//         }),
//         headers: {
//             // 'Content-Type': 'application/json'
//             // "Access-Control-Allow-Origin": "*"
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         // Handle success or error response from server
//         // console.log(data);
//         window.alert("Password updated successfully!");
//         window.location.href = "admin_db.html";
//     })
//     .catch(error => {
//         console.error(error);
//         window.alert("Password updatation failed server error");
//     });
// }
