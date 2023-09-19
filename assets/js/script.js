// Function to make an XMLHttpRequest and display information in the flex box
function fetchDataFromAPI() {
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", function () {
    if (oReq.status === 200) {
      // Parse the JSON response if it's successful
      try {
        var response = JSON.parse(this.responseText);

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
    "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_yK5F5B2HZcfDTAFbadAylTvZSv9Oq2I8qoAFZAqk"
  );
  oReq.send();
}

// Function to display information in the flex box
function displayInformation(data) {
  // Select the flex box by its id
  const infoBox = document.getElementById("info-box");

  // Clear any previous content in the flex box
  infoBox.innerHTML = "";

  // Create and populate elements with data
  const infoParagraph = document.createElement("p");
  infoParagraph.textContent = "Information from the API:";

  // Create a div element to hold the currency data
  const currencyDataDiv = document.createElement("div");
  currencyDataDiv.className = "currency-data"; // You can define a CSS class for styling

  // Create and populate elements for the currency data
  const currencyValue = document.createElement("p");
  currencyValue.textContent = "Currency Value: " + data.value;

  // Append elements to the currency data div
  currencyDataDiv.appendChild(currencyValue);

  // Append elements to the flex box
  infoBox.appendChild(infoParagraph);
  infoBox.appendChild(currencyDataDiv);

  // Apply styling to the flex box and currency data div
  infoBox.style.backgroundColor = "lightblue";
  currencyDataDiv.style.padding = "10px";
  currencyDataDiv.style.border = "1px solid #ddd";
}

document.addEventListener("DOMContentLoaded", function () {
  // Select the "Generate" button by its id
  const generateButton = document.getElementById("generate-button");

  // Add a click event listener to the button
  generateButton.addEventListener("click", fetchDataFromAPI);
});
