if(gaurdName1==null||gaurdName1 === "noname"){
  window.location.href = "index.html";
}
document.getElementById('nameInput').value = sessionStorage.getItem("studentName");
document.getElementById('rollnoInput').value = sessionStorage.getItem("studentRollno");
document.getElementById('addressInput').value = "Hall: "+sessionStorage.getItem("studentHallno") +" / Room-no: " + sessionStorage.getItem("studentRoomno");
document.getElementById('phoneInput').value = sessionStorage.getItem("studentPhoneno");
let gaurdID = sessionStorage.getItem("gaurdID");


		

// Define a function to handle  entry form submission
function submitForm() {
	// Get the entry form values
	let Name = document.getElementById('nameInput').value;
	let rollNo = document.getElementById('rollnoInput').value;
	let hallNo = document.getElementById('addressInput').value;
	let placeOfVisit = document.getElementById('placeInput').value;
	let phoneNumber = document.getElementById('phoneInput').value;
	
	//current time 

	var today = new Date();
	var time_today = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	var curr_date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
	
	// Send the data to the server
	
	fetch('https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=getExit', {
		method: 'POST',
		body: JSON.stringify({
			rollno: parseInt(rollNo),
		}),
		/*headers: {
			'Content-Type': 'application/json'
		}*/
	})
	.then(response => response.json())
	.then(data => {
		// Handle success or error response from server
		console.log(data);

		fetch('https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=addMovement', {
		method: 'POST',
		body: JSON.stringify({
			name: Name,
			rollno: parseInt(rollNo),
			hallno: hallNo,
			PhoneNo: phoneNumber,
			placeofvisit: placeOfVisit,
			gaurdID: gaurdID,
			time: time_today,
			date: curr_date
			
		}),
		/*headers: {
			'Content-Type': 'application/json'
		}*/
		})
		.then(response => response.json())
		.then(data => {
			console.log('adding in movement is success ')
			console.log(data);
			alert('student has entered the campus');
			window.location.href="homepage.html";
		})
		.catch(error => {
			console.log("error in addmovement");
			console.log(error);
		});
	})
	.catch(error => {
		console.error(error);
		console.log("Error of get user");
		fetch('https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=addExit', {
		method: 'POST',
		body: JSON.stringify({
			rollno:	parseInt(rollNo),
			placeOfVisit: placeOfVisit,
			gaurdID: gaurdID,
			time: time_today,
			date: curr_date,
			PhoneNo: phoneNumber
			
		}),
		/*headers: {
			'Content-Type': 'application/json'
		}*/
		})
		.then(response => response.json())
		.then(data => {
			console.log('add exit data success');
			console.log(data);
			alert('Student has left the campus!!');
			window.location.href="homepage.html";
		})
		.catch(error => {
			console.log("error in addexit");
			console.log(error);
			alert('Error in saving entry data');
		});


		
	});
	
	// Reset the form
	// document.getElementById('entryForm').reset();
}

