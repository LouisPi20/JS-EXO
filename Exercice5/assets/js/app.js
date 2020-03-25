let myHeaders = new Headers()


let fetchOptions = {
    method: 'GET',          // Methode utilisée par la requête
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
};


const fetchUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users", fetchOptions)
    .then(response => response.json())
    .then(json => {
        json.forEach(user => {
            console.log(user);
            

        document.querySelector("tbody").insertAdjacentHTML("beforeend", `   
        <tr>
            <td>${user.id}  </td>
            <td>${user.name}  </td>
            <td>${user.username}  </td>
            <td>${user.email}  </td>
            <td>${user.address.street +"   "+ user.address.suite +"   "+ user.address.city +"   "+ user.address.zipcode}  </td>
            <td>${user.address.geo.lat +"   "+ user.address.geo.lng}  </td>
        </tr> 
        `)
    });
    })

}

window.addEventListener("load", fetchUser)




// const chaine = `${user.street} + ${user.city}`




