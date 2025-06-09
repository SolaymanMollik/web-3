if (window.localStorage.getItem("dev") !== "Y") {

  document.getElementById(
    "the-loader"
  ).innerHTML = `<div id="loader-container"><div class="loader"></div></div>`;

  const load = () => {
    console.log("loaded");
    document.getElementById("the-loader").innerHTML = "";
  };




window.addEventListener('load', () => load())




//   setTimeout(load, 2000);
}
