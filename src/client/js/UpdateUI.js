const entryContainer = document.querySelector('.holder.entry');

async function UpdateUI(data) {
    //let EntryContainer = document.createElement('div');
    let EntriesContainer = document.querySelector(".holder.entry");
    let EntryImage = document.createElement('img');
    let EntryWheaterDescription = document.createElement('div');
    let EntryDateRemain = document.createElement('div');
    let ImageTravelerContent = document.createElement('div');
    let TravelInformation = document.createElement('div');
    let EntryTravelContent = document.createElement('div');
    let EntryTravelTemperature = document.createElement('div');
    let EntryLabelImage = document.createElement('label');

    const InputDate = data.date.split("/");

    const today = new Date();
    const CurrentDay = today.getDate();
    const CurrentMonth = today.getMonth(); //January is 0!
    const CurrentYear = today.getFullYear();

    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(CurrentYear, CurrentMonth, CurrentDay);


    const secondDate = new Date(InputDate[2], InputDate[1], InputDate[0]);

    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));


    EntryLabelImage.textContent = data.location;
    EntryImage.src = data.url;
    EntryWheaterDescription.textContent = "The current wheather in " + data.location + " is " + data.wheather;
    EntryTravelTemperature.textContent = data.temperature + "°C";
    EntryDateRemain.textContent = diffDays + " remaining days left";


    ImageTravelerContent.classList.add("ImageTravelContent");
    TravelInformation.classList.add("TravelInformation");
    EntryTravelTemperature.classList.add("Temperature");
    EntryTravelContent.classList.add("TravelContent");
    EntryDateRemain.classList.add("TravelDate");


    EntryTravelContent.appendChild(ImageTravelerContent);
    EntryTravelContent.appendChild(TravelInformation);

    ImageTravelerContent.appendChild(EntryLabelImage);
    ImageTravelerContent.appendChild(EntryImage);

    TravelInformation.appendChild(EntryWheaterDescription);
    TravelInformation.appendChild(EntryTravelTemperature);
    TravelInformation.appendChild(EntryDateRemain);

    EntriesContainer.appendChild(EntryTravelContent);

}

export { UpdateUI }