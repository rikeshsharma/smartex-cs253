const gaurdName = sessionStorage.getItem("gaurdName");
const gaurdID = sessionStorage.getItem("gaurdID");
console.log(gaurdName);
if(gaurdName==null||gaurdName === "noname"){
  window.location.href = "index.html";
}
document.getElementById('nameInput').value = sessionStorage.getItem("studentName");
document.getElementById('rollnoInput').value = sessionStorage.getItem("studentRollno");
document.getElementById('addressInput').value = "Hall: "+sessionStorage.getItem("studentHallno") +" / Room-no: " + sessionStorage.getItem("studentRoomno");
document.getElementById('phoneInput').value = sessionStorage.getItem("studentPhoneno");

// Define a function to handle  entry form submission
		function submitForm() {
			// Get the entry form values
            let Name = document.getElementById('nameInput').value;
			document.getElementById('nameInput').value = sessionStorage.getItem("studentName");
            let rollNo = document.getElementById('rollnoInput').value;
            let hallNo = document.getElementById('addressInput').value;
            let placeOfVisit = document.getElementById('placeInput').value;
			let phoneNumber = document.getElementById('phoneInput').value;
			
			
			
			// Send the data to the server
			
			fetch('https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=addExit', {
				method: 'POST',
				body: JSON.stringify({
					name: Name,
					rollno: rollNo,
					hallno: hallNo,
					// phonenumber: phoneNumber,
					placeOfVisit: placeOfVisit,
					gaurdID: gaurdID,
				}),
				/*headers: {
					'Content-Type': 'application/json'
				}*/
			})
			.then(response => response.json())
			.then(data => {
				// Handle success or error response from server
				console.log(data);
				alert('Entry data saved successfully');
			})
			.catch(error => {
				console.error(error);
                alert('Error in saving entry data');
			});
			
			// Reset the form
			document.getElementById('entryForm').reset();
		}
	
		

