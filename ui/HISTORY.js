// console.log("details.js loadd");
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
            // console.log(data);
            studentExitCount = data.Count;
            
            let tab = ``;
            const tbody = document.querySelector("tbody");
            // console.log('asdfsdf123');
            // console.log(typeof(data.Items[0].rollno));
            
            for(let i=0;i<data.Items.length; ++i){
              
                
              tab += `<tr id='row_${s_no}'><td>${s_no}</td>`;
              
                
                
                if (typeof data.Items[i].rollno == 'undefined'){
                  // table.rows[i+1].cells[j].innerHTML = '';
                  tab += `<td>${''}</td>`;

                }
                else if (typeof data.Items[i].rollno != 'undefined' ){
                  // table.rows[i+1].cells[j].innerHTML = data.Items[i].name.concat('/ ',data.Items[i].rollno);
                  let temp = data.Items[i].rollno.toString();
                  tab += `<td id='nameRollNo_${s_no}'>${temp.concat('/',data.Items[i].name)}</td>`;
                  // tab += `<td>${''}</td>`;
                  
                }
                if(typeof data.Items[i].roomno == 'undefined'){
                  tab += `<td>${''}</td>`;
                  // table.rows[i+1].cells[j].innerHTML = '';
                  
                }
                else if (typeof data.Items[i].roomno != 'undefined' ){
                  // table.rows[i+1].cells[j].innerHTML = data.Items[i].roomno.concat('/',data.Items[i].hallno);
                  tab += `<td id='roomNoHallNo_${s_no}'>${data.Items[i].roomno.concat('/',data.Items[i].hallno)}</td>`;
                  
                }
                if (typeof data.Items[i].placeOfVisit == 'undefined'){
                  // table.rows[i+1].cells[j].innerHTML = '';  
                  tab += `<td>${''}</td>`;
                  
                }
                else if (typeof data.Items[i].placeOfVisit != 'undefined'){
                  // table.rows[i+1].cells[j].innerHTML = data.Items[i].address;
                  tab += `<td id='placeOfVisit_${s_no}'>${data.Items[i].placeOfVisit}</td>`;
                }
                if( typeof data.Items[i].time == 'undefined' ){
                  // table.rows[i+1].cells[j].innerHTML = '';
                  tab += `<td>${''}</td>`;
                
                }
                else if( typeof data.Items[i].time != 'undefined' ){
                  tab += `<td id='time_${s_no}'>${data.Items[i].date.concat('_',data.Items[i].time)}</td>`;
                  // table.rows[i+1].cells[j].innerHTML = data.Items[i].exitTime;
                
                } 

                tab += `<td>Out</td><td><button type="button" class="btn btn-danger btn-sm" id="delete-form" onclick = "initializeDelete(${s_no})">Delete</button>
                <button type="button" class="btn btn-primary btn-sm" id="edit-form" onclick="initializeEdit(${s_no})">Edit</button></td></tr>`;
                ++s_no;
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
          // console.log(data);
          studentEntryCount = data.Count;
          let tab = ``;
          const tbody = document.querySelector("tbody");
          // console.log(typeof(data.Items[0].rollno));
          for(let i=0;i<data.Items.length; ++i){
               tab += `<tr id='row_${s_no}'><td>${s_no}</td>`;
               if (typeof data.Items[i].rollno == 'undefined'){
                 // table.rows[i+1].cells[j].innerHTML = '';
                tab += `<td>${''}</td>`;
                
              }
              else if (typeof data.Items[i].rollno != 'undefined' ){
                // table.rows[i+1].cells[j].innerHTML = data.Items[i].name.concat('/ ',data.Items[i].rollno);
                let temp = data.Items[i].rollno.toString();
                tab += `<td id='nameRollNo_${s_no}'>${temp.concat('/',data.Items[i].name)}</td>`;
                // tab += `<td>${''}</td>`;
                
              }
              if(typeof data.Items[i].roomno == 'undefined'){
                tab += `<td>${''}</td>`;
                // table.rows[i+1].cells[j].innerHTML = '';
                
              }
              else if (typeof data.Items[i].roomno != 'undefined' ){
                // table.rows[i+1].cells[j].innerHTML = data.Items[i].roomno.concat('/',data.Items[i].hallno);
                tab += `<td id='roomNoHallNo_${s_no}'>${data.Items[i].roomno.concat('/',data.Items[i].hallno)}</td>`;
                
              }
              if (typeof data.Items[i].placeOfVisit == 'undefined'){
                // table.rows[i+1].cells[j].innerHTML = '';  
                tab += `<td>${''}</td>`;
                
              }
              else if (typeof data.Items[i].placeOfVisit != 'undefined'){
                // table.rows[i+1].cells[j].innerHTML = data.Items[i].address;
                tab += `<td id='placeOfVisit_${s_no}'>${data.Items[i].placeOfVisit}</td>`;
              }
              if( typeof data.Items[i].time == 'undefined' ){
                // table.rows[i+1].cells[j].innerHTML = '';
                tab += `<td>${''}</td>`;
                
              }
              else if( typeof data.Items[i].time != 'undefined' ){
                tab += `<td id='time_${s_no}'>${data.Items[i].time}</td>`;
                // table.rows[i+1].cells[j].innerHTML = data.Items[i].exitTime;
                
              }            
              tab += `<td>In</td><td><button type="button" class="btn btn-danger btn-sm" id="delete-form" onclick = "initializeDelete(${s_no})">Delete</button><button type="button" class="btn btn-primary btn-sm" id="edit-form" onclick = "initializeEdit(${s_no})">Edit</button></td>
              </tr>`;
              ++s_no;
          }
          tbody.innerHTML += tab;
          
      })
      .catch(error => {
          console.error(error);
      });   



      fetch('https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=getAllGeneralMovement', {
            method: 'POST'
        })
        .then(response => response.json())
        .then(data => {
            // Handle success or error response from server
            // console.log(data);
            nonStudentExitCount = data.Count;
            let tab = ``;
            const tbody = document.querySelector("tbody");
            // // console.log('asdfsdf123');
            // // console.log(typeof(data.Items[0].userID));
            
            for(let i=0;i<data.Items.length; ++i){
              
                
              tab += `<tr id='row_${s_no}'><td>${s_no}</td>`;
              
                
                
                if (typeof data.Items[i].userID == 'undefined'){
                  // table.rows[i+1].cells[j].innerHTML = '';
                  tab += `<td>${''}</td>`;

                }
                else if (typeof data.Items[i].userID != 'undefined' ){
                  // table.rows[i+1].cells[j].innerHTML = data.Items[i].name.concat('/ ',data.Items[i].rollno);
                  let temp = data.Items[i].userID.toString();
                  tab += `<td id='nameRollNo_${s_no}'>${temp.concat('/',data.Items[i].name)}</td>`;
                  // tab += `<td>${''}</td>`;
                  
                }
                if(typeof data.Items[i].address == 'undefined'){
                  tab += `<td>${''}</td>`;
                  // table.rows[i+1].cells[j].innerHTML = '';
                  
                }
                else if (typeof data.Items[i].address != 'undefined' ){
                  // table.rows[i+1].cells[j].innerHTML = data.Items[i].roomno.concat('/',data.Items[i].hallno);
                  tab += `<td id='roomNoHallNo_${s_no}'>${data.Items[i].address}</td>`;
                  
                }
                if (typeof data.Items[i].placeOfVisit == 'undefined'){
                  // table.rows[i+1].cells[j].innerHTML = '';  
                  tab += `<td>${''}</td>`;
                  
                }
                else if (typeof data.Items[i].placeOfVisit != 'undefined'){
                  // table.rows[i+1].cells[j].innerHTML = data.Items[i].address;
                  tab += `<td id='placeOfVisit_${s_no}'>${data.Items[i].placeOfVisit}</td>`;
                }
                if( typeof data.Items[i].time == 'undefined' ){
                  // table.rows[i+1].cells[j].innerHTML = '';
                  tab += `<td>${''}</td>`;
                
                }
                else if( typeof data.Items[i].time != 'undefined' ){
                  tab += `<td id='time_${s_no}'>${data.Items[i].date.concat('_',data.Items[i].time)}</td>`;
                  // table.rows[i+1].cells[j].innerHTML = data.Items[i].exitTime;
                
                }            
                tab += `<td>Out</td><td><button type="button" class="btn btn-danger btn-sm" id="delete-form" onclick = "initializeDelete(${s_no})">Delete</button>
                <button type="button" class="btn btn-primary btn-sm" id="edit-form" onclick="initializeEdit(${s_no})">Edit</button></td></tr>`;
                ++s_no;
            }
            tbody.innerHTML += tab;
        })
        .catch(error => {
            console.error(error);
        });

        fetch('https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=getAllGeneralExitdata', {
          method: 'POST'
      })
      .then(response => response.json())
      .then(data => {
          // Handle success or error response from server
          // console.log(data);
          nonStudentEntryCount = data.Count;
          let tab = ``;
          const tbody = document.querySelector("tbody");
          // // console.log(typeof(data.Items[0].rollno));
          for(let i=0;i<data.Items.length; ++i){
               tab += `<tr id='row_${s_no}'><td>${s_no}</td>`;
               if (typeof data.Items[i].userID == 'undefined'){
                 // table.rows[i+1].cells[j].innerHTML = '';
                tab += `<td>${''}</td>`;
                
              }
              else if (typeof data.Items[i].userID != 'undefined' ){
                // table.rows[i+1].cells[j].innerHTML = data.Items[i].name.concat('/ ',data.Items[i].rollno);
                let temp = data.Items[i].userID.toString();
                tab += `<td id='nameRollNo_${s_no}'>${temp.concat('/',data.Items[i].name)}</td>`;
                // tab += `<td>${''}</td>`;
                
              }
              if(typeof data.Items[i].address == 'undefined'){
                tab += `<td>${''}</td>`;
                // table.rows[i+1].cells[j].innerHTML = '';
                
              }
              else if (typeof data.Items[i].address != 'undefined' ){
                // table.rows[i+1].cells[j].innerHTML = data.Items[i].roomno.concat('/',data.Items[i].hallno);
                tab += `<td id='roomNoHallNo_${s_no}'>${data.Items[i].address}</td>`;
                
              }
              if (typeof data.Items[i].placeOfVisit == 'undefined'){
                // table.rows[i+1].cells[j].innerHTML = '';  
                tab += `<td>${''}</td>`;
                
              }
              else if (typeof data.Items[i].placeOfVisit != 'undefined'){
                // table.rows[i+1].cells[j].innerHTML = data.Items[i].address;
                tab += `<td id='placeOfVisit_${s_no}'>${data.Items[i].placeOfVisit}</td>`;
              }
              if( typeof data.Items[i].time == 'undefined' ){
                // table.rows[i+1].cells[j].innerHTML = '';
                tab += `<td>${''}</td>`;
                
              }
              else if( typeof data.Items[i].time != 'undefined' ){
                tab += `<td id='time_${s_no}'>${data.Items[i].time}</td>`;
                // table.rows[i+1].cells[j].innerHTML = data.Items[i].exitTime;
                
              }            
              tab += `<td>In</td><td><button type="button" class="btn btn-danger btn-sm" id="delete-form" onclick = "initializeDelete(${s_no})">Delete</button><button type="button" class="btn btn-primary btn-sm" id="edit-form" onclick = "initializeEdit(${s_no})">Edit</button></td>
              </tr>`;
              ++s_no;
          }
          tbody.innerHTML += tab;
          
      })
      .catch(error => {
          console.error(error);
      });   
}
getData();

