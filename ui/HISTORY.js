if(gaurdName1==null||gaurdName1 === "noname"){
  window.location.href = "index.html";
}
console.log("details.js loadd");
// get the input field and table
let searchInput = document.getElementById("search-input");
let table = document.getElementsByTagName("table")[0];

//const url='https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=getAllMovement';
function getData(){
  let s_no=1;
  fetch('https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=getAllMovement', {
            method: 'POST'
        })
        .then(response => response.json())
        .then(data => {
            // Handle success or error response from server
            console.log(data);
            let tab = ``;
            const tbody = document.querySelector("tbody");
            console.log('asdfsdf123');
            console.log(typeof(data.Items[0].rollno));
            
            for(let i=0;i<data.Items.length; ++i){
              
                
                 tab += `<tr><td>${s_no}</td>`;
                 ++s_no;
                
                
                if (typeof data.Items[i].rollno == 'undefined'){
                  // table.rows[i+1].cells[j].innerHTML = '';
                  tab += `<td>${''}</td>`;

                }
                else if (typeof data.Items[i].rollno != 'undefined' ){
                  // table.rows[i+1].cells[j].innerHTML = data.Items[i].name.concat('/ ',data.Items[i].rollno);
                  let temp = data.Items[i].rollno.toString();
                  tab += `<td>${temp.concat('/ ',data.Items[i].name)}</td>`;
                  // tab += `<td>${''}</td>`;
                  
                }
                if(typeof data.Items[i].roomno == 'undefined'){
                  tab += `<td>${''}</td>`;
                  // table.rows[i+1].cells[j].innerHTML = '';
                  
                }
                else if (typeof data.Items[i].roomno != 'undefined' ){
                  // table.rows[i+1].cells[j].innerHTML = data.Items[i].roomno.concat('/',data.Items[i].hallno);
                  tab += `<td>${data.Items[i].roomno.concat('/',data.Items[i].hallno)}</td>`;
                  
                }
                if (typeof data.Items[i].placeOfVisit == 'undefined'){
                  // table.rows[i+1].cells[j].innerHTML = '';  
                  tab += `<td>${''}</td>`;
                  
                }
                else if (typeof data.Items[i].placeOfVisit != 'undefined'){
                  // table.rows[i+1].cells[j].innerHTML = data.Items[i].address;
                  tab += `<td>${data.Items[i].placeOfVisit}</td>`;
                }
                if( typeof data.Items[i].time == 'undefined' ){
                  // table.rows[i+1].cells[j].innerHTML = '';
                  tab += `<td>${''}</td>`;
                
                }
                else if( typeof data.Items[i].time != 'undefined' ){
                  tab += `<td>${data.Items[i].date.concat('_',data.Items[i].time)}</td>`;
                  // table.rows[i+1].cells[j].innerHTML = data.Items[i].exitTime;
                
                }            
                tab += `<td><button type="button" class="btn btn-primary btn-sm" id="edit-form">Edit</button></td>
                <td><button type="button" class="btn btn-danger btn-sm" id="delete-form">Delete</button></td>
     </tr>`;
            }
            tbody.innerHTML += tab;
            
        })
        .catch(error => {
            console.error(error);
        });

        fetch('https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=getAllExitdata', {
          method: 'POST'
      })
      .then(response => response.json())
      .then(data => {
          // Handle success or error response from server
          console.log("all Exit data");
          console.log(data);
          let tab = ``;
          const tbody = document.querySelector("tbody");
          console.log(typeof(data.Items[0].rollno));
          for(let i=0;i<data.Items.length; ++i){
               tab += `<tr><td>${s_no}</td>`;
               ++s_no;
              if (typeof data.Items[i].rollno == 'undefined'){
                // table.rows[i+1].cells[j].innerHTML = '';
                tab += `<td>${''}</td>`;

              }
              else if (typeof data.Items[i].rollno != 'undefined' ){
                // table.rows[i+1].cells[j].innerHTML = data.Items[i].name.concat('/ ',data.Items[i].rollno);
                let temp = data.Items[i].rollno.toString();
                tab += `<td>${temp.concat('/ ',data.Items[i].name)}</td>`;
                // tab += `<td>${''}</td>`;
                
              }
              if(typeof data.Items[i].roomno == 'undefined'){
                tab += `<td>${''}</td>`;
                // table.rows[i+1].cells[j].innerHTML = '';
                
              }
              else if (typeof data.Items[i].roomno != 'undefined' ){
                // table.rows[i+1].cells[j].innerHTML = data.Items[i].roomno.concat('/',data.Items[i].hallno);
                tab += `<td>${data.Items[i].roomno.concat('/',data.Items[i].hallno)}</td>`;
                
              }
              if (typeof data.Items[i].address == 'undefined'){
                // table.rows[i+1].cells[j].innerHTML = '';  
                tab += `<td>${''}</td>`;
                
              }
              else if (typeof data.Items[i].address != 'undefined'){
                // table.rows[i+1].cells[j].innerHTML = data.Items[i].address;
                tab += `<td>${data.Items[i].address}</td>`;
              }
              if( typeof data.Items[i].time == 'undefined' ){
                // table.rows[i+1].cells[j].innerHTML = '';
                tab += `<td>${''}</td>`;
              
              }
              else if( typeof data.Items[i].time != 'undefined' ){
                tab += `<td>${data.Items[i].time}</td>`;
                // table.rows[i+1].cells[j].innerHTML = data.Items[i].exitTime;
              
              }            
              tab += `<td><button type="button" class="btn btn-primary btn-sm" id="edit-form">Edit</button></td>
              <td><button type="button" class="btn btn-danger btn-sm" id="delete-form">Delete</button></td>
   </tr>`;
          }
          tbody.innerHTML += tab;
          
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
