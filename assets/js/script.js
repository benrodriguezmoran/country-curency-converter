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
  function fetchDataFromAPI() {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function () {
      if (oReq.status === 200) {
        // Parse the JSON response if it's successful
        try {
          var response = JSON.parse(this.responseText);
          console.log(response);
          // Display the information in the flex box
          displayInformation(response);
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      } else {
        console.error("Request failed with status:", oReq.status);
      }
    });
    oReq.open(
      "GET",
      "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_yK5F5B2HZcfDTAFbadAylTvZSv9Oq2I8qoAFZAqk&currencies="
    );
    oReq.send();
  }

  const generateButton = document.getElementById('generate-button');
  generateButton.addEventListener('click', fetchDataFromAPI);
});
