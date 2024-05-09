let btnReload = document.querySelector(".reload");
let ul = document.querySelector(".container ul");
let title = document.querySelector(".container .title");

window.onload = function () {
  if (window.navigator.onLine) {
    onLine();
  } else {
    offLine();
  }
};

window.addEventListener("online", function () {
  onLine();
});
window.addEventListener("offline", function () {
  offLine();
});
function onLine() {
  title.innerHTML = "Online Now";
  title.style.color = "green";
  ul.classList.add("hide");
  btnReload.style.display = "none";
}

function offLine() {
  title.style.color = "black";
  title.innerHTML = "You're not connected";
  ul.classList.remove("hide");
  btnReload.style.display = "block";
}

btnReload.addEventListener("click", function () {
  window.location.reload();
});

///
///
///
///
///
///
////
///
///
//

// function checkInternetConnection() {
//   if (navigator.onLine) {
//     title.innerHTML = "Online Now";
//     title.style.color = "green";
//     ul.classList.add("hide");
//     btnReload.style.display = "none";
//   } else {
//     title.style.color = "black";
//     title.innerHTML = "You're not connected";
//     ul.classList.remove("hide");
//     btnReload.style.display = "block";
//   }
// }

// checkInternetConnection();

// window.addEventListener("online", checkInternetConnection);
// window.addEventListener("offline", checkInternetConnection);
