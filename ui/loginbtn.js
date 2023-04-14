// Redirect to admin dashboard page
if(document.getElementById("admin-ln")!=null)
document.getElementById("admin-ln").addEventListener("click", function(){
    window.location.href = "admin.html";
  });
if(document.getElementById("guard-ln")!=null)
  document.getElementById("guard-ln").addEventListener("click", function(){
    window.location.href = "index.html";
  });
  
  // Redirect to iit kanpur page
  document.getElementById("kanpur").addEventListener("click", function(){
    window.open("https://www.iitk.ac.in/", "_blank");
  });
  
  // Redirect to need help page
  document.getElementById("need").addEventListener("click", function(){
    window.location.href = "#";
  });
  