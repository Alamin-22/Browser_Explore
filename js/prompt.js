const alertUser = () => {
    alert("Be attentive Guys Be Serious")
}

const seriousStudent = () => {
    const SeriousStudent = confirm("Are You Practicing Enough For DevelopMent?");
    if(seriousStudent === true){
        alert("Well Done You are doing Great. Best Wishes For You Boy")
    }else{
      alert("Be alert before lose Everything")  
    }
}

const getName=()=>{
    const name = prompt("What is your name?");
    if(name === null){
        alert("Provide a valid Name ")
    }
    else if(name===""){
        alert("Provide a valid Name")
    }
    else{
        alert("congratulations")
    }
    console.log(name);
}