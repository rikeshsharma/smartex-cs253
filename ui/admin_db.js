// function getCount(){
//     console.log("getting count data");
//             // Send the roll no. to the server
//     fetch('https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=getCount', {
//             method: 'POST',
//             body: JSON.stringify({
//             countID : "09042023",
//         }),
//         headers: {
//             // 'Content-Type': 'application/json'
//             // "Access-Control-Allow-Origin": "*"
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         // Handle success or error response from server
//         console.log(data);
//         if(data.countID=="09042023"){
//             document.getElementById('totalEntries').value = data.studentEntryCount + data.nonStudentEntryCount;
//             document.getElementById('totalExits').value = data.studentExitCount + data.nonStudentExitCount;
//             document.getElementById('totalStudentEntries').value = data.studentEntryCount;
//             document.getElementById('totalNonStudentEntries').value = data.nonStudentEntryCount;
//         }
//     })
//     .catch(error => {
//         console.error(error);
//     });
// }

// getCount();