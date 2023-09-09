setInterval(function () {
  let sydneyElement = moment().tz("Australia/Sydney");
  if (sydneyElement){
  let sydneyElementDate = document.querySelector("#sydney .date");
  let sydneyElementTime = document.querySelector("#sydney .time");

  sydneyElementDate.innerHTML = moment().format("MMMM Do YYYY");
  sydneyElementTime.innerHTML = sydneyElement.format(
    "h:mm:ss [<small>]A[</small]"
  );
  }else{
    null
  };

   let budapestElement = moment().tz("Europe/Budapest");
   if(budapestElement){
   let budapestElementDate = document.querySelector("#budapest .date");
   let budapestElementTime = document.querySelector("#budapest .time");

   budapestElementDate.innerHTML = moment().format("MMMM Do YYYY");
   budapestElementTime.innerHTML = budapestElement.format(
     "h:mm:ss [<small>]A[</small]"
   );
   }else{
    null
   };

    let tokyoElement = moment().tz("Asia/Tokyo");
    if(tokyoElement){
    let tokyoElementDate = document.querySelector("#tokyo .date");
    let tokyoElementTime = document.querySelector("#tokyo .time");

    tokyoElementDate.innerHTML = moment().format("MMMM Do YYYY");
    tokyoElementTime.innerHTML = tokyoElement.format(
      "h:mm:ss [<small>]A[</small]"
    );
    }else{
        null
    };

},1000);

function updateCity(event){
    let cityTimeZone = event.target.value;
    if (cityTimeZone==="current"){
      cityTimeZone=moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_"," ").split("/")[1];
    let cityElement = moment().tz(cityTimeZone);
    let cityElementDate = moment().format("MMMM Do YYYY");
    let cityElementTime = cityElement.format("h:mm:ss [<small>]A[</small]");
    let cities=document.querySelector("#cities");
    cities.innerHTML = `
      <div class="city row">
        <div class="col-sm">
        <h2>${cityName}</h2>
        <div class="date">${cityElementDate}</div>
        </div>
        <div class="col-sm text-end">
        <div class="time">${cityElementTime}</div>
        </div>
    </div>
    `;
}

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", updateCity);