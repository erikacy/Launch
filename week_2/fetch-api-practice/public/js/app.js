fetch('http://localhost:4567/books.json')
.then(response => {
  if (response.ok) {
    return response;
  } else {
    let errorMessage = `${response.status} (${response.statusText})`,
    error = new Error(errorMessage);
    throw(error);
  }
})
.then(response => response.text())
.then(body => {
  let bodyParsed = JSON.parse(body);
  bodyParsed["books"].forEach(obj => {
    document.getElementById("books").innerHTML += "<li>" + obj.name + "</li>"
  })
})
.catch(error => console.error(`Error in fetch: ${error.message}`));
