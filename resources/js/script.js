(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let deadline = "July 17, 2021 00:00:00",
    countDown = new Date(deadline).getTime(),
    x = setInterval(function () {
      let now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));

      //do something later when date is reached
      if (distance < 0) {
        let headline = document.getElementById("headline"),
          countdown = document.getElementById("countdown"),
          content = document.getElementById("content");

        headline.innerText = "HAPPY NEW SEMESTER";
        countdown.style.display = "none";
        content.style.display = "block";

        clearInterval(x);
      }
      //seconds
    }, 0);
})();

// theme toggle

const body = document.body;




const toggle = document.getElementById("toggle");
toggle.onclick = () => {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
    // localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    // localStorage.setItem("theme", "light");
  }
};

// if (theme) {
//   console.log(theme);
// }
