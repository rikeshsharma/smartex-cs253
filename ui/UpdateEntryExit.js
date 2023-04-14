const rollNo = sessionStorage.getItem("nameRollno");
const outTime = sessionStorage.getItem("outTime");
console.log(rollNo);
document.getElementById("rollNoInput").value = rollNo;
document.getElementById("timeInput").value = outTime;
console.log("details.js loaded");

function submitForm() {
  if(typeof rollNo === 'number'){
    updateStudent();
  }
  else {
    console.log("non student");
    updateNonStudent();
  }
  
         
}

function updateStudent(){
  console.log("Manual Entry called");

  // Get the value of the roll number input field
  //rollNo = document.getElementById("rollNoInput").value;
  let hallNo = document.getElementById("hallInput").value;
  let roomNo = document.getElementById("roomInput").value;
  let placeOfVisit = document.getElementById("placeInput").value;
  let guardId = document.getElementById("idInput").value;
 // outTime=document.getElementById("timeInput").value;
  console.log(rollNo);

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
    console.log(data);
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
          console.log(data);

          
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
        console.log(data);

        
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
  console.log("Manual Entry called");

  // Get the value of the roll number input field
  //rollNo = document.getElementById("rollNoInput").value;
  let address_1 = document.getElementById("hallInput").value;
  address_1 += document.getElementById("roomInput").value;
  let placeOfVisit = document.getElementById("placeInput").value;
  let guardId=document.getElementById("idInput").value;
 // outTime=document.getElementById("timeInput").value;
  console.log(rollNo);

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
    console.log(data);
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
          console.log(data);

          
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
        console.log(data);

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