let login_status = sessionStorage.getItem("login_successful");
let login_type = sessionStorage.getItem("Authorization_type");
let login_ID = sessionStorage.getItem("gaurdID");

if(login_ID=='undefined' || login_ID==undefined || login_ID==null ||login_ID=="null" || login_status !== 'true'){
  // alert(login_status);
  window.location.href = "index.html";
}