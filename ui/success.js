

		// Define a function to handle  entry form submission
		function submitForm() {
			// Get the entry form values
            let Name = document.getElementById('nameInput').value;
            let rollNo = document.getElementById('rollnoInput').value;
            let hallNo = document.getElementById('addressInput').value;
            let placeOfVisit = document.getElementById('placeInput').value;
			let phoneNumber = document.getElementById('phoneInput').value;
			
			//current time 

2
			var today = new Date();
			var time_today = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
			var curr_date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
			
			// Send the data to the server
			
			fetch('https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=getExit', {
				method: 'POST',
				body: JSON.stringify({
					//name: Name,
					rollno: parseInt(rollNo),
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
				console.log(data);
				alert('Entry data saved successfully');

				fetch('https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=addMovement', {
				method: 'POST',
				body: JSON.stringify({
					name: Name,
					rollno: parseInt(rollNo),
					hallno: hallNo,
					PhoneNo: phoneNumber,
					placeofvisit: placeOfVisit,
					gaurdID: "ABC",
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
					console.log("fgh");
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
					gaurdID: "ABC",
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
				})
				.catch(error => {
					console.log("error in addexit");
					console.log(error);
				});


                alert('Error in saving entry data');
			});
			
			// Reset the form
			// document.getElementById('entryForm').reset();
		}
	
		

