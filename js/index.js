
// a function to store the values of team and role inside the local storage
function handleSubmit(){
    var teamName = document.getElementById("team").value;
    var playerRole = document.getElementById("role").value;

    console.log(teamName);
    console.log(playerRole);

    localStorage.setItem("team",teamName);
    localStorage.setItem("role",playerRole);


    

};


