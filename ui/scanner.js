
// console.log("scanner.js loaded");
let rollNo = 0;

function autoEntry() {
    // console.log("Auto Entry called");

    rollNo = sessionStorage.getItem("scannedBarcode"); //to be modified
    // console.log(rollNo);

    rollNo = Number(rollNo);

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
        // window.alert("Success !!!");
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
}
