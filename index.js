//Your code
function submitData(name, email) {
    const url = 'http://localhost:3000/users'; 

    const data = {
        name: name,
        email: email
    };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    };
    return fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(data => {
            appendUserIdToDOM(data.id);
            return data;
        })
        .catch(error => {
            appendErrorMessageToDOM(error.message);
        });
}
// function to append user ID to the DOM
function appendUserIdToDOM(userId) {
    const userIdElement = document.createElement('div');
    userIdElement.textContent = `User ID: ${userId}`;
    document.body.appendChild(userIdElement);
}
// function to append error message to the DOM
function appendErrorMessageToDOM(errorMessage) {
    const errorElement = document.createElement('div');
    errorElement.textContent = `Error: ${errorMessage}`;
    document.body.appendChild(errorElement);
}
