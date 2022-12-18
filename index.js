// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
// }

// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
// }

// fetch("http://localhost:3000/dogs", configurationObject)
//     .then(response => response.json())
//     .then(formData => console.log(formData))
//     .catch(error => {
//         alert("Bad things!")
//         console.log(error.message)
//     })


function submitData(name, email) {
    return fetch ('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({name, email})
    })
        .then(response => response.json())
        .then(userData => document.body.innerHTML = userData.id)
        .catch(error => document.body.innerHTML = error.message)
}
