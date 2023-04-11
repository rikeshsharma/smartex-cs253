console.log("newadminjs is loaded");

function addNewAdmin(){
    let name = document.getElementById("nameInput").value;
    let ID = document.getElementById("idnoInput").value;
    let address = document.getElementById("addressInput").value;
    let phoneno = document.getElementById("phoneInput").value;
    let username = document.getElementById("usernameInput").value;
    let password = document.getElementById("passwordInput").value;
    let confirmPassword = document.getElementById("confirmPasswordInput").value;
    let accountType = document.getElementsByName("accountType");
    let type = "A";
    for(let i = 0; i<accountType.length; i++){
        console.log(accountType[i].checked);
        if(accountType[i].checked){
            if(accountType[i].value == "Guard")
                type = "G";
        }
    }
    if(password != confirmPassword){
        window.alert("password and confirm Password not matching");
        return ;
    }
    if(password.length < 6){
        window.alert("Password must be more than 6 character long");
    }
    // console.log(type);
            // Send the roll no. to the server
    fetch('https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=addAdmin', {
        method: 'POST',
        body: JSON.stringify({
            ID : ID,
            name : name,
            address : address,
            phoneno : phoneno,
            username : username,
            password : password,
            type: type,
        }),
        headers: {
            // 'Content-Type': 'application/json'
            // "Access-Control-Allow-Origin": "*"
        }
    })
    .then(response => response.json())
    .then(data => {
        // Handle success or error response from server
        console.log(data);
        if(data.gaurdID == ID){
            if(type == "G")
                window.alert("Successfully added new guard");
            else if(type == "A")
                window.alert("Successfully added new admin");
            document.getElementById("nameInput").value = "";
            document.getElementById("idnoInput").value = "";
            document.getElementById("addressInput").value = "";
            document.getElementById("phoneInput").value = "";
            document.getElementById("usernameInput").value = "";
            document.getElementById("passwordInput").value = "";
            document.getElementById("confirmPasswordInput").value = "";
            location.reload();
        }
        else{
             window.alert("Failed to add new admin/guard");
        }
    })
    .catch(error => {
        console.error(error);
    });
}
