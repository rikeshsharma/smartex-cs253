let gaurdName1 = sessionStorage.getItem("gaurdName");
let gaurdID1 = sessionStorage.getItem("gaurdID");
console.log(gaurdName1);
if(gaurdName1==null||gaurdName1 === "noname"){
  window.location.href = "index.html";
}
//console.log(gaurd);
// Redirect to Entry/Exit page
document.getElementById("entryButton").addEventListener("click", function() {
    window.location.href = "homepage.html";
  });

  // Redirect to History page
 
  document.getElementById("historyButton").addEventListener("click", function() {
    window.location.href = "history.html";
  });
  
  // Redirect to Credits page
  document.getElementById("creditButton").addEventListener("click", function() {
    window.location.href = "credits.html";
  });

  // Redirect to Logout page
  document.getElementById("logOutButton").addEventListener("click", function() {
    window.location.href = "index.html";
  });