const gaurdName = sessionStorage.getItem("gaurdName");
const gaurdID = sessionStorage.getItem("gaurdID");
console.log(gaurdName);
if(gaurdName==null||gaurdName === "noname"||gaurdName==undefined||gaurdName=="undefined"){
  window.location.href = "index.html";
}
//console.log(gaurd);
// Redirect to Entry/Exit page
document.querySelector(".nav-item:nth-child(1)").addEventListener("click", function() {
    window.location.href = "homepage.html";
  });

  // Redirect to History page
 
  document.querySelector(".nav-item:nth-child(2)").addEventListener("click", function() {
    window.location.href = "history.html";
  });
  
  // Redirect to Credits page
  document.querySelector(".nav-item:nth-child(3)").addEventListener("click", function() {
    window.location.href = "credits.html";
  });

  // Redirect to Logout page
  document.querySelector(".nav-item:nth-child(4)").addEventListener("click", function() {
    window.location.href = "index.html";
  });

  //redirect to manual page
  $(document).ready(function() {
    $('#manual-btn').click(function() {
      window.location.href = 'manual.html';
    });
  });
  