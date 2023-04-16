let login_status = sessionStorage.getItem("login_successful");
let login_type = sessionStorage.getItem("Authorization_type");
let login_ID = sessionStorage.getItem("gaurdID");
// console.log(login_status, " ", login_type);
// alert(wait);
if(login_ID=='undefined' || login_ID==undefined || login_ID==null || login_ID=="null" || login_status !== 'true' || login_type !=='A'){
  window.location.href = "index.html";
}