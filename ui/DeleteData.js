const rollNo = sessionStorage.getItem("nameRollno");
const outTime = sessionStorage.getItem("outTime");

document.getElementById("rollNoInput").value = rollNo;
console.log("details.js loaded");

function submitForm() {
  
  console.log("Manual Entry called");

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
        "https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=deleteExit",
        {
          method: "POST",
          body: JSON.stringify({
            rollno : Number(rollNo),
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
    console.log("out time is : ", outTime);
    fetch(
      "https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=deleteMovement",
      {
        method: "POST",
        body: JSON.stringify({
        
          rollno : Number(rollNo),
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
 
      // fetch(
      //   "https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=deleteExit",
      //   {
      //     method: "POST",
      //     body: JSON.stringify({
          
      //        rollno : Number(rollNo),
            
      //     }),

      //     headers: {
      //       // 'Content-Type': 'application/json'
      //       // "Access-Control-Allow-Origin": "*"
      //     },
      //   }
      // )
      //   .then((response) => response.json())
      //   .then((data) => {
      //     // Handle success or error response from server
      //     console.log(data);

          
      //       window.alert("Successfully deleted requested data !!!");
           
      //       window.location.href = "history.html";
          
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //     alert("Requested data not deleted. Please try again later !!!");

      //   });
}

   