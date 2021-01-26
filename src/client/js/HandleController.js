 function handleSubmit(event) {
     event.preventDefault();
     const travelLocation = document.querySelector('#travelLocation').value;
     const travelDate = document.querySelector('#travelDate').value;
     Client.postData('/RecieveClientData', { location: travelLocation, date: travelDate })
         .then(() => {
             Client.retrieveData('http://localhost:8081/getCoordinates');
         }).then(() => {
             Client.retrieveData('http://localhost:8081/getCoordinates');
         }).then(() => {
             Client.retrieveData('http://localhost:8081/getWeatherData');
         }).then(() => {
             Client.retrieveData('http://localhost:8081/getImageLocation');
         }).then(() => {
             return Client.postData('http://localhost:8081/GetTravelInfo');
         }).then((result) => {
             console.log(result);
             Client.UpdateUI(result);
         }).catch((err) => {
             console.log(err)
         });
 }

 export { handleSubmit }