// console.log("dfg");
   
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

function initializeEdit(rowK){
  // console.log(rowK);
  let nameRollno = document.getElementById("nameRollNo_"+rowK).innerHTML;
  let roomNoHallNo = document.getElementById("roomNoHallNo_"+rowK).innerHTML;
  let placeOfVisit = document.getElementById("placeOfVisit_"+rowK).innerHTML;
  let outTime = document.getElementById("time_"+rowK).innerHTML;

  // // console.log(nameRollno);
  // console.log(nameRollno.split("/")[0]);
  // console.log(roomNoHallNo);
  // console.log(placeOfVisit);
  // console.log(outTime);
  // console.log("function initialize called");
  sessionStorage.setItem("nameRollno",nameRollno.split("/")[0]);
  sessionStorage.setItem("roomNo", roomNoHallNo.split("/")[0]);
  sessionStorage.setItem("hallNo", roomNoHallNo.split("/")[1]);
  sessionStorage.setItem("placeOfVisit", placeOfVisit);
  sessionStorage.setItem("outTime", outTime);
  window.location.href = "UpdateEntryExit.html";

}

function initializeDelete(rowK){
  // console.log(rowK);
  let row_i  = document.getElementById("row_"+rowK);
  // console.log(row_i);
  // console.log("nameRollNo_"+rowK);
  let nameRollno = document.getElementById("nameRollNo_"+rowK).innerHTML;
  let roomNoHallNo = document.getElementById("roomNoHallNo_"+rowK).innerHTML;
  // let placeOfVisit = document.getElementById("placeOfVisit_"+rowK).innerHTML;
  let outTime = document.getElementById("time_"+rowK).innerHTML;
  // console.log(outTime);
  if(outTime)
   // console.log(nameRollno);
   window.alert("confirm");
  // console.log(nameRollno.split("/")[0]);
  // // console.log(outTime);
  // console.log("function initialize called");
  sessionStorage.setItem("nameRollno",nameRollno.split("/")[0]);
  sessionStorage.setItem("roomNo", roomNoHallNo.split("/")[0]);
  // sessionStorage.setItem("hallNo","");
  // sessionStorage.setItem("placeOfVisit", placeOfVisit);
  sessionStorage.setItem("outTime", outTime);
  window.location.href = "DeleteData.html";

}

// get all edit and delete buttons
const editButtons = document.querySelectorAll("#edit-form");
const deleteButtons = document.querySelectorAll("#delete-form");

// add event listeners to all edit and delete buttons
// for (let i = 0; i < editButtons.length; i++) {
//   editButtons[i].addEventListener("click", () => {
    
//     // redirect to edit page
//     window.location.href = "UpdateEntryExit.html";
//   });
// }

// for (let i = 0; i < deleteButtons.length; i++) {
//   deleteButtons[i].addEventListener("click", () => {
//     // redirect to delete page
//     window.location.href = "DeleteData.html";
//   });
// }
