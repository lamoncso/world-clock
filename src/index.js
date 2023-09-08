setInterval(function () {
  let sydneyElement = moment().tz("Australia/Sydney");
  let sydneyElementDate = document.querySelector("#sydney .date");
  let sydneyElementTime = document.querySelector("#sydney .time");

  sydneyElementDate.innerHTML = moment().format("MMMM Do YYYY");
  sydneyElementTime.innerHTML = sydneyElement.format(
    "h:mm:ss [<small>]A[</small]"
  );

   let budapestElement = moment().tz("Europe/Budapest");
   let budapestElementDate = document.querySelector("#budapest .date");
   let budapestElementTime = document.querySelector("#budapest .time");

   budapestElementDate.innerHTML = moment().format("MMMM Do YYYY");
   budapestElementTime.innerHTML = budapestElement.format(
     "h:mm:ss [<small>]A[</small]"
   );

    let tokyoElement = moment().tz("Asia/Tokyo");
    let tokyoElementDate = document.querySelector("#tokyo .date");
    let tokyoElementTime = document.querySelector("#tokyo .time");

    tokyoElementDate.innerHTML = moment().format("MMMM Do YYYY");
    tokyoElementTime.innerHTML = tokyoElement.format(
      "h:mm:ss [<small>]A[</small]"
    );

},1000);