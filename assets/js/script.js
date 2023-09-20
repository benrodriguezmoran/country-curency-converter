document.addEventListener('DOMContentLoaded', function () {
  // Function to update the time and date sub-header
  function updateTimeAndDate() {
    // Select the sub-header element by its id
    const dateTimeHeader = document.getElementById('date-time-header');

    // Use day.js to get the current date and time
    const currentDateAndTime = dayjs().format('YYYY-MM-DD HH:mm:ss');

    // Update the sub-header text with the current date and time
    dateTimeHeader.textContent = `Current Date and Time: ${currentDateAndTime}`;
  }

  // Call the updateTimeAndDate function when the page loads
  updateTimeAndDate();

  // Function to make an XMLHttpRequest and display information in the flex box
function fetchDataFromAPI(baseCurrency, targetCurrency) {
    var oReq = new XMLHttpRequest();
    var response;
    var additionalRequestStr;
    var requestEventListener = oReq.addEventListener("load", function () {
      if (oReq.status === 200) {
        // Parse the JSON response if it's successful
        try {
          response = JSON.parse(this.responseText);
          return response;
        } catch (error) {
          console.error("Error parsing JSON:", error);
          return;
        }
      } else {
        console.error("Request failed with status:", oReq.status);
        return;
      }
    });
    if (typeof baseCurrency === 'undefined') {additionalRequestStr = null;} else {
      additionalRequestStr = toString(targetCurrency + '&base_currency=' + baseCurrency);
    }
    console.log(additionalRequestStr);
    oReq.open(
      "GET",
      "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_yK5F5B2HZcfDTAFbadAylTvZSv9Oq2I8qoAFZAqk&currencies=" 
    );
    oReq.send();
    return response;
  }
console.log(fetchDataFromAPI());
console.log(fetchDataFromAPI("USD","CAD"));
  const generateButton = document.getElementById('generate-button');
  generateButton.addEventListener('click', fetchDataFromAPI);
});
