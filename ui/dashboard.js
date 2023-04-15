//console.log(gaurd);

  // Get the button
const changeGuardPasswordBtn = document.getElementById("guard_pw_btn");
const changeAdminPasswordBtn = document.getElementById("admin_pw_btn");
const addAdminGuardBtn = document.getElementById("add_admin_guard_btn");

// Add click event listeners to the buttons
// Redirect to guard_pw page for changing guard password
changeGuardPasswordBtn.addEventListener('click', () => {
  window.location.href = 'guard_pw.html';
});
// Redirect to admin_pw page for changing admin password
changeAdminPasswordBtn.addEventListener('click', () => {
  window.location.href = 'admin_pw.html';
});
// Redirect to newadmin page ot add new admin
addAdminGuardBtn.addEventListener('click', () => {
  window.location.href = 'newadmin.html';
});