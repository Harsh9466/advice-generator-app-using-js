const getAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("adviceId").innerHTML =
        data.slip.id || "Loading...";
      document.getElementById("advice").innerHTML = data.slip.advice;
    });
};
getAdvice();
