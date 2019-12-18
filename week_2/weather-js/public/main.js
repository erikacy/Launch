let latitude = 42.35
let longitude = -71.07

fetch(`http://localhost:4567/api/v1/forecast/${latitude},${longitude}`)
  .then(response => {
    if (response.ok) {
      return response;
    } else {
      let errorMessage = `${response.status } (${response.statusText})`,
      error = new Error(errorMessage);
      throw(error);
    }
  })
  .then(response => response.json())
  .then(body => {
    // debugger
    let zone = body["timezone"].replace("_", " ")
    let temp = body["currently"]["temperature"]
    let realfeel = body["currently"]["apparentTemperature"]

    document.getElementById('main').innerText += '\n' + zone + '\n\nCurrent Temp: ' + temp + '°F \nReal Feel: ' + realfeel + '°F'
  })
