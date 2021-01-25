 function handleSubmit(event) {
     event.preventDefault();
     const travelLocation = document.querySelector('#travelLocation').value;
     const travelDate = document.querySelector('#travelDate').value;
     Client.postData('/RecieveClientData', { location: travelLocation })
         .then(() => {
             Client.retrieveData('/getCoordinates');
         }).then(() => {
             Client.retrieveData('/getCoordinates');
         }).then(() => {
             Client.retrieveData('/getWeatherData');
         }).then(() => {
             Client.retrieveData('/getImageLocation');
         }).then(() => {
             return Client.retrieveData('/GetTravelInfo');
         }).then((result) => {
             console.log(result);
         }).catch((err) => {
             console.log(err)
         });
 }





 export { handleSubmit }