// console.log("details.js loaded");
let rollNo = 0;

function manualEntry() {
  // Add event listener for manual entry
  // console.log("Manual Entry called");
  // document.querySelector("manual-entry").addEventListener("submit", function(event) {
  // Prevent the default form submission
  //event.preventDefault();

  // Get the value of the roll number input field
  rollNo = document.getElementById("rollNoInput").value;
  // console.log(rollNo);

  // get the radio button value
  let radios = document.getElementsByName("userType");
  let userType = null;
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      userType = radios[i].value;
      break;
    }
  }
  // console.log(userType);

  // Perform validation on the input

  if (rollNo == "" && radios[0].checked) {
    alert("Please enter a roll number.");
    return;
  } else if (rollNo == "" && radios[1].checked) {
    alert("Please enter your id.");
    return;
  } else if (rollNo == "" && userType === null) {
    alert("Please fill out all the fields.");
    return;
  } else if (rollNo != "" && userType == null) {
    alert("Please select the user type.");
    return;
  }

  if (typeof rollNo == "string" && userType != null) {
    if (radios[0].checked) {
      rollNo = Number(rollNo);
    }
    if (typeof rollNo === "number") {
      // Send the roll number to the server
      fetch(
        "https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=getUser",
        {
          method: "POST",
          body: JSON.stringify({
            rollno: rollNo,
            // rollno : Number(rollNo),
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

          // if(data.rollno!=Number(rollNo)){
          if (data.rollno != rollNo) {
            alert("Error");
          } else {
            window.alert("Success !!!");
            sessionStorage.setItem("studentName", data.name);
            sessionStorage.setItem("studentRollno", data.rollno);
            sessionStorage.setItem("studentHallno", data.hallno);
            sessionStorage.setItem("studentRoomno", data.roomno);
            // sessionStorage.setItem("studentPhoneno", data.phoneNo);
            // sessionStorage.setItem("placeOfVisit",data.placeOfVisit);
            //{ department: "ME", rollno: 180606, roomno: "G203", degree: "Btech", address: "JSR JH", hallno: "9", email: "rikesh", name: "Rikesh Sharma", gender: "M" }
            window.location.href = "success.html";
          }
        })
        .catch((error) => {
          console.error(error);
          alert("Incorrect Roll No.");
        });

      // Clear the input field
      document.getElementById("rollNoInput").value = "";
      for (var i = 0; i < radios.length; i++) {
        radios[i].checked = false;
      }
      //   });
    }
   else {
    // Send the id to the server
    // console.log("114");
    fetch(
      "https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=getGeneralUser",
      {
        method: "POST",
        body: JSON.stringify({
          ID: rollNo
        }),

        headers: {
          // 'Content-Type': 'application/json'
          // "Access-Control-Allow-Origin": "*"
        },
      })
      .then((response) => response.json())
      .then((data) => {
        // Handle success or error response from server
        // console.log(data);

        // if(data.rollno!=Number(rollNo)){
        if (data.userID != rollNo) {
          alert("Error");
        } else {
          window.alert("Success !!!");
          sessionStorage.setItem("nonStudentName", data.name);
          sessionStorage.setItem("nonStudentAddress", data.address);

          sessionStorage.setItem("nonStudentPhoneno", data.phoneno);
          sessionStorage.setItem("nonStudentId", data.userID);

          window.location.href = "nonstudentregis.html";
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Incorrect ID");
      });

    // Clear the input field
    document.getElementById("rollNoInput").value = "";
    for (var i = 0; i < radios.length; i++) {
      radios[i].checked = false;
    }
    //   });
  }
}
}
