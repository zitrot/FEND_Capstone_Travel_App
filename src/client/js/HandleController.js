 async function handleSubmit(event) {
     event.preventDefault();
     const travelLocation = document.querySelector('#travelLocation').value;
     let travelDate = document.querySelector('#travelDate').value;
     console.log("first", travelDate)


     const InputDate = travelDate.split("-");
     console.log("input", InputDate)
     const today = new Date();
     const CurrentDay = today.getDate();
     const CurrentMonth = today.getMonth(); //January is 0!
     const CurrentYear = today.getFullYear();

     const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
     const firstDate = new Date(CurrentYear, CurrentMonth, CurrentDay);


     const secondDate = new Date(InputDate);

     let diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
     console.log("second", secondDate)
     console.log("diff days", diffDays)
     if (diffDays > 16) {
         alert("the date of the travel is 16 days after the current date and we can't give you precise info about the weather");
         const secondDate = new Date(InputDate[2], InputDate[1], InputDate[0]);
         travelDate = CurrentDay.getDate + 16;
         diffDays = diffDays.round;
     }


     Client.postData('/RecieveClientData', { location: travelLocation, date: travelDate, days: diffDays })
     let res = await Client.retrieveData('/getCoordinates');
     res = await Client.retrieveData('/getImageLocation');
     res = await Client.retrieveData('/getWeatherData');
     res = await Client.retrieveData('/GetTravelInfo');
     console.log(res);

     res['DiffDays'] = diffDays;

     Client.UpdateUI(res);
 }

 export { handleSubmit }