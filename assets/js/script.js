const apiUrl = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_yK5F5B2HZcfDTAFbadAylTvZSv9Oq2I8qoAFZAqk&currencies=";
const dateTimeHeader = document.getElementById('date-time-header');

document.addEventListener('DOMContentLoaded', function () {
  // Function to update the time and date sub-header
  function updateTimeAndDate() {
    
    var currentDateAndTime = dayjs().format('MM-DD-YYYY h:mm A');
    dateTimeHeader.textContent = `Current Date and Time: ${currentDateAndTime}`;
    
    var timeInterval = setInterval(() => {
      currentDateAndTime = dayjs().format('MM-DD-YYYY h:mm A');
      dateTimeHeader.textContent = `Current Date and Time: ${currentDateAndTime}`;
    }, 60000);
  }

  // Call the updateTimeAndDate function when the page loads
  updateTimeAndDate();

 
  // Function to make an XMLHttpRequest and display information in the flex box
  function fetchDataFromAPI(baseCurrency, targetCurrency) {
    var httpReq = new XMLHttpRequest();
    var response;
    var additionalRequestStr;

    if (typeof baseCurrency === 'undefined') {
      additionalRequestStr = "";
    } else {
      additionalRequestStr = targetCurrency + "&base_currency=" + baseCurrency;
    }

    httpReq.addEventListener("load", function () {
      if (httpReq.status === 200) {
        // Parse the JSON response if it's successful
        try {
          response = this.responseText;
          if (additionalRequestStr === "") {
            handleAvailableCurrencies(Object.keys(JSON.parse(response).data));
          }
          

        } catch (error) {
          console.error("Error parsing JSON:", error);
          return;
        }
      } else {
        console.error("Request failed with status:", httpReq.status);
        return;
      }
    });

    httpReq.open(
      "GET",
      apiUrl + additionalRequestStr
    );
    httpReq.send();
  }

  fetchDataFromAPI();
  fetchDataFromAPI("USD", "CAD");
});

function handleAvailableCurrencies(json) {//string array for processing

}

function handleConversion(json) {

}
 // Function to initialize Google Translate API
 function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en', // Set the default page language (you can change this)
    includedLanguages: 'af,sq,am,ar,hy,as,ay,az,bm,eu,be,bn,bho,bs,bg,ca,ceb,co,hr,cs,da,dv,doi,nl,en,eo,et,ee,fil,fi,fr,fy,gl,ka,de,el,gn,gu,ht,ha,haw,he,hi,hmn,hu,is,ig,ilo,id,ga,it,ja,jv,kn,kk,km,rw,gom,ko,kri,ku,ckb,ky,lo,la,lv,ln,lt,lg,lb,mk,mai,mg,ms,ml,mt,mi,mr,Mni-Mte,lus,mn,my,ne,no,ny,or,om,ps,fa,pl,pt,pa,qu,ro,ru,sm,sa,gd,nso,sr,st,sn,sd,si,sk,sl,so,es,su,sw,sv,tl,tg,ta,tt,te,th,ti,ts,tr,tk,ak,uk,ur,ug,uz,vi,cy,xh,yi,yo,zu' // Specify the languages you want to support
  }, 'google_translate_element');
}
