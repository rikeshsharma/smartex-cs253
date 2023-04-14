let login_status = sessionStorage.getItem("login_successful");
let login_type = sessionStorage.getItem("Authorization_type");

if(login_status !== 'true'){
  alert(login_status);
  window.location.href = "index.html";
}