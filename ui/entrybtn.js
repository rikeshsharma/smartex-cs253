
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

  //redirect to manual page
  $(document).ready(function() {
    $('#manual-btn').click(function() {
      window.location.href = 'manual.html';
    });
  });
  