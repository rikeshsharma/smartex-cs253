const rollNo = sessionStorage.getItem("nameRollno");
const outTime = sessionStorage.getItem("outTime");
let gaurdId = sessionStorage.getItem("gaurdID");
let roomNo = sessionStorage.getItem("roomNo");
let hallNo = sessionStorage.getItem("hallNo");
let placeOfVisit = sessionStorage.getItem("placeOfVisit");
// console.log(rollNo);
if(hallNo=="undefined" || hallNo==null||hallNo=="null"||hallNo==undefined)
  hallNo = "";
document.getElementById("rollNoInput").value = rollNo;
document.getElementById("timeInput").value = outTime;
document.getElementById("hallInput").value = hallNo;
document.getElementById("roomInput").value = roomNo;
document.getElementById("idInput").value = gaurdId;
document.getElementById("placeInput").value = placeOfVisit;
// console.log("details.js loaded");

function submitForm() {
  if(rollNo[0]-'1'>=0 && rollNo[0]-'9'<=0){
    updateStudent();
  }
  else {
    // console.log("non student");
    updateNonStudent();
  }
  
         
}

function updateStudent(){
  // console.log("Manual Entry called");

  // Get the value of the roll number input field
  //rollNo = document.getElementById("rollNoInput").value;
  let hallNo = document.getElementById("hallInput").value;
  let roomNo = document.getElementById("roomInput").value;
  let placeOfVisit = document.getElementById("placeInput").value;
  let guardId = document.getElementById("idInput").value;
  if(hallNo.length === 0){
    window.alert("Hall no field must not be empty");
    return;
  }
  if(roomNo.length < 4){
    window.alert("Please enter a correct Room-no");
    return;
  }
  if(placeOfVisit.length === 0){
    window.alert("Please enter place of visit to proceed");
    return;
  }
 // outTime=document.getElementById("timeInput").value;
  // console.log(rollNo);

  fetch("https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=getExit",
  {
    method:"POST",
    body: JSON.stringify({
      rollno : Number(rollNo)
    }),
    headers : {
      // "Access-Control-Allow-Origin": "*"
    },
  })
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    fetch(
        "https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=updateExit",
        {
          method: "POST",
          body: JSON.stringify({
          
             rollno : Number(rollNo),
			 hallno : hallNo,
			 roomno : roomNo,
			 gaurdID : guardId,
			 placeOfVisit : placeOfVisit,
			 outTime : outTime,
          }),

          headers: {
            // 'Content-Type': 'application/json'
            // "Access-Control-Allow-Origin": "*"
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          // Handle success or error response from server
          // console.log(data);

          
            window.alert("Successfully updated exit table !!!");
           
            window.location.href = "history.html";
          
        })
        .catch((error) => {
          console.error(error);
          alert("Requested data not updated. Please try again later !!!");

        });
  })
  .catch((error) => {
    console.error(error);
    fetch(
      "https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=updateMovement",
      {
        method: "POST",
        body: JSON.stringify({
        
           rollno : Number(rollNo),
     hallno : hallNo,
     roomno : roomNo,
     placeOfVisit : placeOfVisit,
     time : outTime,
        }),

        headers: {
          // 'Content-Type': 'application/json'
          // "Access-Control-Allow-Origin": "*"
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // Handle success or error response from server
        // console.log(data);

        
          window.alert("Successfully updated movement table !!!");
         
          window.location.href = "history.html";
        
      })
      .catch((error) => {
        console.error(error);
        alert("Requested data not updated. Please try again later !!!");

      });
  });
 
}


function updateNonStudent(){
  // console.log("Manual Entry called");

  // Get the value of the roll number input field
  //rollNo = document.getElementById("rollNoInput").value;
  let address_1 = document.getElementById("hallInput").value;
  address_1 += document.getElementById("roomInput").value;
  let placeOfVisit = document.getElementById("placeInput").value;
  let guardId=document.getElementById("idInput").value;

  if(address_1.length === 0){
    window.alert("Atleast one address line field must not be empty");
    return;
  }
  if(placeOfVisit.length === 0){
    window.alert("Please enter place of visit to proceed");
    return;
  }
 // outTime=document.getElementById("timeInput").value;
  // console.log(rollNo);

  fetch("https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=getGeneralExit",
  {
    method:"POST",
    body: JSON.stringify({
      userID : rollNo
    }),
    headers : {
      // "Access-Control-Allow-Origin": "*"
    },
  })
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    fetch(
        "https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=updateGeneralExit",
        {
          method: "POST",
          body: JSON.stringify({
          
            userID : rollNo,
			      address : address_1,
			      gaurdID : guardId,
			      placeOfVisit : placeOfVisit,
			      time : outTime,
          }),
        


          headers: {
            // 'Content-Type': 'application/json'
            // "Access-Control-Allow-Origin": "*"
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          // Handle success or error response from server
          // console.log(data);

          
            window.alert("Successfully updated exit table !!!");
           
            window.location.href = "history.html";
          
        })
        .catch((error) => {
          console.error(error);
          alert("Requested data not updated. Please try again later !!!");

        });
  })
  .catch((error) => {
    console.error(error);
    fetch(
      "https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=updateGeneralMovement",
      {
        method: "POST",
        body: JSON.stringify({
        
        userID : rollNo,
        address : address_1,
        gaurdID : guardId,
        placeOfVisit : placeOfVisit,
        time : outTime,
        }),

        headers: {
          // 'Content-Type': 'application/json'
          // "Access-Control-Allow-Origin": "*"
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // Handle success or error response from server
        // console.log(data);

        if(placeOfVisit == data.Attributes.placeOfVisit){
          window.alert("Successfully updated movement table !!!");
          window.location.href = "history.html";
        }
        else{
          alert("Update failed, Please check the input");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Requested data not updated. Please try again later !!!");

      });
  });
 
}