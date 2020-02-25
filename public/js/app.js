console.log("client side javascript loaded");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const mess1 = document.querySelector("#m-1");
const mess2 = document.querySelector("#m-2");
weatherForm.addEventListener("submit", e => {
  e.preventDefault();

  const location = search.value;
  mess1.textContent = "Loading";
  mess2.textContent = "";
  //   console.log("Testing");
  // console.log(location);

  fetch("http://localhost:2323/weather?address=" + location).then(response => {
    response.json().then(data => {
      if (data.error) {
        mess1.textContent = data.error;
      } else {
        mess1.textContent = data.location;
        mess2.textContent = data.forecast;
        console.log(data.forecast);
      }
    });
  });
});
