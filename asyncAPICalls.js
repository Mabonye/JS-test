async function fetchAPICalls() {
    let response = await fetch("https://reqres.in/api/users");
    let result = await response.json();
    const dataArray = result.data;
    
    dataArray.forEach((user, index) => {
        if (index < 3) {
            console.log(`${user.first_name} ${user.last_name}`);
        }
        
    });
}

fetchAPICalls()