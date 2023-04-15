let login_status = sessionStorage.getItem("login_successful");
let login_type = sessionStorage.getItem("Authorization_type");
// console.log(login_status, " ", login_type);
// alert(wait);
if(login_status !== 'true' && login_type !=='A'){
  window.location.href = "index.html";
}