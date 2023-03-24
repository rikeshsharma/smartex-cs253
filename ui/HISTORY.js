console.log("details.js loadd");
// get the input field and table
let searchInput = document.getElementById("search-input");
let table = document.getElementsByTagName("table")[0];

//const url='https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=getAllMovement';
function getData(){
  fetch('https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=getAllMovement', {
            method: 'POST'
        })
        .then(response => response.json())
        .then(data => {
            // Handle success or error response from server
            console.log(data.Items.length);
            for(let i=0;i<data.Items.length; ++i){
              if (typeof data.Items[i].address == 'undefined'){
                document.getElementById("place").innerHTML = '';    
              }
              else{
                document.getElementById("place").innerHTML = data.Items[i].address;
              }
              if (typeof data.Items[i].name == 'undefined'){
                document.getElementById("name").innerHTML = '';
              }
              else {
                document.getElementById("name").innerHTML = data.Items[i].name;
              }
              if(typeof data.Items[i].rollno == 'undefined'){
                document.getElementById("roll").innerHTML = '';    
              }
              else {
                document.getElementById("roll").innerHTML = data.Items[i].rollno;
              }
              if( typeof data.Items[i].exitTime == 'undefined'){
                document.getElementById("outTime").innerHTML = '';
              }
              else{
                document.getElementById("outTime").innerHTML = data.Items[i].exitTime;
              }
              if(typeof data.Items[i].roomno == 'undefined'){
                document.getElementById("room").innerHTML = '';
              }
              else{
                document.getElementById("room").innerHTML = data.Items[i].roomno;
              }
              if(typeof data.Items[i].hallno == 'undefined'){
                document.getElementById("hall").innerHTML = '';
              }
              else{
                document.getElementById("hall").innerHTML = data.Items[i].hallno;
              }
            }
            
        })
        .catch(error => {
            console.error(error);
        });
}
getData();
console.log("dfg");
   
// add event listener to the input field
searchInput.addEventListener("keyup", function() {
  let searchText = searchInput.value.toLowerCase();

  // loop through all rows of the table and hide those that don't match the search query
  for (let row of table.rows) {
    let name = row.cells[1].textContent.toLowerCase();
    let room = row.cells[2].textContent.toLowerCase();
    let place = row.cells[3].textContent.toLowerCase();

    if (name.indexOf(searchText) > -1 || room.indexOf(searchText) > -1 || place.indexOf(searchText) > -1) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
});
