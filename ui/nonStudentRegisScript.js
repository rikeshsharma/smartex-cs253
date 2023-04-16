
let nonStudentAddress = sessionStorage.getItem("nonStudentAddress");
let nonStudentId = sessionStorage.getItem("nonStudentId");
let nonStudentName = sessionStorage.getItem("nonStudentName");
let nonStudentPhoneno = sessionStorage.getItem("nonStudentPhoneno");
let gaurdID = sessionStorage.getItem("gaurdID");
document.getElementById('addressInput').value = nonStudentAddress;
document.getElementById('IDInput').value = nonStudentId;
document.getElementById('nameInput').value = nonStudentName;
document.getElementById('phoneInput').value = nonStudentPhoneno;

		// Define a function to handle  entry form submission
function submitForm() {
	// Get the entry form values
	let address = document.getElementById('addressInput').value;
	let id_uni = document.getElementById('IDInput').value;
	let Name = document.getElementById('nameInput').value;
	let phoneNumber = document.getElementById('phoneInput').value;

	let purposeofVisitInput = document.getElementById('purposeofVisitInput').value; ;

	
	if(Name.length === 0){
		window.alert("Name field must not be empty");
		return;
	}
	if(id_uni.length === 0){
		window.alert("User ID no field must not be empty");
		return;
	}
	if(address.length === 2){
		window.alert("Please enter your address correctly");
		return;
	}
	if(purposeofVisitInput.length === 0){
		window.alert("Please enter Place of Visit to proceed");
		return;
	}
	let phoneNumberPattern = /^\d{10}$/;
	if(phoneNumber.match(phoneNumberPattern)){
      
    }
    else{
        window.alert("Enter a correct phone number");
        return;
    }

	//current time 

	var today = new Date();
	var time_today = today.getHours() + ":" + today.getMinutes();
	var curr_date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
	
	// Send the data to the server
	
	fetch('https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=getGeneralExit', {
		method: 'POST',
		body: JSON.stringify({
			//name: Name,
			userID: id_uni,
			//hallno: hallNo,
			//phonenumber: phoneNumber,
			//placeofvisit: placeOfVisit,
			
		}),
		/*headers: {
			'Content-Type': 'application/json'
		}*/
	})
	.then(response => response.json())
	.then(data => {
		// Handle success or error response from server
		// console.log(data);
		fetch('https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=addGeneralMovement', {
		method: 'POST',
		body: JSON.stringify({
			name: Name,
			ID: id_uni,
			phoneNo: phoneNumber,
			placeOfVisit: purposeofVisitInput,
			exitPlaceOfVisit : data.placeOfVisit,
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
			// console.log('adding in movement is success ')
			// console.log(data);
			alert('User has entered the campus');
			// console.log("fgh");
			window.location.href= "homepage.html";
		})
		.catch(error => {
			// console.log("error in addmovement");
			alert('Failed entry');
			// console.log(error);
		});
	})
	.catch(error => {
		console.error(error);
		// console.log("Error of get user");
		fetch('https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=addGeneralExit', {
		method: 'POST',
		body: JSON.stringify({
			ID:	id_uni,
			placeOfVisit: purposeofVisitInput,
			guardID: gaurdID,
			time: time_today,
			date: curr_date,
			phoneNo: phoneNumber
			
		}),
		/*headers: {
			'Content-Type': 'application/json'
		}*/
		})
		.then(response => response.json())
		.then(data => {
			// console.log('add exit data success');
			alert('User has left the campus');
			// console.log(data);
			window.location.href= "homepage.html";
		})
		.catch(error => {
			// console.log("error in addexit");
			alert('Failed to mark exit');
			// console.log(error);
		});
	});
	
	// Reset the form
	// document.getElementById('entryForm').reset();
}
	
		

